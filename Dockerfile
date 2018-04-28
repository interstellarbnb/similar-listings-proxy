FROM node:9.11.1

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm i

EXPOSE 3000

CMD [ "npm", "start" ]
