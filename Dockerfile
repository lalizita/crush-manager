FROM node:latest

LABEL version="1.0"

WORKDIR /var/www/app

EXPOSE 3000

CMD [ "./build-web.sh" ]
