const express = require('express');
const Database = require('better-sqlite3');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const dataDir = process.env.DB_PATH ? path.dirname(process.env.DB_PATH) : null;
if (dataDir && !require('fs').existsSync(dataDir)) {
  require('fs').mkdirSync(dataDir, { recursive: true });
}
const dbPath = process.env.DB_PATH || path.join(__dirname, 'data', 'projects.db');
if (!process.env.DB_PATH && !require('fs').existsSync(path.join(__dirname, 'data'))) {
  require('fs').mkdirSync(path.join(__dirname, 'data'), { recursive: true });
}
const db = new Database(dbPath);
db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

// 创建表结构
db.exec(`
  CREATE TABLE IF NOT EXISTS projects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    procurement_type TEXT NOT NULL,
    created_by TEXT NOT NULL DEFAULT '项目经理',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    template_snapshot TEXT
  );

  CREATE TABLE IF NOT EXISTS project_stages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    project_id INTEGER NOT NULL,
    stage_order INTEGER NOT NULL,
    status TEXT NOT NULL DEFAULT 'pending' CHECK(status IN ('pending', 'completed')),
    completed_at DATETIME,
    FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS project_shares (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    project_id INTEGER NOT NULL,
    shared_by TEXT NOT NULL,
    shared_with TEXT NOT NULL,
    permission TEXT NOT NULL CHECK(permission IN ('view', 'edit')),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE,
    UNIQUE(project_id, shared_with)
  );

  CREATE TABLE IF NOT EXISTS procurement_type_templates (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS procurement_type_stages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    template_id INTEGER NOT NULL,
    stage_order INTEGER NOT NULL,
    name TEXT NOT NULL,
    duration_days INTEGER NOT NULL DEFAULT 0,
    duration_label TEXT NOT NULL DEFAULT '',
    note TEXT DEFAULT '',
    FOREIGN KEY (template_id) REFERENCES procurement_type_templates(id) ON DELETE CASCADE
  );
`);

// 兼容旧表：尝试添加 template_snapshot 列（如果不存在）
try {
  db.exec('ALTER TABLE projects ADD COLUMN template_snapshot TEXT');
} catch(e) { /* 列已存在，忽略 */ }

