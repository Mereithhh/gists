FROM nginx
WORKDIR /usr/share/nginx/html/
COPY ./src/.vuepress/dist/ ./
