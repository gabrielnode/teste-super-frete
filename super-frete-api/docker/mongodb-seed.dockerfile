FROM node:18.13.0 AS dockerMongoDBSeeds
WORKDIR /seeds
COPY . .
RUN rm -rf node_modules
RUN npm install

FROM node:18.13.0-alpine
WORKDIR /seeds
COPY --from=dockerMongoDBSeeds /seeds ./
CMD ["npm", "run", "seed"]