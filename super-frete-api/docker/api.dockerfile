FROM node:18.13.0-alpine AS dockerAPI
RUN apk update && apk add --upgrade apk-tools && apk upgrade --available
RUN apk add bash
RUN npm install -g @nestjs/cli

WORKDIR /api
COPY --chown=node:node . .
RUN rm -rf dist
RUN mkdir dist
RUN chown -R node ./dist

COPY package.json package-lock.json ./
RUN npm ci --no-audit --unsafe-perm
EXPOSE 3000 9229
USER node
CMD ["npm", "run", "start:dev"]