// ==================== 默认模板初始化 ====================
const DEFAULT_TEMPLATES = {
  '考察评估': [
    { order: 1,  name: '立项流程',                   durationDays: 0,  durationLabel: '已完成', note: '已完成' },
    { order: 2,  name: '工作小组会议',               durationDays: 1,  durationLabel: '1天',    note: '需根据小组成员时间约会' },
    { order: 3,  name: '考察评估方案工作小组会签',    durationDays: 3,  durationLabel: '3天',    note: '需根据组员、组长、证券事务部及监督部门会签及时程度调整' },
    { order: 4,  name: '考察评估方案领导小组会签',    durationDays: 3,  durationLabel: '3天',    note: '需根据领导会签及时程度调整' },
    { order: 5,  name: '考察评估邀请&供应商准备投标资料', durationDays: 7, durationLabel: '7天', note: '' },
    { order: 6,  name: '考察评估评标',                durationDays: 1,  durationLabel: '1天',    note: '需根据组员、组长、证券事务部及监督部门时间约会' },
    { order: 7,  name: '考察评估评标资料准备',        durationDays: 3,  durationLabel: '3天',    note: '需根据组长及组员签字及时程度调整' },
    { order: 8,  name: '会议纪要工作小组会签',        durationDays: 3,  durationLabel: '3天',    note: '需根据组员、组长、证券事务部及监督部门会签及时程度调整' },
    { order: 9,  name: '提请结果报告',                durationDays: 5,  durationLabel: '5天',    note: '根据证券事务部资料审核及资料修改时间调整' },
    { order: 10, name: '等待考察评估领导小组会议',    durationDays: 30, durationLabel: '1个月',  note: '由证券事务部协调领导小组时间，不可控' },
    { order: 11, name: '中标通知及合同签署',          durationDays: 15, durationLabel: '15天',   note: '根据供应商合同审批及我方合同审批及时程度调整' }
  ],
  '单一来源采购': [
    { order: 1,  name: '立项流程',                   durationDays: 0,  durationLabel: '已完成', note: '已完成' },
    { order: 2,  name: '工作小组会议',               durationDays: 1,  durationLabel: '1天',    note: '需根据小组成员时间约会' },
    { order: 3,  name: '购置方案工作小组会签',        durationDays: 3,  durationLabel: '3天',    note: '需根据组员、组长、证券事务部及监督部门会签及时程度调整' },
    { order: 4,  name: '提请结果报告',                durationDays: 5,  durationLabel: '5天',    note: '根据证券事务部资料审核及资料修改时间调整' },
    { order: 5,  name: '等待招标领导小组会议',        durationDays: 60, durationLabel: '2个月',  note: '由证券事务部协调领导小组时间，不可控，可能恰巧赶上，也可能会更久' },
    { order: 6,  name: '供应商准备报价单',            durationDays: 3,  durationLabel: '3天',    note: '' },
    { order: 7,  name: '商务谈判',                   durationDays: 1,  durationLabel: '1天',    note: '需根据组员、组长、证券事务部及监督部门时间约会' },
    { order: 8,  name: '会议纪要工作小组会签',        durationDays: 3,  durationLabel: '3天',    note: '需根据组员、组长、证券事务部及监督部门会签及时程度调整' },
    { order: 9,  name: '提请结果报告',                durationDays: 5,  durationLabel: '5天',    note: '根据证券事务部资料审核及资料修改时间调整' },
    { order: 10, name: '等待招标领导小组会议',        durationDays: 60, durationLabel: '2个月',  note: '由证券事务部协调领导小组时间，不可控，可能恰巧赶上，也可能会更久' },
    { order: 11, name: '合同签署',                   durationDays: 10, durationLabel: '10天',   note: '根据供应商合同审批及我方合同审批及时程度调整' }
  ]
};

// 初始化默认模板到数据库
function initDefaultTemplates() {
  const existingTypes = db.prepare('SELECT name FROM procurement_type_templates').all().map(r => r.name);
  const insertTemplate = db.prepare('INSERT INTO procurement_type_templates (name) VALUES (?)');
  const insertStage = db.prepare('INSERT INTO procurement_type_stages (template_id, stage_order, name, duration_days, duration_label, note) VALUES (?, ?, ?, ?, ?, ?)');

  const initTxn = db.transaction(() => {
    for (const [typeName, stages] of Object.entries(DEFAULT_TEMPLATES)) {
      if (!existingTypes.includes(typeName)) {
        const result = insertTemplate.run(typeName);
        const templateId = result.lastInsertRowid;
        for (const stage of stages) {
          insertStage.run(templateId, stage.order, stage.name, stage.durationDays, stage.durationLabel, stage.note);
        }
      }
    }
  });
  initTxn();

  // 为已有项目补填 template_snapshot
  db.prepare(`
    UPDATE projects SET template_snapshot = ? 
    WHERE template_snapshot IS NULL AND procurement_type = ?
  `).run(JSON.stringify(DEFAULT_TEMPLATES['考察评估']), '考察评估');
  db.prepare(`
    UPDATE projects SET template_snapshot = ? 
    WHERE template_snapshot IS NULL AND procurement_type = ?
  `).run(JSON.stringify(DEFAULT_TEMPLATES['单一来源采购']), '单一来源采购');
}
initDefaultTemplates();

