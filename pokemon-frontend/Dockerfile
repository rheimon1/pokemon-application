FROM node:20-alpine

WORKDIR /var/www/html/pokemon-frontend

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "start" ]
