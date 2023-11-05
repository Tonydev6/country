FROM node:18-alpine

WORKDIR /country

COPY package.json .

RUN npm install --force 

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