// ==================== 模板读取工具 ====================
// 从数据库获取某个采购类型的环节模板
function getTemplateFromDB(typeName) {
  const template = db.prepare('SELECT id FROM procurement_type_templates WHERE name = ?').get(typeName);
  if (!template) return null;
  const stages = db.prepare(
    'SELECT stage_order as "order", name, duration_days as durationDays, duration_label as duration, note FROM procurement_type_stages WHERE template_id = ? ORDER BY stage_order'
  ).all(template.id);
  return stages;
}

// 获取模板快照JSON（用于创建项目时保存）
function getTemplateSnapshot(typeName) {
  const stages = getTemplateFromDB(typeName);
  return stages ? JSON.stringify(stages) : null;
}

// ==================== 权限工具函数 ====================

// 管理员角色列表
const ADMIN_ROLES = ['爱丽丝'];

// 检查用户是否对项目有访问权限，返回权限级别
function getUserPermission(projectId, userName) {
  if (ADMIN_ROLES.includes(userName)) return 'edit';

  const project = db.prepare('SELECT created_by FROM projects WHERE id = ?').get(projectId);
  if (!project) return null;
  if (project.created_by === userName) return 'edit';

  const share = db.prepare(
    'SELECT permission FROM project_shares WHERE project_id = ? AND shared_with = ?'
  ).get(projectId, userName);

  return share ? share.permission : null;
}

// 检查用户对项目是否有编辑权限
function canEdit(projectId, userName) {
  const perm = getUserPermission(projectId, userName);
  return perm === 'edit';
}

// 检查用户对项目是否有访问权限
function canAccess(projectId, userName) {
  return getUserPermission(projectId, userName) !== null;
}

// 获取用户可见的所有项目ID
function getUserProjectIds(userName) {
  if (ADMIN_ROLES.includes(userName)) {
    return db.prepare('SELECT id FROM projects').all().map(p => p.id);
  }

  const ownProjects = db.prepare('SELECT id FROM projects WHERE created_by = ?').all(userName);
  const sharedProjects = db.prepare(
    'SELECT DISTINCT project_id as id FROM project_shares WHERE shared_with = ?'
  ).all(userName);

  const ids = new Set();
  ownProjects.forEach(p => ids.add(p.id));
  sharedProjects.forEach(p => ids.add(p.id));
  return [...ids];
}

// 计算预估结束日期
function calcEstimatedEndDate(templateSnapshot, completedStageOrders, createdDate) {
  if (!templateSnapshot) return null;
  try {
    const stages = typeof templateSnapshot === 'string' ? JSON.parse(templateSnapshot) : templateSnapshot;
    const completedSet = new Set(completedStageOrders);
    const remainingDays = stages
      .filter(s => !completedSet.has(s.order))
      .reduce((sum, s) => sum + (s.durationDays || 0), 0);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const endDate = new Date(today);
    endDate.setDate(endDate.getDate() + remainingDays);
    return endDate.toISOString().split('T')[0];
  } catch(e) {
    return null;
  }
}

// ==================== 中间件：从 query 读取当前用户 ====================
function getCurrentUser(req) {
  return req.query.user || req.headers['x-user'] || '张三';
}

// ==================== API 路由 ====================

// 获取用户列表（可用于分享选择）
app.get('/api/users', (req, res) => {
  const users = db.prepare('SELECT DISTINCT created_by FROM projects').all().map(p => p.created_by);
  const shareRecipients = db.prepare('SELECT DISTINCT shared_with FROM project_shares').all().map(s => s.shared_with);
  const allUsers = [...new Set([...users, ...shareRecipients, '张三', '李四', '王五', '罗伯特', '爱丽丝'])];
  res.json(allUsers);
});

// 获取采购类型列表（从数据库读取）
app.get('/api/procurement-types', (req, res) => {
  const types = db.prepare('SELECT name FROM procurement_type_templates ORDER BY id').all().map(t => t.name);
  res.json(types);
});

// 获取某个采购类型的环节模板（从数据库读取）
app.get('/api/stage-template/:type', (req, res) => {
  const template = getTemplateFromDB(req.params.type);
  if (!template) {
    return res.status(404).json({ error: '未知的采购类型' });
  }
  res.json(template);
});

