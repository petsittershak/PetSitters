FROM node:slim

WORKDIR /app

COPY PetSitters_front/package.json /app/
COPY PetSitters_front/. /app/.

RUN yarn install

CMD ["yarn", "dev"]