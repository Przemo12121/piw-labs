FROM node:19-alpine3.16

WORKDIR /app
COPY ./package.json .
RUN npm install --legacy-peer-deps

COPY ./ .

ENTRYPOINT ["npm", "start"]