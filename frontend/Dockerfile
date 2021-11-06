# BUILD
# docker build -t alejandroolmed59/frontendbuddy:1.0 .
# BUILD K8S
# docker build -t alejandroolmed59/frontendbuddy:customdomain -f Dockerfile .
# RUN
# docker run -p 80:80 -d alejandroolmed59/frontend:1.0

FROM node:14.18.1 as compilacion


COPY . /opt/app

WORKDIR /opt/app

RUN npm install

ENV REACT_APP_BACKEND_BASE_URL=http://api.med-aid.software:3800

RUN npm run build

FROM nginx:1.21.3

COPY --from=compilacion /opt/app/build /usr/share/nginx/html

#TODO: CONFIGURAR ERROR DE 404 CUANDO REFRESCO ruta que no es /

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx","-g","daemon off;"]