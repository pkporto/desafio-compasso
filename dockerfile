FROM node:14.18.1-alpine3.12

RUN apk add --no-cache bash

USER node

WORKDIR /home/node/app