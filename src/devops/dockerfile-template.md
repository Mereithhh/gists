---
title: Dockerfile 模板
---
## Nest.js
```dockerfile
FROM node:18 as BUILD_IMAGE
ENV NODE_OPTIONS=--max_old_space_size=4096
WORKDIR /app
RUN yarn config set registry https://registry.npm.taobao.org
COPY . .
RUN yarn
RUN yarn build

FROM node:18
WORKDIR /usr/src/app
RUN /bin/cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo 'Asia/Shanghai' >/etc/timezone && \
  yarn config set registry https://registry.npm.taobao.org
COPY --from=BUILD_IMAGE /app/node_modules ./node_modules
COPY --from=BUILD_IMAGE /app/dist ./
EXPOSE 3000
CMD [ "node", "main.js" ]
```
## Ant Design Pro
```dockerfile
FROM circleci/node:latest-browsers as BUILD_IMAGE
ENV NODE_OPTIONS=--max_old_space_size=4096
WORKDIR /usr/src/app
# RUN yarn config set registry https://registry.npm.taobao.org
COPY package.json ./
RUN yarn
COPY ./ ./
ENV NODE_OPTIONS='--max_old_space_size=4096 --openssl-legacy-provider'
ENV EEE=production
RUN yarn build

FROM nginx
WORKDIR /usr/share/nginx/html/
RUN mkdir admin
COPY --from=BUILD_IMAGE /usr/src/app/dist/ ./admin/
COPY default.conf /etc/nginx/conf.d/
EXPOSE 3002
```

## Next.js
```dockerfile
# Install dependencies only when needed
FROM node:16-alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN yarn

# Rebuild the source code only when needed
FROM node:16-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
# ENV NEXT_TELEMETRY_DISABLED 1

ENV isBuild=t
ENV VAN_BLOG_REVALIDATE_TIME=10
ENV VAN_BLOG_ALLOW_DOMAINS "pic.mereith.com"
ENV VAN_BLOG_SERVER_URL "https://www.mereith.com"
RUN yarn build

# If using npm comment out above and use below instead
# RUN npm run build

# Production image, copy all the files and run next
FROM node:16-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# You only need to copy next.config.js if you are NOT using the default configuration
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# RUN yarn add sharp

USER nextjs

EXPOSE 3001

ENV PORT 3001
ENV VAN_BLOG_SERVER_URL server:3000
ENV VAN_BLOG_REVALIDATE_TIME 10
ENV VAN_BLOG_ALLOW_DOMAINS "pic.mereith.com"

CMD ["node", "server.js","-p","3001"]
```