FROM node:14

WORKDIR /app

COPY node-app/package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "node-app/app.js"]