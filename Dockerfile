FROM node:14-alpine
WORKDIR /app
RUN npm install -g @vue/cli
COPY package*.json ./
ENV NODE_ENV=development
RUN npm install
COPY . .
EXPOSE 8080
CMD ["npm", "run", "serve"]

