# BUILD
# docker build -t backendbuddy:1.0 .
# RUN
# docker run --name backend-buddy -p 3800:3800 --rm -d backendbuddy:1.0
FROM node:14.18.1

WORKDIR /opt/app

ENV REACT_APP_BACKEND_BASE_URL=http://backend:3800

COPY package.json /opt/app

RUN npm install

COPY . /opt/app/

EXPOSE 3000

CMD ["npm", "start"]