// ==================== 模板管理 API（仅管理员） ====================

// 获取所有采购类型及其环节（管理员用）
app.get('/api/admin/templates', (req, res) => {
  const userName = getCurrentUser(req);
  if (!ADMIN_ROLES.includes(userName)) return res.status(403).json({ error: '仅管理员可管理模板' });

  const types = db.prepare('SELECT * FROM procurement_type_templates ORDER BY id').all();
  const result = types.map(t => {
    const stages = db.prepare(
      'SELECT id, stage_order, name, duration_days, duration_label, note FROM procurement_type_stages WHERE template_id = ? ORDER BY stage_order'
    ).all(t.id);
    return { ...t, stages };
  });
  res.json(result);
});

// 获取单个采购类型模板详情（管理员用）
app.get('/api/admin/templates/:id', (req, res) => {
  const userName = getCurrentUser(req);
  if (!ADMIN_ROLES.includes(userName)) return res.status(403).json({ error: '仅管理员可管理模板' });

  const template = db.prepare('SELECT * FROM procurement_type_templates WHERE id = ?').get(parseInt(req.params.id));
  if (!template) return res.status(404).json({ error: '模板不存在' });
  template.stages = db.prepare(
    'SELECT id, stage_order, name, duration_days, duration_label, note FROM procurement_type_stages WHERE template_id = ? ORDER BY stage_order'
  ).all(template.id);
  res.json(template);
});

// 创建新的采购类型模板
app.post('/api/admin/templates', (req, res) => {
  const userName = getCurrentUser(req);
  if (!ADMIN_ROLES.includes(userName)) return res.status(403).json({ error: '仅管理员可管理模板' });

  const { name, stages } = req.body;
  if (!name || !Array.isArray(stages) || stages.length === 0) {
    return res.status(400).json({ error: '模板名称和至少一个环节为必填项' });
  }

  // 检查名称唯一性
  const existing = db.prepare('SELECT id FROM procurement_type_templates WHERE name = ?').get(name);
  if (existing) return res.status(400).json({ error: '该采购类型名称已存在' });

  const txn = db.transaction(() => {
    const result = db.prepare('INSERT INTO procurement_type_templates (name) VALUES (?)').run(name);
    const templateId = result.lastInsertRowid;
    const insertStage = db.prepare(
      'INSERT INTO procurement_type_stages (template_id, stage_order, name, duration_days, duration_label, note) VALUES (?, ?, ?, ?, ?, ?)'
    );
    for (let i = 0; i < stages.length; i++) {
      const s = stages[i];
      insertStage.run(templateId, i + 1, s.name, s.duration_days || 0, s.duration_label || '', s.note || '');
    }
    return templateId;
  });
  const newId = txn();
  res.status(201).json({ id: newId, message: '模板创建成功' });
});

// 更新采购类型模板
app.put('/api/admin/templates/:id', (req, res) => {
  const userName = getCurrentUser(req);
  if (!ADMIN_ROLES.includes(userName)) return res.status(403).json({ error: '仅管理员可管理模板' });

  const templateId = parseInt(req.params.id);
  const template = db.prepare('SELECT * FROM procurement_type_templates WHERE id = ?').get(templateId);
  if (!template) return res.status(404).json({ error: '模板不存在' });

  const { name, stages } = req.body;
  if (!name || !Array.isArray(stages) || stages.length === 0) {
    return res.status(400).json({ error: '模板名称和至少一个环节为必填项' });
  }

  // 检查名称唯一性（排除自己）
  const dup = db.prepare('SELECT id FROM procurement_type_templates WHERE name = ? AND id != ?').get(name, templateId);
  if (dup) return res.status(400).json({ error: '该采购类型名称已存在' });

  const txn = db.transaction(() => {
    db.prepare('UPDATE procurement_type_templates SET name = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?').run(name, templateId);
    db.prepare('DELETE FROM procurement_type_stages WHERE template_id = ?').run(templateId);
    const insertStage = db.prepare(
      'INSERT INTO procurement_type_stages (template_id, stage_order, name, duration_days, duration_label, note) VALUES (?, ?, ?, ?, ?, ?)'
    );
    for (let i = 0; i < stages.length; i++) {
      const s = stages[i];
      insertStage.run(templateId, i + 1, s.name, s.duration_days || 0, s.duration_label || '', s.note || '');
    }
  });
  txn();
  res.json({ message: '模板更新成功' });
});

