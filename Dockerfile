FROM node:lts-alpine

WORKDIR /app

COPY ./dist/apps .

WORKDIR /app/api

ENV PORT=3333
EXPOSE ${PORT}

RUN yarn install --prod
RUN yarn add reflect-metadata tslib rxjs hbs @nestjs/platform-express pg
CMD node --trace-warnings --unhandled-rejections=strict ./main.js
