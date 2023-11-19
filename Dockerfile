
FROM node:10-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R  /home/node/app

COPY  . ./home/node/app
WORKDIR /home/node/app
COPY package*.json ./


RUN npm install


EXPOSE 8080

CMD [ "node", "app.js" ]
