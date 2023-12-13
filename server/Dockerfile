FROM node:alpine

WORKDIR /server

COPY package*.json ./

RUN npm install

# Copy the entire application code to the container
COPY . .

EXPOSE 5000

CMD ["npm", "start"]