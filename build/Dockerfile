FROM nginx:latest

RUN apt-get update

COPY ./index.html /usr/share/nginx/html/

ENV DOCKER_IS_AWESOME=true

EXPOSE 80

# USER nginx

CMD ["nginx", "-g", "daemon off;"]

