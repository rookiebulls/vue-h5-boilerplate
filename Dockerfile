FROM node:lts-alpine AS build-stage

WORKDIR /var/www

ARG env=test
ENV SASS_BINARY_SITE https://npm.taobao.org/mirrors/node-sass/

COPY ./ ./

RUN npm install -g cnpm --registry=https://registry.npm.taobao.org

RUN cnpm install

RUN npm rebuild node-sass

RUN npm run build:$env


FROM nginx:stable-alpine

WORKDIR /usr/share/nginx

ENTRYPOINT ["./docker-entrypoint.sh"]

COPY ./docker-entrypoint.sh ./
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./default.conf /etc/nginx/conf.d/default.conf
COPY ./.sentryclirc ~/.sentryclirc
COPY --from=build-stage /var/www/dist ./html
