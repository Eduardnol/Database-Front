FROM node:16.0.0

WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install -g @vue/cli
RUN npm install
COPY . .
EXPOSE 8082
CMD ["npm", "run", "serve"]
