FROM node:22

WORKDIR /usr/src/app

COPY . .

RUN npm install

WORKDIR /usr/src/app/src

EXPOSE 3000

ENV DOCKERIZE_VERSION=v0.9.1

RUN apt-get update \
    && apt-get install -y wget \
    && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apt-get autoremove -yqq --purge wget && rm -rf /var/lib/apt/lists/*

#CMD ["node","index.js"]
