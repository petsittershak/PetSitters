FROM node:slim

WORKDIR /app

COPY package.json /app/
COPY . /app/.

RUN yarn install

CMD ["yarn", "dev"]