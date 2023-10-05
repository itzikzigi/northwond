FROM node:18

WORKDIR /src/server

COPY package*.json ./

RUN npm i

COPY ./src .

ENV PORT=8181

EXPOSE 8181

CMD [ "npm", "start" ]