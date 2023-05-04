FROM node:18.7.0-alpine

WORKDIR /app

COPY . /app/

RUN npm build

CMD ["node", "dist/main.js"]