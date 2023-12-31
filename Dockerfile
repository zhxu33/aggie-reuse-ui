FROM node

WORKDIR /app

COPY package*.json ./

RUN npm install --force

COPY . .

EXPOSE 3000

CMD [ "npm", "start"]

#docker build -t aggie-reuse-ui .
#docker run -t -i -p 3000:3000 aggie-reuse-ui
