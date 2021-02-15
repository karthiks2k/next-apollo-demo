FROM node:latest
WORKDIR /app/api
COPY package.json /api/package.json
RUN npm install --silent
COPY . /api
EXPOSE 3000
CMD ["node", "start"]