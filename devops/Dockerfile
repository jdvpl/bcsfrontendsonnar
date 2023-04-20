FROM node:lts-alpine

RUN set -ex; \
    apk add nginx nginx-mod-http-headers-more; \
    ln -sf /dev/stdout /var/log/nginx/access.log; \
    ln -sf /dev/stderr /var/log/nginx/error.log

ADD ./out /var/www/
ADD ./nginx.default.conf /etc/nginx/http.d/default.conf

EXPOSE 80

STOPSIGNAL SIGQUIT

CMD ["nginx", "-g", "daemon off;"]