// 删除采购类型模板
app.delete('/api/admin/templates/:id', (req, res) => {
  const userName = getCurrentUser(req);
  if (!ADMIN_ROLES.includes(userName)) return res.status(403).json({ error: '仅管理员可管理模板' });

  const templateId = parseInt(req.params.id);
  const template = db.prepare('SELECT * FROM procurement_type_templates WHERE id = ?').get(templateId);
  if (!template) return res.status(404).json({ error: '模板不存在' });

  // 检查是否有项目使用该类型
  const usageCount = db.prepare('SELECT COUNT(*) as cnt FROM projects WHERE procurement_type = ?').get(template.name).cnt;
  if (usageCount > 0) {
    return res.status(400).json({ error: `有 ${usageCount} 个历史项目使用该类型，不可删除（可修改名称后禁用）` });
  }

  db.prepare('DELETE FROM procurement_type_templates WHERE id = ?').run(templateId);
  res.json({ message: '模板已删除' });
});

// 创建项目
app.post('/api/projects', (req, res) => {
  const { name, procurement_type, created_by } = req.body;
  const userName = created_by || getCurrentUser(req);

  if (!name || !procurement_type) {
    return res.status(400).json({ error: '项目名称和采购类型为必填项' });
  }

  const templateStages = getTemplateFromDB(procurement_type);
  if (!templateStages) {
    return res.status(400).json({ error: '无效的采购类型' });
  }

  const snapshot = JSON.stringify(templateStages);

  const insertProject = db.prepare(
    'INSERT INTO projects (name, procurement_type, created_by, template_snapshot) VALUES (?, ?, ?, ?)'
  );
  const result = insertProject.run(name, procurement_type, userName, snapshot);
  const projectId = result.lastInsertRowid;

  // 自动创建所有环节，第一环节（立项流程）默认已完成
  const insertStage = db.prepare(
    'INSERT INTO project_stages (project_id, stage_order, status, completed_at) VALUES (?, ?, ?, ?)'
  );

  const insertMany = db.transaction(() => {
    for (const stage of templateStages) {
      const status = stage.order === 1 ? 'completed' : 'pending';
      const completedAt = stage.order === 1 ? new Date().toISOString() : null;
      insertStage.run(projectId, stage.order, status, completedAt);
    }
  });
  insertMany();

  res.status(201).json({ id: projectId, message: '项目创建成功' });
});

