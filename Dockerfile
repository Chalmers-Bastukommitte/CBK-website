FROM node:20 as BUILD

WORKDIR /app

COPY package*.json /app

RUN npm install

COPY . /app

RUN npm run build

FROM node:20

WORKDIR /app

COPY --from=BUILD /app/package*.json /app

RUN npm install --only=production

COPY --from=BUILD /app/.next /app/.next

COPY --from=BUILD /app/public /app/public

EXPOSE 3000

CMD ["npm", "start"]