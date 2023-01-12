FROM node:16

WORKDIR /app
COPY package.json .
COPY pnpm-lock.yaml .
RUN npm i -g pnpm
RUN pnpm install

COPY . .

RUN chmod +x scripts/build.sh

RUN scripts/build.sh

EXPOSE 3000

CMD [ "scripts/start.sh" ]