// 获取用户可见项目列表（含进度统计和预估结束时间）
app.get('/api/projects', (req, res) => {
  const userName = getCurrentUser(req);
  const visibleIds = getUserProjectIds(userName);

  if (visibleIds.length === 0) {
    return res.json([]);
  }

  const placeholders = visibleIds.map(() => '?').join(',');
  const projects = db.prepare(`
    SELECT p.*,
      (SELECT COUNT(*) FROM project_stages WHERE project_id = p.id) AS total_stages,
      (SELECT COUNT(*) FROM project_stages WHERE project_id = p.id AND status = 'completed') AS completed_stages,
      CASE WHEN p.created_by = ? THEN 'owner'
           WHEN ? IN (${ADMIN_ROLES.map(() => '?').join(',')}) THEN 'edit'
           ELSE (SELECT permission FROM project_shares WHERE project_id = p.id AND shared_with = ?)
      END AS access_type
    FROM projects p
    WHERE p.id IN (${placeholders})
    ORDER BY p.created_at DESC
  `).all(userName, userName, ...ADMIN_ROLES, userName, ...visibleIds);

  // 为每个项目计算预估结束时间和剩余天数
  const projectsWithEstimate = projects.map(p => {
    let estimatedEndDate = null;
    let remainingDays = 0;
    let currentStageName = '全部完成';

    if (p.template_snapshot) {
      try {
        const stages = JSON.parse(p.template_snapshot);
        const completedOrders = db.prepare(
          'SELECT stage_order FROM project_stages WHERE project_id = ? AND status = ?'
        ).all(p.id, 'completed').map(s => s.stage_order);
        const completedSet = new Set(completedOrders);

        const pendingStages = stages.filter(s => !completedSet.has(s.order));
        remainingDays = pendingStages.reduce((sum, s) => sum + (s.durationDays || 0), 0);

        if (remainingDays > 0) {
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          const endDate = new Date(today);
          endDate.setDate(endDate.getDate() + remainingDays);
          estimatedEndDate = endDate.toISOString().split('T')[0];
        }

        // 找当前环节名称
        const firstPending = stages.find(s => !completedSet.has(s.order));
        if (firstPending) currentStageName = firstPending.name;
      } catch(e) { /* 忽略解析错误 */ }
    }

    return { ...p, estimated_end_date: estimatedEndDate, remaining_days: remainingDays, current_stage_name: currentStageName };
  });

  res.json(projectsWithEstimate);
});

// 获取单个项目详情（含所有环节和分享信息）
app.get('/api/projects/:id', (req, res) => {
  const userName = getCurrentUser(req);
  const projectId = parseInt(req.params.id);

  if (!canAccess(projectId, userName)) {
    return res.status(403).json({ error: '无权访问该项目' });
  }

  const project = db.prepare('SELECT * FROM projects WHERE id = ?').get(projectId);
  if (!project) {
    return res.status(404).json({ error: '项目不存在' });
  }

  // 使用项目创建时的模板快照，保证历史项目不受模板更新影响
  let template;
  try {
    template = project.template_snapshot ? JSON.parse(project.template_snapshot) : [];
  } catch(e) {
    template = [];
  }

  const dbStages = db.prepare(
    'SELECT * FROM project_stages WHERE project_id = ? ORDER BY stage_order'
  ).all(project.id);

  // 合并模板数据和项目实际状态
  const stages = template.map(t => {
    const dbStage = dbStages.find(s => s.stage_order === t.order);
    return {
      ...t,
      status: dbStage ? dbStage.status : 'pending',
      completed_at: dbStage ? dbStage.completed_at : null,
      stage_id: dbStage ? dbStage.id : null
    };
  });

  const totalStages = stages.length;
  const completedStages = stages.filter(s => s.status === 'completed').length;
  const progress = totalStages > 0 ? Math.round((completedStages / totalStages) * 100) : 0;

  // 计算剩余预估时间
  const remainingDays = stages
    .filter(s => s.status === 'pending')
    .reduce((sum, s) => sum + (s.durationDays || 0), 0);

  // 计算预估结束日期
  let estimatedEndDate = null;
  if (remainingDays > 0) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const endDate = new Date(today);
    endDate.setDate(endDate.getDate() + remainingDays);
    estimatedEndDate = endDate.toISOString().split('T')[0];
  }

  // 找出当前进行中的环节（第一个pending的环节）
  const currentStage = stages.find(s => s.status === 'pending');

  // 计算已完成环节的累计耗时
  const elapsedDays = stages
    .filter(s => s.status === 'completed')
    .reduce((sum, s) => sum + (s.durationDays || 0), 0);

  // 获取分享记录
  const shares = db.prepare(
    'SELECT id, shared_with, permission, created_at FROM project_shares WHERE project_id = ? ORDER BY created_at DESC'
  ).all(projectId);

  const userPermission = getUserPermission(projectId, userName);

  res.json({
    ...project,
    stages,
    progress,
    totalStages,
    completedStages,
    remainingDays,
    estimatedEndDate,
    elapsedDays,
    currentStage: currentStage || null,
    shares,
    userPermission,
    isOwner: project.created_by === userName
  });
});

