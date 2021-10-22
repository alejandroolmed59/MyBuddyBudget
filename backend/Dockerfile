# BUILD
# docker build -t backendbuddy:1.0 .
# RUN
# docker run --name backend-buddy -p 3800:3800 --rm -d backendbuddy:1.0
FROM node:14.18.1

WORKDIR /opt/app

ENV POSTGRE_USER=postgres \
    POSTGRE_PASS=postgres \
    POSTGRE_HOST=172.21.144.1 \
    POSTGRE_DATABASE=baseSql \
    POSTGRE_PORT=5432

COPY package.json /opt/app

RUN npm install

COPY . /opt/app/

EXPOSE 3800

CMD ["npm", "start"]