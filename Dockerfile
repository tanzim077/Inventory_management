FROM node:20-alpine

WORKDIR /app

COPY . .

RUN yarn install

EXPOSE 5000

RUN ["chmod", "+x", "./entrypoint.sh"]
ENTRYPOINT ["sh", "./entrypoint.sh"]