// 分享项目
app.post('/api/projects/:id/share', (req, res) => {
  const userName = getCurrentUser(req);
  const projectId = parseInt(req.params.id);
  const { shared_with, permission } = req.body;

  if (!canEdit(projectId, userName)) {
    return res.status(403).json({ error: '无权分享该项目' });
  }

  if (!shared_with || !permission) {
    return res.status(400).json({ error: '分享对象和权限为必填项' });
  }

  if (!['view', 'edit'].includes(permission)) {
    return res.status(400).json({ error: '无效的权限类型' });
  }

  // 检查项目是否存在
  const project = db.prepare('SELECT * FROM projects WHERE id = ?').get(projectId);
  if (!project) {
    return res.status(404).json({ error: '项目不存在' });
  }

  // 不能分享给自己
  if (shared_with === userName) {
    return res.status(400).json({ error: '不能分享给自己' });
  }

  // 不能分享给项目创建者
  if (shared_with === project.created_by) {
    return res.status(400).json({ error: '项目创建者默认拥有权限，无需分享' });
  }

  try {
    db.prepare(
      'INSERT INTO project_shares (project_id, shared_by, shared_with, permission) VALUES (?, ?, ?, ?)'
    ).run(projectId, userName, shared_with, permission);
    res.status(201).json({ message: '分享成功' });
  } catch (err) {
    if (err.message.includes('UNIQUE')) {
      return res.status(400).json({ error: '已分享给该用户，请先取消后再重新分享' });
    }
    throw err;
  }
});

// 更新分享权限
app.put('/api/projects/:id/share/:shareId', (req, res) => {
  const userName = getCurrentUser(req);
  const projectId = parseInt(req.params.id);
  const shareId = parseInt(req.params.shareId);
  const { permission } = req.body;

  if (!canEdit(projectId, userName)) {
    return res.status(403).json({ error: '无权修改分享权限' });
  }

  if (!['view', 'edit'].includes(permission)) {
    return res.status(400).json({ error: '无效的权限类型' });
  }

  const result = db.prepare(
    'UPDATE project_shares SET permission = ? WHERE id = ? AND project_id = ?'
  ).run(permission, shareId, projectId);

  if (result.changes === 0) {
    return res.status(404).json({ error: '分享记录不存在' });
  }

  res.json({ message: '权限已更新' });
});

// 取消分享
app.delete('/api/projects/:id/share/:shareId', (req, res) => {
  const userName = getCurrentUser(req);
  const projectId = parseInt(req.params.id);
  const shareId = parseInt(req.params.shareId);

  if (!canEdit(projectId, userName)) {
    return res.status(403).json({ error: '无权取消分享' });
  }

  const result = db.prepare(
    'DELETE FROM project_shares WHERE id = ? AND project_id = ?'
  ).run(shareId, projectId);

  if (result.changes === 0) {
    return res.status(404).json({ error: '分享记录不存在' });
  }

  res.json({ message: '已取消分享' });
});

