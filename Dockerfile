FROM node:18.0.0-alpine3.14

WORKDIR /APP

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]