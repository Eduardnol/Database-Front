FROM node:16.0.0

WORKDIR /app
COPY package.json /app
COPY package-lock.json /app
RUN npm install
RUN npm install -g @vue/cli
EXPOSE 8082
CMD ["npm", "run", "serve"]