// 标记环节为已完成
app.post('/api/projects/:projectId/stages/:stageOrder/complete', (req, res) => {
  const userName = getCurrentUser(req);
  const { projectId, stageOrder } = req.params;
  const orderNum = parseInt(stageOrder);
  const pid = parseInt(projectId);

  if (!canEdit(pid, userName)) {
    return res.status(403).json({ error: '无权操作该项目' });
  }

  const project = db.prepare('SELECT * FROM projects WHERE id = ?').get(pid);
  if (!project) {
    return res.status(404).json({ error: '项目不存在' });
  }

  // 检查前面的环节是否都已完成
  const prevStages = db.prepare(
    'SELECT * FROM project_stages WHERE project_id = ? AND stage_order < ? AND status != ?'
  ).all(pid, orderNum, 'completed');

  if (prevStages.length > 0) {
    return res.status(400).json({
      error: '请先完成前面的环节',
      pending_stages: prevStages.map(s => s.stage_order)
    });
  }

  const currentStage = db.prepare(
    'SELECT * FROM project_stages WHERE project_id = ? AND stage_order = ?'
  ).get(pid, orderNum);

  if (!currentStage) {
    return res.status(404).json({ error: '环节不存在' });
  }

  if (currentStage.status === 'completed') {
    return res.status(400).json({ error: '该环节已经完成' });
  }

  db.prepare(
    'UPDATE project_stages SET status = ?, completed_at = ? WHERE project_id = ? AND stage_order = ?'
  ).run('completed', new Date().toISOString(), pid, orderNum);

  res.json({ message: '环节标记完成', stage_order: orderNum });
});

// 重置环节状态
app.post('/api/projects/:projectId/stages/:stageOrder/reset', (req, res) => {
  const userName = getCurrentUser(req);
  const { projectId, stageOrder } = req.params;
  const orderNum = parseInt(stageOrder);
  const pid = parseInt(projectId);

  if (!canEdit(pid, userName)) {
    return res.status(403).json({ error: '无权操作该项目' });
  }

  const project = db.prepare('SELECT * FROM projects WHERE id = ?').get(pid);
  if (!project) {
    return res.status(404).json({ error: '项目不存在' });
  }

  if (orderNum === 1) {
    return res.status(400).json({ error: '立项流程不可重置' });
  }

  db.prepare(
    'UPDATE project_stages SET status = ?, completed_at = NULL WHERE project_id = ? AND stage_order = ?'
  ).run('pending', pid, orderNum);

  res.json({ message: '环节已重置', stage_order: orderNum });
});

// 删除项目
app.delete('/api/projects/:id', (req, res) => {
  const userName = getCurrentUser(req);
  const pid = parseInt(req.params.id);

  if (!canEdit(pid, userName)) {
    return res.status(403).json({ error: '无权删除该项目' });
  }

  const result = db.prepare('DELETE FROM projects WHERE id = ?').run(pid);
  if (result.changes === 0) {
    return res.status(404).json({ error: '项目不存在' });
  }
  res.json({ message: '项目已删除' });
});

// 获取统计概览
app.get('/api/stats', (req, res) => {
  const userName = getCurrentUser(req);
  const visibleIds = getUserProjectIds(userName);

  if (visibleIds.length === 0) {
    return res.json({ totalProjects: 0, completedProjects: 0, inProgressProjects: 0, typeStats: [] });
  }

  const placeholders = visibleIds.map(() => '?').join(',');
  const projects = db.prepare(`
    SELECT p.*,
      (SELECT COUNT(*) FROM project_stages WHERE project_id = p.id) AS total_stages,
      (SELECT COUNT(*) FROM project_stages WHERE project_id = p.id AND status = 'completed') AS completed_stages
    FROM projects p
    WHERE p.id IN (${placeholders})
  `).all(...visibleIds);

  const totalProjects = projects.length;
  const completedProjects = projects.filter(p => p.total_stages > 0 && p.completed_stages === p.total_stages).length;
  const inProgressProjects = totalProjects - completedProjects;

  const typeStats = db.prepare(`
    SELECT procurement_type, COUNT(*) as count FROM projects
    WHERE id IN (${placeholders})
    GROUP BY procurement_type
  `).all(...visibleIds);

  res.json({ totalProjects, completedProjects, inProgressProjects, typeStats });
});

// 启动服务器
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 采购项目助手已启动: http://localhost:${PORT}`);
});
