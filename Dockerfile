FROM node:20-alpine

RUN apk add --no-cache python3 make g++ sqlite-dev

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --omit=dev

COPY . .

RUN mkdir -p /app/data

EXPOSE 3000

ENV DB_PATH=/app/data/projects.db
ENV NODE_ENV=production

CMD ["node", "server.js"]
