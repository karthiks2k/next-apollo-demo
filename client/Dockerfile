FROM node:latest
WORKDIR /app/contact-app
ENV PATH /app/contact-app/node_modules/.bin:$PATH
COPY package.json /contact-app/package.json
RUN npm install --silent
COPY . /contact-app
RUN npm run build
EXPOSE 4000
CMD ["npm", "start"]
