FROM node:10.16.0-alpine as build-env

WORKDIR /reactjs
#ENV NPM_CONFIG_LOGLEVEL warn

COPY package.json .
COPY config-overrides.js .
RUN yarn install
COPY public public
COPY src src
RUN ls
RUN yarn build
RUN ls build
#COPY node_modules node_modules

FROM nginx:1.13.0-alpine
WORKDIR /etc/nginx/conf.d/
COPY env/nginx-default.conf default.conf
RUN ls
WORKDIR /usr/share/nginx/html
COPY --from=build-env /reactjs/build/ .

EXPOSE 81
