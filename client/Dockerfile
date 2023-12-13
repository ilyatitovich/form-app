FROM node:alpine

WORKDIR /client

COPY package*.json ./

RUN npm install

# Copy the entire application code to the container
COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]