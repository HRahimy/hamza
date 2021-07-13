FROM node:14.17-alpine

WORKDIR /app

COPY ./dist/apps .

WORKDIR /app/api

ENV PORT=3333
EXPOSE ${PORT}

RUN yarn install --prod

### Add missing packages needed for node to run the application.
###
### DO NOT add packages that are already listed as a dependency in the package.json file generated for the API.
### Doing so will cause version mismatches between the built API and what we have installed on the node environment.
RUN yarn add tslib pg
CMD ["node", "--trace-warnings", "--unhandled-rejections=strict", "./main.js"]
