FROM node:alpine

WORKDIR /usr/src/app/webapp

COPY package*.json /usr/src/app/webapp//

RUN npm install --only=production

COPY . /usr/src/app/backend/

EXPOSE 3000

CMD ["npm", "start"]