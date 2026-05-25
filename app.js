// SVG图标库
const ICONS = {
  book: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 19.5C4 18.837 4.26339 18.2507 4.75 17.75C5.98044 16.5196 7.94017 16 10.5 16C13.0598 16 15.0196 16.5196 16.25 17.75C16.7366 18.2507 17 18.837 17 19.5V20H4V19.5Z" fill="currentColor"/>
    <path d="M19 19H17.9598C17.9864 18.8362 18 18.6697 18 18.5V12H19V19Z" fill="currentColor"/>
    <path d="M19 10H18V6C18 4.89543 17.1046 4 16 4H9C7.89543 4 7 4.89543 7 6V10H4C3.44772 10 3 10.4477 3 11V20C3 20.5523 3.44772 21 4 21H19C19.5523 21 20 20.5523 20 20V11C20 10.4477 19.5523 10 19 10ZM9 6H16V10H9V6ZM5 19V12H7V15.5013C7 15.8953 6.83877 16.2688 6.5592 16.5484C6.20511 16.9025 5.61305 17 5 17V19ZM18 18.5C18 19.3284 17.3284 20 16.5 20C15.6716 20 15 19.3284 15 18.5C15 17.6716 15.6716 17 16.5 17C17.3284 17 18 17.6716 18 18.5Z" fill="currentColor"/>
  </svg>`,
  feather: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.3639 2.98887C17.3639 2.98887 18.0479 1.96287 19.4159 1.96287C20.4559 1.96287 21.7409 2.75887 21.9939 4.78187C22.2479 6.80687 20.7079 7.95987 20.7079 7.95987L7.64393 21.0229L2.95893 22.4189L4.35493 17.7339L17.3639 2.98887Z" fill="currentColor"/>
    <path d="M14.3481 10.9541L8.54712 16.7541" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M18.269 8.27832L15.7209 5.73022" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  scroll: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V4C20 2.89543 19.1046 2 18 2Z" fill="currentColor" opacity="0.2"/>
    <path d="M8 6H16M8 10H16M8 14H16M8 18H12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  </svg>`,
  calculator: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6Z" fill="currentColor" opacity="0.2"/>
    <path d="M7 7H17V11H7V7Z" stroke="currentColor" stroke-width="2"/>
    <path d="M7 15H9V17H7V15Z" stroke="currentColor" stroke-width="2"/>
    <path d="M11 15H13V17H11V15Z" stroke="currentColor" stroke-width="2"/>
    <path d="M15 15H17V17H15V15Z" stroke="currentColor" stroke-width="2"/>
  </svg>`,
  language: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="currentColor" opacity="0.2"/>
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM18.5 11H15.97C15.84 9.89 15.53 8.86 15.08 7.94L17.6 5.42C18.32 6.67 18.83 8.07 19.07 9.54C19.15 9.99 18.81 10.4 18.37 10.4H18.5C18.78 10.4 19 10.18 19 9.9C19 9.62 18.78 9.4 18.5 9.4V11ZM12 4C11.26 4 10.58 4.12 9.95 4.32L11.97 7.44C11.99 7.48 12 7.54 12 7.6V4ZM4.93 9.54C5.17 8.07 5.68 6.67 6.4 5.42L8.92 7.94C8.47 8.86 8.16 9.89 8.03 11H5.5C5.22 11 5 11.22 5 11.5C5 11.78 5.22 12 5.5 12H6.63C7.06 12 7.4 11.6 7.33 11.18C7.3 10.98 7.13 10.82 6.93 10.82H6.9C6.62 10.8 6.4 10.57 6.4 10.28C6.4 10.23 6.41 10.19 6.42 10.14C6.43 10.1 4.93 9.54 4.93 9.54ZM12.86 16.52C14.66 15.8 16.11 14.5 17 12.91C17.09 12.75 17 12.54 16.84 12.46C16.68 12.38 16.47 12.47 16.39 12.63C16.21 12.95 16 13.3 15.77 13.64C14.9 14.94 13.55 15.97 12 16.59V18.5C12 18.78 12.22 19 12.5 19C12.78 19 13 18.78 13 18.5V16.99C12.95 16.85 12.89 16.69 12.86 16.52ZM11.14 16.52C11.11 16.69 11.05 16.85 11 16.99V18.5C11 18.78 11.22 19 11.5 19C11.78 19 12 18.78 12 18.5V16.59C10.45 15.97 9.1 14.94 8.23 13.64C8 13.3 7.79 12.95 7.61 12.63C7.53 12.47 7.32 12.38 7.16 12.46C7 12.54 6.91 12.75 7 12.91C7.89 14.5 9.34 15.8 11.14 16.52ZM5 16C4.72 16 4.5 16.22 4.5 16.5C4.5 16.78 4.72 17 5 17H6.63C6.84 17 7.02 16.87 7.08 16.67L8.04 13H5.5C5.22 13 5 13.22 5 13.5C5 13.78 5.22 14 5.5 14H6.93C7.13 14 7.3 13.84 7.33 13.64C7.37 13.41 7.3 13.18 7.14 13.06C7.07 13 7 13 6.93 13H5ZM12 7.6V12.59L14.36 15.94C14.77 16.54 15.18 17.26 15.44 18H16.5C16.78 18 17 17.78 17 17.5C17 17.22 16.78 17 16.5 17H16.07C16.01 16.88 15.94 16.76 15.86 16.64C15.85 16.62 15.84 16.6 15.83 16.58L15.82 16.56C15.74 16.45 15.66 16.33 15.57 16.22C15.36 15.95 15.14 15.7 14.89 15.47L12 11.6L9.12 15.47C8.66 16.08 8.16 16.64 7.66 17H7.5C7.22 17 7 17.22 7 17.5C7 17.78 7.22 18 7.5 18H8.56C8.82 17.26 9.23 16.54 9.64 15.94L12 12.59V7.6Z" fill="currentColor"/>
  </svg>`,
  headphones: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 4C7.58172 4 4 7.58172 4 12V17C4 18.6569 5.34315 20 7 20H8C8.55228 20 9 19.5523 9 19V15C9 14.4477 8.55228 14 8 14H7V12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12V14H16C15.4477 14 15 14.4477 15 15V19C15 19.5523 15.4477 20 16 20H17C18.6569 20 20 18.6569 20 17V12C20 7.58172 16.4183 4 12 4Z" fill="currentColor"/>
  </svg>`,
  tv: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V16C21 17.1046 20.1046 18 19 18H5C3.89543 18 3 17.1046 3 16V6Z" fill="currentColor" opacity="0.2"/>
    <path d="M8 20L12 16L16 20H8Z" fill="currentColor"/>
    <rect x="6" y="8" width="12" height="6" rx="1" fill="currentColor" opacity="0.3"/>
  </svg>`,
  music: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3V13.5C11.4174 13.1876 10.7302 13 10 13C7.79086 13 6 14.7909 6 17C6 19.2091 7.79086 21 10 21C12.2091 21 14 19.2091 14 17V8H18V13.5C17.4174 13.1876 16.7302 13 16 13C13.7909 13 12 14.7909 12 17C12 19.2091 13.7909 21 16 21C18.2091 21 20 19.2091 20 17C20 14.7909 18.2091 13 16 13C15.7302 13 15.4671 13.0244 15.2161 13.0709L15 13V3H12Z" fill="currentColor"/>
  </svg>`,
  art: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.12 11.02L14.88 12.78L7 20.66H3.34L13.12 11.02ZM18.36 2.29C18.16 2.09 17.91 1.95 17.65 1.88C17.39 1.81 17.12 1.79 16.86 1.84C16.6 1.89 16.35 2.01 16.14 2.19L13 4.89L17.11 9L19.81 5.86C20.22 5.45 20.22 4.78 19.81 4.37L18.36 2.29ZM15.13 6.76L17.24 8.87L5.87 20H11V21H5C4.73478 21 4.48043 20.8946 4.29289 20.7071C4.10536 20.5196 4 20.2652 4 20V19L15.13 6.76Z" fill="currentColor"/>
  </svg>`,
  sport: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor" opacity="0.2"/>
    <path d="M13.5 5.5L10 16.5L18 12L13.5 5.5Z" fill="currentColor" opacity="0.7"/>
    <path d="M6 14L9.5 12L7 18L6 14Z" fill="currentColor" opacity="0.7"/>
  </svg>`,
  star: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
  </svg>`
};
// 应用状态
window.currentParent = null;
window.tasks = []; // 任务列表
window.checkinRecords = {}; // 打卡记录 {日期: {任务id: {time, parent, note}}}
window.currentView = "tasks";
window.currentCalendarMonth = new Date();
window.selectedDate = null;
window.statsMode = "week"; // week/month/custom
window.chartType = "count"; // count/duration
window.currentEditingTask = null;
window.currentCheckinTask = null;
window.currentShareImageUrl = null;
// 颜色类映射
const colorClassMap = {
  blue: "color-blue",
  green: "color-green",
  purple: "color-purple",
  orange: "color-orange",
  red: "color-red",
  indigo: "color-indigo",
  pink: "color-pink",
  teal: "color-teal",
  yellow: "color-yellow"
};
// 初始化默认任务
const defaultTasks = [
  { id: "task_1", name: "摩比爱拼音", category: "拼音", target: "每天1-2课", icon: "book", color: "blue" },
  { id: "task_2", name: "学习机拼音课程", category: "拼音", target: "每天1-2课", icon: "book", color: "blue" },
  { id: "task_3", name: "古诗词", category: "古诗词", target: "每天新学0.5-1首，复习3首", icon: "feather", color: "green" },
  { id: "task_4", name: "文言文", category: "文言文", target: "每天新学0.5-1首，复习3首", icon: "scroll", color: "purple" },
  { id: "task_5", name: "一年级学习机培优课程", category: "数学", target: "每天半小时", icon: "calculator", color: "orange" },
  { id: "task_6", name: "一年级奥数", category: "数学", target: "每天半小时", icon: "calculator", color: "orange" },
  { id: "task_7", name: "一年级新加坡数学", category: "数学", target: "每天半小时", icon: "calculator", color: "orange" },
  { id: "task_8", name: "英文绘本阅读", category: "英文阅读", target: "每天看1-3本（女巫温妮、驯龙大师）", icon: "book", color: "red" },
  { id: "task_9", name: "洪恩分级阅读", category: "分级阅读", target: "每天1-2本", icon: "book", color: "indigo" },
  { id: "task_10", name: "迪士尼英语", category: "迪士尼英语", target: "每天完成一个week内容", icon: "tv", color: "pink" },
  { id: "task_11", name: "听力训练", category: "听力训练", target: "每天30-60分钟（裸听绘本/动画片）", icon: "headphones", color: "teal" }
];
// 全局变量
let statsChart = null;
// 初始化应用
let appInitialized = false;
window.initApp = function() {
  if (appInitialized) return;
  appInitialized = true;
  try {
    console.log("开始初始化应用...");
    loadData();
    if (!tasks || tasks.length === 0) {
      console.log("初始化默认任务...");
      tasks = [...defaultTasks];
      saveData();
    }
    console.log("任务数量:", tasks.length);
    syncParentSelection();
    if (currentParent) {
      var welcomeEl = document.getElementById("welcomeSection");
      var dashboardEl = document.getElementById("dashboardSection");
      if (welcomeEl) welcomeEl.classList.add("hidden");
      if (dashboardEl) dashboardEl.classList.remove("hidden");
    }
    bindEvents();
    console.log("事件绑定完成");
    renderCurrentView();
  } catch (error) {
    console.error("初始化失败:", error);
    appInitialized = false;
    alert("初始化出错: " + error.message + "\n" + error.stack);
  }
};
// 绑定事件
function bindEvents() {
  try {
    // 切换家长按钮
    const changeParentBtn = document.getElementById("changeParentBtn");
    if (changeParentBtn) {
      changeParentBtn.addEventListener("click", function() {
        localStorage.removeItem("currentParent");
        currentParent = null;
        showWelcome();
      });
      console.log("切换家长按钮绑定成功");
    }
    // 任务管理按钮
    const manageTasksBtn = document.getElementById("manageTasksBtn");
    if (manageTasksBtn) {
      manageTasksBtn.addEventListener("click", window.openTaskManageModal);
      console.log("任务管理按钮绑定成功");
    }
    // 视图切换按钮
    document.querySelectorAll(".view-btn").forEach((btn) => {
      btn.addEventListener("click", function() {
        const view = this.getAttribute("data-view");
        switchView(view);
      });
    });
    console.log("视图切换按钮绑定成功，数量:", document.querySelectorAll(".view-btn").length);
    // 日历导航
    const prevMonthBtn = document.getElementById("prevMonth");
    if (prevMonthBtn) prevMonthBtn.addEventListener("click", prevMonth);
    const nextMonthBtn = document.getElementById("nextMonth");
    if (nextMonthBtn) nextMonthBtn.addEventListener("click", nextMonth);
    // 统计切换
    const statsTabs = document.querySelectorAll(".stats-tab-btn");
    statsTabs.forEach((btn, index) => {
      btn.addEventListener("click", function() {
        statsTabs.forEach(b => b.classList.remove("active"));
        this.classList.add("active");
        if (index === 0) statsMode = "week";
        else if (index === 1) statsMode = "month";
        else statsMode = "custom";
        const dateRangePicker = document.getElementById("dateRangePicker");
        if (statsMode === "custom") {
          dateRangePicker.classList.remove("hidden");
          initDateRangeDefaults();
        } else {
          dateRangePicker.classList.add("hidden");
        }
        renderStats();
      });
    });
    // 图表类型切换
    const chartTypeBtns = document.querySelectorAll(".chart-type-btn");
    chartTypeBtns.forEach((btn) => {
      btn.addEventListener("click", function() {
        chartTypeBtns.forEach(b => b.classList.remove("active"));
        this.classList.add("active");
        chartType = this.getAttribute("data-chart");
        renderChart();
      });
    });
    // 分享按钮
    const shareBtn = document.getElementById("shareBtn");
    if (shareBtn) shareBtn.addEventListener("click", generateShareReport);
    // 分类标签切换
    const categoryBtns = document.querySelectorAll(".category-btn");
    categoryBtns.forEach((btn) => {
      btn.addEventListener("click", function() {
        categoryBtns.forEach(b => b.classList.remove("active"));
        this.classList.add("active");
        renderTaskCards();
      });
    });
  } catch (error) {
    console.error("事件绑定失败:", error);
    alert("事件绑定出错: " + error.message);
  }
}
// 显示欢迎页面
function showWelcome() {
  document.getElementById("welcomeSection").classList.remove("hidden");
  document.getElementById("dashboardSection").classList.add("hidden");
}
// 切换视图
function switchView(view) {
  currentView = view;
  // 更新按钮样式
  document.querySelectorAll(".view-btn").forEach((btn) => {
    if (btn.getAttribute("data-view") === view) {
      btn.classList.remove("bg-gray-100", "text-gray-700");
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
  // 显示/隐藏分类过滤器
  if (view === "tasks") {
    document.getElementById("categoryFilter").classList.remove("hidden");
  } else {
    document.getElementById("categoryFilter").classList.add("hidden");
  }
  // 隐藏所有视图
  document.getElementById("taskList").classList.add("hidden");
  document.getElementById("calendarView").classList.add("hidden");
  document.getElementById("statsView").classList.add("hidden");
  // 显示对应视图
  if (view === "tasks") {
    document.getElementById("taskList").classList.remove("hidden");
    renderTaskCards();
  } else if (view === "calendar") {
    document.getElementById("calendarView").classList.remove("hidden");
    renderCalendar();
  } else if (view === "stats") {
    document.getElementById("statsView").classList.remove("hidden");
    renderStats();
  }
}
// 渲染当前视图
function renderCurrentView() {
  switchView(currentView);
}
// ==================== 打卡功能 ====================
// 渲染今日打卡任务卡片
function renderTaskCards() {
  try {
    console.log("开始渲染任务列表...");
    const taskList = document.getElementById("taskList");
    if (!taskList) {
      console.error("找不到任务列表容器");
      return;
    }
    taskList.innerHTML = "";
    const today = new Date().toISOString().split("T")[0];
    console.log("今日日期:", today);
    console.log("所有任务:", tasks);
    // 如果没有任务，显示提示
    if (!tasks || tasks.length === 0) {
      taskList.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">📋</div>
          <p class="text-lg">还没有添加任务哦</p>
          <p class="text-sm mt-2">点击右上角「任务管理」添加任务吧</p>
        </div>
      `;
      return;
    }
    // 获取选中的分类
    const selectedCategory = document.querySelector(".category-btn.active").textContent.trim();
    // 按分类分组
    const tasksByCategory = {};
    tasks.forEach(task => {
      if (selectedCategory === "全部任务" || task.category === selectedCategory) {
        if (!tasksByCategory[task.category]) {
          tasksByCategory[task.category] = [];
        }
        tasksByCategory[task.category].push(task);
      }
    });
    console.log("分类后的任务:", tasksByCategory);
    Object.keys(tasksByCategory).forEach(category => {
      const categoryTasks = tasksByCategory[category];
      const groupElement = document.createElement("div");
      groupElement.className = "task-group";
      const groupHeader = document.createElement("h3");
      groupHeader.className = "group-title";
      groupHeader.textContent = category;
      groupElement.appendChild(groupHeader);
      categoryTasks.forEach(task => {
        const isChecked = checkinRecords[today] && checkinRecords[today][task.id];
        const checkinInfo = isChecked ? checkinRecords[today][task.id] : null;
        const colorClass = colorClassMap[task.color] || "color-blue";
        const card = document.createElement("div");
        card.className = `task-card ${isChecked ? "checked" : ""}`;
        card.innerHTML = `
          <div class="task-content">
            <div class="task-left">
              <div class="task-icon ${isChecked ? "bg-green-100" : colorClass}">
                ${ICONS[task.icon] || ICONS.star}
              </div>
              <div>
                <h4>${task.name}</h4>
                <p class="task-target">🎯 ${task.target}</p>
                ${isChecked ? `
                  <p class="task-meta">
                    👤 ${checkinInfo.parent || "未知"} · ${formatTime(checkinInfo.time)} · ⏱️ ${checkinInfo.duration}分钟
                    ${checkinInfo.note ? `<br>💬 ${checkinInfo.note}` : ""}
                  </p>
                ` : ""}
              </div>
            </div>
            <div class="task-actions">
              ${isChecked ? `
                <button onclick="cancelCheckin('${task.id}')" class="action-btn cancel-btn">
                  ❌ 撤销
                </button>
              ` : `
                <button onclick="openCheckinNote('${task.id}')" class="action-btn checkin-btn">
                  ✅ 打卡
                </button>
              `}
            </div>
          </div>
        `;
        groupElement.appendChild(card);
      });
      taskList.appendChild(groupElement);
    });
    console.log("任务列表渲染完成");
  } catch (error) {
    console.error("渲染任务列表失败:", error);
    alert("渲染任务列表出错: " + error.message);
    const taskList = document.getElementById("taskList");
    if (taskList) {
      taskList.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">⚠️</div>
          <p class="text-lg">任务加载失败</p>
          <p class="text-sm mt-2">${error.message}</p>
        </div>
      `;
    }
  }
}
// 打开打卡备注弹窗
window.openCheckinNote = function(taskId) {
  try {
    currentCheckinTask = taskId;
    const durationEl = document.getElementById("checkinDuration");
    const noteEl = document.getElementById("checkinNote");
    const modalEl = document.getElementById("checkinNoteModal");
    if (durationEl) durationEl.value = "";
    if (noteEl) noteEl.value = "";
    if (modalEl) modalEl.style.display = "flex";
  } catch (e) {
    alert("打开打卡弹窗出错: " + e.message);
  }
}
// 关闭打卡备注弹窗
window.closeNoteModal = function() {
  const modalEl = document.getElementById("checkinNoteModal");
  if (modalEl) modalEl.style.display = "none";
  currentCheckinTask = null;
}
// 确认打卡
window.confirmCheckin = function() {
  try {
    if (!currentCheckinTask) {
      showToast("请选择要打卡的任务", "error");
      return;
    }
    const durationEl = document.getElementById("checkinDuration");
    const duration = parseInt(durationEl.value.trim());
    if (isNaN(duration) || duration < 1) {
      showToast("请输入有效的学习时长（至少1分钟）", "error");
      return;
    }
    const today = new Date().toISOString().split("T")[0];
    const noteEl = document.getElementById("checkinNote");
    const note = noteEl ? noteEl.value.trim() : "";
    if (!checkinRecords[today]) {
      checkinRecords[today] = {};
    }
    checkinRecords[today][currentCheckinTask] = {
      time: new Date().toISOString(),
      parent: currentParent,
      duration: duration,
      note: note
    };
    saveData();
    closeNoteModal();
    renderTaskCards();
    // 如果在统计视图，也更新统计
    if (currentView === "stats") {
      renderStats();
    }
    showToast("🎉 打卡成功！安可太棒了！", "success");
  } catch (e) {
    alert("打卡失败: " + e.message);
  }
}
// 撤销打卡
window.cancelCheckin = function(taskId) {
  try {
    const today = new Date().toISOString().split("T")[0];
    if (checkinRecords[today] && checkinRecords[today][taskId]) {
      delete checkinRecords[today][taskId];
      // 如果当天没有记录了，删除日期键
      if (Object.keys(checkinRecords[today]).length === 0) {
        delete checkinRecords[today];
      }
      saveData();
      renderTaskCards();
      // 如果在统计视图，也更新统计
      if (currentView === "stats") {
        renderStats();
      }
      showToast("已撤销打卡", "info");
    }
  } catch (e) {
    alert("撤销打卡失败: " + e.message);
  }
}
// ==================== 任务管理功能 ====================
// 更新分类标签
function updateCategoryTabs() {
  const categoryFilter = document.getElementById("categoryFilter");
  if (!categoryFilter) return;
  const categories = new Set();
  tasks.forEach(task => {
    categories.add(task.category);
  });
  categoryFilter.innerHTML = '<button class="category-btn active">全部任务</button>';
  Array.from(categories).sort().forEach(category => {
    const btn = document.createElement("button");
    btn.className = "category-btn";
    btn.textContent = category;
    categoryFilter.appendChild(btn);
  });
  categoryFilter.querySelectorAll(".category-btn").forEach((btn) => {
    btn.addEventListener("click", function() {
      categoryFilter.querySelectorAll(".category-btn").forEach(b => b.classList.remove("active"));
      this.classList.add("active");
      renderTaskCards();
    });
  });
}
// 打开任务管理弹窗
window.openTaskManageModal = function() {
  try {
    renderExistingTasksList();
    resetTaskForm();
    document.getElementById("taskManageModal").style.display = "flex";
  } catch (error) {
    console.error("打开任务管理失败:", error);
    showToast("打开任务管理失败: " + error.message, "error");
  }
}
// 关闭任务管理弹窗
window.closeTaskManageModal = function() {
  document.getElementById("taskManageModal").style.display = "none";
  currentEditingTask = null;
}
// 重置表单为新增状态
window.resetTaskForm = function() {
  currentEditingTask = null;
  document.getElementById("taskModalTitle").textContent = "新增任务";
  document.getElementById("editTaskId").value = "";
  document.getElementById("taskName").value = "";
  document.getElementById("taskTarget").value = "";
  document.getElementById("taskCategory").value = "其他";
  document.getElementById("taskIcon").value = "star";
  document.getElementById("taskColor").value = "blue";
  document.getElementById("deleteTaskBtn").classList.add("hidden");
}
// 渲染现有任务列表
function renderExistingTasksList() {
  const listContainer = document.getElementById("existingTasksList");
  listContainer.innerHTML = "";
  // 按分类分组
  const tasksByCategory = {};
  tasks.forEach(task => {
    if (!tasksByCategory[task.category]) {
      tasksByCategory[task.category] = [];
    }
    tasksByCategory[task.category].push(task);
  });
  Object.keys(tasksByCategory).forEach(category => {
    const categoryTasks = tasksByCategory[category];
    const categoryHeader = document.createElement("div");
    categoryHeader.style = "font-weight: 600; color: #6b7280; margin: 12px 0 8px 0; font-size: 14px;";
    categoryHeader.textContent = category;
    listContainer.appendChild(categoryHeader);
    categoryTasks.forEach(task => {
      const colorClass = colorClassMap[task.color] || "color-blue";
      const item = document.createElement("div");
      item.className = "existing-task-item";
      item.innerHTML = `
        <div style="display: flex; align-items: center; gap: 8px;">
          <span class="${colorClass}" style="width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
            ${(ICONS[task.icon] || ICONS.star).replace(/<svg[^>]+>/, '<svg width="18" height="18"').replace(/<\/svg>/, '</svg>')}
          </span>
          <span style="font-size: 14px; color: #1f2937;">${task.name}</span>
        </div>
        <button style="background: none; border: none; color: #6b7280; cursor: pointer; padding: 4px;" onclick="editTask('${task.id}')">
          ✏️
        </button>
      `;
      listContainer.appendChild(item);
    });
  });
  if (tasks.length === 0) {
    listContainer.innerHTML = `
      <div style="text-align: center; padding: 24px; color: #6b7280; font-size: 14px;">
        还没有任务
      </div>
    `;
  }
}
// 编辑任务
window.editTask = function(taskId) {
  const task = tasks.find(t => t.id === taskId);
  if (!task) return;
  currentEditingTask = taskId;
  document.getElementById("taskModalTitle").textContent = "编辑任务";
  document.getElementById("editTaskId").value = taskId;
  document.getElementById("taskName").value = task.name;
  document.getElementById("taskTarget").value = task.target;
  document.getElementById("taskCategory").value = task.category;
  document.getElementById("taskIcon").value = task.icon;
  document.getElementById("taskColor").value = task.color;
  document.getElementById("deleteTaskBtn").classList.remove("hidden");
  const formEl = document.getElementById("taskForm");
  if (formEl) {
    formEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
// 保存任务（新增/编辑）
window.saveTask = function(event) {
  event.preventDefault();
  try {
    const taskData = {
      name: document.getElementById("taskName").value.trim(),
      target: document.getElementById("taskTarget").value.trim(),
      category: document.getElementById("taskCategory").value,
      icon: document.getElementById("taskIcon").value,
      color: document.getElementById("taskColor").value
    };
    if (!taskData.name || !taskData.target) {
      showToast("请填写完整的任务信息", "error");
      return;
    }
    if (currentEditingTask) {
      // 编辑现有任务
      const taskIndex = tasks.findIndex(t => t.id === currentEditingTask);
      if (taskIndex !== -1) {
        tasks[taskIndex] = { ...tasks[taskIndex], ...taskData };
      }
      showToast("任务更新成功", "success");
    } else {
      // 新增任务
      const newTask = {
        id: `task_${Date.now()}`,
        ...taskData
      };
      tasks.push(newTask);
      showToast("任务新增成功", "success");
      resetTaskForm();
    }
    saveData();
    renderExistingTasksList();
    updateCategoryTabs();
    if (currentView === "tasks") {
      renderTaskCards();
    } else if (currentView === "stats") {
      renderStats();
    }
  } catch (error) {
    console.error("保存任务失败:", error);
    alert("保存任务出错: " + error.message);
  }
}
// 删除当前编辑的任务
window.deleteCurrentTask = function() {
  if (!currentEditingTask) return;
  if (confirm("确定要删除这个任务吗？所有相关的打卡记录也会被删除哦")) {
    // 删除任务
    tasks = tasks.filter(t => t.id !== currentEditingTask);
    // 删除相关的打卡记录
    Object.keys(checkinRecords).forEach(date => {
      if (checkinRecords[date][currentEditingTask]) {
        delete checkinRecords[date][currentEditingTask];
        if (Object.keys(checkinRecords[date]).length === 0) {
          delete checkinRecords[date];
        }
      }
    });
    saveData();
    closeTaskManageModal();
    updateCategoryTabs();
    if (currentView === "tasks") {
      renderTaskCards();
    } else if (currentView === "stats") {
      renderStats();
    } else if (currentView === "calendar") {
      renderCalendar();
    }
    showToast("任务已删除", "success");
  }
}
// ==================== 日历功能 ====================
// 渲染日历
function renderCalendar() {
  const year = currentCalendarMonth.getFullYear();
  const month = currentCalendarMonth.getMonth();
  document.getElementById("currentMonth").textContent = `${year}年${month + 1}月`;
  const firstDay = new Date(year, month, 1);
  const startDate = new Date(firstDay);
  startDate.setDate(startDate.getDate() - firstDay.getDay());
  const calendarGrid = document.getElementById("calendarGrid");
  calendarGrid.innerHTML = "";
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  for (let i = 0; i < 42; i++) {
    const cellDate = new Date(startDate);
    cellDate.setDate(startDate.getDate() + i);
    const dateStr = cellDate.toISOString().split("T")[0];
    const isCurrentMonth = cellDate.getMonth() === month;
    const isToday = cellDate.getTime() === today.getTime();
    const isSelected = selectedDate && cellDate.toDateString() === selectedDate.toDateString();
    // 获取当天打卡数量
    const checkinCount = checkinRecords[dateStr] ? Object.keys(checkinRecords[dateStr]).length : 0;
    const cell = document.createElement("div");
    cell.className = "calendar-cell";
    if (!isCurrentMonth) {
      cell.classList.add("other-month");
    }
    if (isToday) {
      cell.classList.add("today");
    }
    if (isSelected) {
      cell.classList.add("selected");
    }
    let badgeClass = "";
    if (checkinCount >= 5) {
      badgeClass = "badge-green";
    } else if (checkinCount >= 3) {
      badgeClass = "badge-yellow";
    } else if (checkinCount > 0) {
      badgeClass = "badge-blue";
    }
    cell.innerHTML = `
      <div class="day-number">${cellDate.getDate()}</div>
      ${checkinCount > 0 ? `<div class="badge ${badgeClass}">${checkinCount}</div>` : ""}
    `;
    // 点击事件
    cell.addEventListener("click", () => {
      selectedDate = new Date(cellDate);
      renderCalendar();
      renderDayTasks(dateStr);
    });
    calendarGrid.appendChild(cell);
  }
}
// 上一个月
function prevMonth() {
  currentCalendarMonth.setMonth(currentCalendarMonth.getMonth() - 1);
  renderCalendar();
}
// 下一个月
function nextMonth() {
  currentCalendarMonth.setMonth(currentCalendarMonth.getMonth() + 1);
  renderCalendar();
}
// 渲染当日任务
function renderDayTasks(dateStr) {
  const date = new Date(dateStr);
  const formattedDate = `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
  document.getElementById("selectedDateTitle").textContent = `${formattedDate} 打卡记录`;
  const dayTaskList = document.getElementById("dayTaskList");
  const dayRecords = checkinRecords[dateStr];
  if (!dayRecords || Object.keys(dayRecords).length === 0) {
    dayTaskList.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">📅</div>
        <p>今天还没有打卡记录哦</p>
      </div>
    `;
    return;
  }
  dayTaskList.innerHTML = "";
  Object.entries(dayRecords).forEach(([taskId, record]) => {
    const task = tasks.find(t => t.id === taskId);
    if (!task) return;
    const colorClass = colorClassMap[task.color] || "color-blue";
    const taskItem = document.createElement("div");
    taskItem.className = "day-task-item";
    taskItem.innerHTML = `
      <div class="day-task-left">
        <div class="day-task-icon ${colorClass}">
          ${ICONS[task.icon] || ICONS.star}
        </div>
        <div class="day-task-info">
          <h5>${task.name}</h5>
          <p class="day-task-meta">
            👤 ${record.parent || "未知"} · ${formatTime(record.time)} · ⏱️ ${record.duration}分钟
            ${record.note ? `<br>💬 ${record.note}` : ""}
          </p>
        </div>
      </div>
      <div class="day-task-status">✅ 已打卡</div>
    `;
    dayTaskList.appendChild(taskItem);
  });
}
// ==================== 统计功能 ====================
// 渲染统计页面
function renderStats() {
  const today = new Date().toISOString().split("T")[0];
  // 计算今日打卡数和时长
  const todayCount = checkinRecords[today] ? Object.keys(checkinRecords[today]).length : 0;
  const todayDuration = getTodayDuration();
  document.getElementById("todayCount").textContent = todayCount;
  document.getElementById("todayDuration").textContent = todayDuration;
  // 计算本周打卡数和时长
  const weekCount = getWeekCheckinCount();
  const weekDuration = getWeekDuration();
  document.getElementById("weekCount").textContent = weekCount;
  document.getElementById("weekDuration").textContent = weekDuration;
  // 计算本月打卡数
  const monthCount = getMonthCheckinCount();
  document.getElementById("monthCount").textContent = monthCount;
  // 计算连续打卡天数
  const streak = calculateStreak();
  document.getElementById("streakCount").textContent = streak;
  // 渲染图表
  renderChart();
  // 渲染任务统计列表
  renderTaskStatsList();
}
// 渲染柱状图
function renderChart() {
  const chartBars = document.getElementById('chartBars');
  const chartLabels = document.getElementById('chartLabels');
  const chartValues = document.getElementById('chartValues');
  chartBars.innerHTML = '';
  chartLabels.innerHTML = '';
  chartValues.innerHTML = '';
  let labels = [];
  let data = [];
  let chartTitleText = '';
  if (statsMode === 'week') {
    const now = new Date();
    for (let i = 6; i >= 0; i--) {
      const d = new Date(now);
      d.setDate(now.getDate() - i);
      const dayName = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'][d.getDay()];
      labels.push(dayName);
      const dateStr = d.toISOString().split('T')[0];
      if (chartType === 'count') {
        const count = checkinRecords[dateStr] ? Object.keys(checkinRecords[dateStr]).length : 0;
        data.push(count);
      } else {
        let duration = 0;
        if (checkinRecords[dateStr]) {
          Object.values(checkinRecords[dateStr]).forEach(record => {
            duration += record.duration || 0;
          });
        }
        data.push(duration);
      }
    }
    chartTitleText = chartType === 'count' ? '近7天打卡趋势' : '近7天学习时长趋势';
  } else if (statsMode === 'month') {
    for (let i = 3; i >= 0; i--) {
      labels.push(`第${4-i}周`);
      const now = new Date();
      const weekStart = new Date(now);
      weekStart.setDate(now.getDate() - 7 * i - now.getDay());
      if (chartType === 'count') {
        let count = 0;
        for (let d = 0; d < 7; d++) {
          const current = new Date(weekStart);
          current.setDate(weekStart.getDate() + d);
          const dateStr = current.toISOString().split('T')[0];
          count += checkinRecords[dateStr] ? Object.keys(checkinRecords[dateStr]).length : 0;
        }
        data.push(count);
      } else {
        let duration = 0;
        for (let d = 0; d < 7; d++) {
          const current = new Date(weekStart);
          current.setDate(weekStart.getDate() + d);
          const dateStr = current.toISOString().split('T')[0];
          if (checkinRecords[dateStr]) {
            Object.values(checkinRecords[dateStr]).forEach(record => {
              duration += record.duration || 0;
            });
          }
        }
        data.push(duration);
      }
    }
    chartTitleText = chartType === 'count' ? '近4周打卡趋势' : '近4周学习时长趋势';
  } else {
    const startDate = document.getElementById('statsStartDate').value;
    const endDate = document.getElementById('statsEndDate').value;
    if (!startDate || !endDate) {
      document.getElementById('chartTitle').textContent = '请选择日期范围';
      return;
    }
    const start = new Date(startDate);
    const end = new Date(endDate);
    if (start > end) {
      document.getElementById('chartTitle').textContent = '开始日期不能晚于结束日期';
      return;
    }
    const diffDays = Math.floor((end - start) / (1000 * 60 * 60 * 24)) + 1;
    if (diffDays > 31) {
      document.getElementById('chartTitle').textContent = '日期范围不能超过31天';
      return;
    }
    for (let i = 0; i < diffDays; i++) {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      const month = d.getMonth() + 1;
      const day = d.getDate();
      labels.push(`${month}/${day}`);
      const dateStr = d.toISOString().split('T')[0];
      if (chartType === 'count') {
        const count = checkinRecords[dateStr] ? Object.keys(checkinRecords[dateStr]).length : 0;
        data.push(count);
      } else {
        let duration = 0;
        if (checkinRecords[dateStr]) {
          Object.values(checkinRecords[dateStr]).forEach(record => {
            duration += record.duration || 0;
          });
        }
        data.push(duration);
      }
    }
    chartTitleText = chartType === 'count' ? '自定义打卡趋势' : '自定义学习时长趋势';
  }
  document.getElementById('chartTitle').textContent = chartTitleText;
  const maxValue = Math.max(...data, 1);
  const barWidth = 600 / data.length;
  const padding = 20;
  const gradientId = chartType === 'count' ? 'gradient' : 'gradientDuration';
  data.forEach((value, index) => {
    const barHeight = (value / maxValue) * (150 - padding);
    const bar = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    bar.setAttribute('class', 'chart-bar');
    bar.setAttribute('x', index * barWidth + 15);
    bar.setAttribute('y', 150 - barHeight);
    bar.setAttribute('width', barWidth - 30);
    bar.setAttribute('height', barHeight);
    bar.setAttribute('fill', `url(#${gradientId})`);
    chartBars.appendChild(bar);
    const valueText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    valueText.setAttribute('class', 'chart-value');
    valueText.setAttribute('x', index * barWidth + barWidth / 2);
    valueText.setAttribute('y', 150 - barHeight - 5);
    valueText.textContent = value;
    if (chartType === 'duration') {
      valueText.setAttribute('fill', '#f97316');
    }
    chartValues.appendChild(valueText);
    const labelText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    labelText.setAttribute('class', 'chart-label');
    labelText.setAttribute('x', index * barWidth + barWidth / 2);
    labelText.setAttribute('y', 180);
    labelText.textContent = labels[index];
    chartLabels.appendChild(labelText);
  });
}
// 初始化日期范围默认值
function initDateRangeDefaults() {
  const today = new Date();
  const weekAgo = new Date(today);
  weekAgo.setDate(today.getDate() - 6);
  const startEl = document.getElementById('statsStartDate');
  const endEl = document.getElementById('statsEndDate');
  if (startEl && !startEl.value) {
    startEl.value = weekAgo.toISOString().split('T')[0];
  }
  if (endEl && !endEl.value) {
    endEl.value = today.toISOString().split('T')[0];
  }
}
// 按日期范围查询统计
window.queryStatsByDateRange = function() {
  const startDate = document.getElementById('statsStartDate').value;
  const endDate = document.getElementById('statsEndDate').value;
  if (!startDate || !endDate) {
    showToast("请选择开始和结束日期", "error");
    return;
  }
  if (new Date(startDate) > new Date(endDate)) {
    showToast("开始日期不能晚于结束日期", "error");
    return;
  }
  renderChart();
}
// 获取本周打卡总次数
function getWeekCheckinCount() {
  const now = new Date();
  const startOfWeek = new Date(now);
  startOfWeek.setDate(now.getDate() - now.getDay()); // 周日开始
  startOfWeek.setHours(0, 0, 0, 0);
  let count = 0;
  Object.keys(checkinRecords).forEach(dateStr => {
    const date = new Date(dateStr);
    if (date >= startOfWeek && date <= now) {
      count += Object.keys(checkinRecords[dateStr]).length;
    }
  });
  return count;
}
// 获取本月打卡总次数
function getMonthCheckinCount() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  let count = 0;
  Object.keys(checkinRecords).forEach(dateStr => {
    const date = new Date(dateStr);
    if (date.getFullYear() === year && date.getMonth() === month) {
      count += Object.keys(checkinRecords[dateStr]).length;
    }
  });
  return count;
}
// 获取今日学习总时长
function getTodayDuration() {
  const today = new Date().toISOString().split('T')[0];
  let duration = 0;
  if (checkinRecords[today]) {
    Object.values(checkinRecords[today]).forEach(record => {
      duration += record.duration || 0;
    });
  }
  return duration;
}
// 获取本周学习总时长
function getWeekDuration() {
  const now = new Date();
  const startOfWeek = new Date(now);
  startOfWeek.setDate(now.getDate() - now.getDay()); // 周日开始
  startOfWeek.setHours(0, 0, 0, 0);
  let duration = 0;
  Object.keys(checkinRecords).forEach(dateStr => {
    const date = new Date(dateStr);
    if (date >= startOfWeek && date <= now) {
      Object.values(checkinRecords[dateStr]).forEach(record => {
        duration += record.duration || 0;
      });
    }
  });
  return duration;
}
// 计算连续打卡天数
function calculateStreak() {
  if (Object.keys(checkinRecords).length === 0) return 0;
  let streak = 0;
  const today = new Date();
  for (let i = 0; i < 1000; i++) {
    const checkDate = new Date(today);
    checkDate.setDate(today.getDate() - i);
    const dateStr = checkDate.toISOString().split('T')[0];
    if (checkinRecords[dateStr] && Object.keys(checkinRecords[dateStr]).length > 0) {
      streak++;
    } else {
      break;
    }
  }
  return streak;
}
// 渲染任务统计列表
function renderTaskStatsList() {
  const listContainer = document.getElementById("taskStatsList");
  listContainer.innerHTML = "";
  // 统计每个任务的总打卡次数和总时长
  const taskStats = {};
  Object.values(checkinRecords).forEach(dayRecords => {
    Object.entries(dayRecords).forEach(([taskId, record]) => {
      if (!taskStats[taskId]) {
        taskStats[taskId] = {
          count: 0,
          duration: 0
        };
      }
      taskStats[taskId].count++;
      taskStats[taskId].duration += record.duration || 0;
    });
  });
  // 转换为数组并排序
  const sortedTasks = tasks
    .map(task => ({
      ...task,
      count: taskStats[task.id]?.count || 0,
      duration: taskStats[task.id]?.duration || 0
    }))
    .sort((a, b) => b.count - a.count);
  sortedTasks.forEach(task => {
    const colorClass = colorClassMap[task.color] || "color-blue";
    const item = document.createElement("div");
    item.className = "task-stat-item";
    item.innerHTML = `
      <div class="task-stat-left">
        <div class="task-stat-icon ${colorClass}">
          ${ICONS[task.icon] || ICONS.star}
        </div>
        <div class="task-stat-info">
          <h5>${task.name}</h5>
          <p class="task-stat-category">${task.category}</p>
        </div>
      </div>
      <div style="text-align: right;">
        <div class="task-stat-count ${colorClass}">${task.count} 次</div>
        <div style="font-size: 12px; color: #6b7280; margin-top: 2px;">⏱️ ${task.duration} 分钟</div>
      </div>
    `;
    listContainer.appendChild(item);
  });
  if (sortedTasks.length === 0) {
    listContainer.innerHTML = `
      <div class="empty-state">
        <p>还没有打卡记录哦</p>
      </div>
    `;
  }
}
// ==================== 分享功能 ====================
// 生成分享报告
function generateShareReport() {
  try {
    const today = new Date();
    const todayStr = `${today.getFullYear()}年${today.getMonth() + 1}月${today.getDate()}日`;
    const todayCount = checkinRecords[today.toISOString().split('T')[0]] ? Object.keys(checkinRecords[today.toISOString().split('T')[0]]).length : 0;
    const todayDuration = getTodayDuration();
    const weekCount = getWeekCheckinCount();
    const weekDuration = getWeekDuration();
    const monthCount = getMonthCheckinCount();
    const streak = calculateStreak();
    // 统计分类打卡次数
    const categoryStats = {};
    Object.values(checkinRecords).forEach(dayRecords => {
      Object.entries(dayRecords).forEach(([taskId]) => {
        const task = tasks.find(t => t.id === taskId);
        if (task) {
          if (!categoryStats[task.category]) {
            categoryStats[task.category] = 0;
          }
          categoryStats[task.category]++;
        }
      });
    });
    // 生成分类列表HTML
    const sortedCategories = Object.entries(categoryStats).sort((a, b) => b[1] - a[1]).slice(0, 5);
    let categorySvg = '';
    if (sortedCategories.length === 0) {
      categorySvg = `<text x="300" y="520" font-size="16" fill="#6b7280" text-anchor="middle">还没有打卡记录哦</text>`;
    } else {
      sortedCategories.forEach(([category, count], index) => {
        const yPos = 460 + index * 44;
        categorySvg += `
          <line x1="60" y1="${yPos + 30}" x2="540" y2="${yPos + 30}" stroke="#f3f4f6" stroke-width="1"/>
          <text x="70" y="${yPos + 18}" font-size="16" font-weight="500" fill="#1f2937">${category}</text>
          <text x="530" y="${yPos + 18}" font-size="16" font-weight="600" fill="#4F46E5" text-anchor="end">${count} 次</text>`;
      });
    }
    // 生成SVG卡片
    const svg = `<?xml version="1.0" encoding="UTF-8"?>
    <svg width="600" height="800" viewBox="0 0 600 800" xmlns="http://www.w3.org/1999/svg">
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#f0f9ff;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#e0e7ff;stop-opacity:1" />
        </linearGradient>
        <linearGradient id="headerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#ec4899;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#f97316;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="600" height="800" fill="url(#bgGradient)" rx="20" ry="20"/>
      <circle cx="60" cy="50" r="12" fill="#fbbf24" opacity="0.5"/>
      <circle cx="530" cy="70" r="10" fill="#ec4899" opacity="0.5"/>
      <circle cx="80" cy="730" r="14" fill="#8b5cf6" opacity="0.5"/>
      <circle cx="510" cy="720" r="8" fill="#06b6d4" opacity="0.5"/>
      <rect x="0" y="0" width="600" height="140" fill="url(#headerGradient)" rx="20" ry="20"/>
      <text x="300" y="55" font-size="34" font-weight="bold" fill="white" text-anchor="middle">安可的打卡报告</text>
      <text x="300" y="90" font-size="20" fill="white" text-anchor="middle">${todayStr}</text>
      <rect x="30" y="170" width="540" height="200" fill="white" rx="16" ry="16"/>
      <text x="60" y="205" font-size="22" font-weight="bold" fill="#1f2937">学习统计</text>
      <g transform="translate(60, 220)">
        <rect x="0" y="0" width="70" height="120" fill="#eff6ff" rx="12" ry="12"/>
        <text x="35" y="40" font-size="20" text-anchor="middle" fill="#1d4ed8">打卡</text>
        <text x="35" y="70" font-size="22" font-weight="bold" fill="#1d4ed8" text-anchor="middle">${todayCount}</text>
        <text x="35" y="95" font-size="10" fill="#6b7280" text-anchor="middle">今日打卡数</text>
        <rect x="85" y="0" width="70" height="120" fill="#eff6ff" rx="12" ry="12"/>
        <text x="120" y="40" font-size="20" text-anchor="middle" fill="#1d4ed8">时长</text>
        <text x="120" y="70" font-size="22" font-weight="bold" fill="#1d4ed8" text-anchor="middle">${todayDuration}</text>
        <text x="120" y="95" font-size="10" fill="#6b7280" text-anchor="middle">今日时长(分钟)</text>
        <rect x="170" y="0" width="70" height="120" fill="#f0fdf4" rx="12" ry="12"/>
        <text x="205" y="40" font-size="20" text-anchor="middle" fill="#166534">打卡</text>
        <text x="205" y="70" font-size="22" font-weight="bold" fill="#166534" text-anchor="middle">${weekCount}</text>
        <text x="205" y="95" font-size="10" fill="#6b7280" text-anchor="middle">本周打卡数</text>
        <rect x="255" y="0" width="70" height="120" fill="#f0fdf4" rx="12" ry="12"/>
        <text x="290" y="40" font-size="20" text-anchor="middle" fill="#166534">时长</text>
        <text x="290" y="70" font-size="22" font-weight="bold" fill="#166534" text-anchor="middle">${weekDuration}</text>
        <text x="290" y="95" font-size="10" fill="#6b7280" text-anchor="middle">本周时长(分钟)</text>
        <rect x="340" y="0" width="70" height="120" fill="#faf5ff" rx="12" ry="12"/>
        <text x="375" y="40" font-size="20" text-anchor="middle" fill="#7e22ce">月度</text>
        <text x="375" y="70" font-size="22" font-weight="bold" fill="#7e22ce" text-anchor="middle">${monthCount}</text>
        <text x="375" y="95" font-size="10" fill="#6b7280" text-anchor="middle">本月打卡数</text>
        <rect x="425" y="0" width="70" height="120" fill="#fff7ed" rx="12" ry="12"/>
        <text x="460" y="40" font-size="20" text-anchor="middle" fill="#9a3412">连续</text>
        <text x="460" y="70" font-size="22" font-weight="bold" fill="#9a3412" text-anchor="middle">${streak}</text>
        <text x="460" y="95" font-size="10" fill="#6b7280" text-anchor="middle">连续打卡天数</text>
      </g>
      <rect x="30" y="390" width="540" height="300" fill="white" rx="16" ry="16"/>
      <text x="60" y="425" font-size="22" font-weight="bold" fill="#1f2937">各分类打卡次数</text>
      ${categorySvg}
      <rect x="30" y="710" width="540" height="60" fill="#fef3c7" rx="16" ry="16"/>
      <text x="300" y="748" font-size="20" font-weight="bold" fill="#92400e" text-anchor="middle">安可太棒了！继续加油哦！</text>
    </svg>`;
    const svgDataUrl = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = function() {
      const canvas = document.createElement('canvas');
      canvas.width = 600;
      canvas.height = 800;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      try {
        currentShareImageUrl = canvas.toDataURL('image/png');
      } catch (e) {
        currentShareImageUrl = svgDataUrl;
      }
      document.getElementById('shareImage').src = currentShareImageUrl;
      document.getElementById('shareModal').style.display = 'flex';
      showToast('分享报告生成成功！', 'success');
    };
    img.onerror = function() {
      currentShareImageUrl = svgDataUrl;
      document.getElementById('shareImage').src = currentShareImageUrl;
      document.getElementById('shareModal').style.display = 'flex';
      showToast('分享报告生成成功！', 'success');
    };
    img.src = svgDataUrl;
  } catch (error) {
    console.error('生成报告失败:', error);
    showToast('生成报告失败: ' + error.message, 'error');
  }
}
// 关闭分享弹窗
window.closeShareModal = function() {
  document.getElementById('shareModal').style.display = 'none';
  document.getElementById('shareImage').src = '';
  currentShareImageUrl = null;
}
// 保存分享图片
window.saveShareImage = function() {
  if (!currentShareImageUrl) return;
  const isPng = currentShareImageUrl.startsWith('data:image/png');
  const link = document.createElement('a');
  link.download = `安可的打卡报告_${new Date().toISOString().split('T')[0]}.${isPng ? 'png' : 'svg'}`;
  link.href = currentShareImageUrl;
  link.click();
  showToast('图片已保存到相册', 'success');
  closeShareModal();
}
// ==================== 工具函数 ====================
// 同步家长选择
function syncParentSelection() {
  const savedParent = localStorage.getItem("currentParent");
  if (savedParent) {
    currentParent = savedParent;
    const parentNameEl = document.getElementById("parentName");
    const parentInfoEl = document.getElementById("parentInfo");
    if (parentNameEl) parentNameEl.textContent = savedParent;
    if (parentInfoEl) parentInfoEl.style.display = "flex";
  }
}
// 格式化时间
function formatTime(timeStr) {
  const date = new Date(timeStr);
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}
// 格式化日期
function formatDate(dateString) {
  const date = new Date(dateString);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${month}月${day}日`;
}
// 显示提示消息
function showToast(message, type = "info") {
  // 先移除已有的toast
  document.querySelectorAll(".toast").forEach(t => t.remove());
  // 创建toast元素
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <div style="display: flex; align-items: center; gap: 8px;">
      <span>${message}</span>
    </div>
  `;
  document.body.appendChild(toast);
  // 自动隐藏
  setTimeout(() => {
    if (document.body.contains(toast)) {
      document.body.removeChild(toast);
    }
  }, 2500);
}
// 数据持久化
function saveData() {
  const data = {
    currentParent,
    tasks,
    checkinRecords
  };
  localStorage.setItem("learningAppData", JSON.stringify(data));
}
function loadData() {
  try {
    const savedData = localStorage.getItem("learningAppData");
    if (savedData) {
      const data = JSON.parse(savedData);
      currentParent = data.currentParent || null;
      tasks = data.tasks || [];
      checkinRecords = data.checkinRecords || {};
    }
  } catch (e) {
    console.error("加载数据失败:", e);
    tasks = [];
    checkinRecords = {};
  }
  if (!currentParent) {
    const savedParent = localStorage.getItem("currentParent");
    if (savedParent) {
      currentParent = savedParent;
    }
  }
  if (currentParent) {
    const parentNameEl = document.getElementById("parentName");
    const parentInfoEl = document.getElementById("parentInfo");
    if (parentNameEl) parentNameEl.textContent = currentParent;
    if (parentInfoEl) parentInfoEl.style.display = "flex";
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}
