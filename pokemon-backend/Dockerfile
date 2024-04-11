FROM node:20-alpine

WORKDIR /var/www/html/pokemon-backend

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

CMD [ "npm", "start" ]
