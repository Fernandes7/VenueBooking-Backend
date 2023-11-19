
FROM node:10-alpine

COPY  . ./home/node/app

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

EXPOSE 8000

CMD [ "node", "app.js" ]
