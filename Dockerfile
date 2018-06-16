FROM node:alpine

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

ENV HOST=0.0.0.0
ENV PORT=8080

EXPOSE 8080

ENTRYPOINT npm start
