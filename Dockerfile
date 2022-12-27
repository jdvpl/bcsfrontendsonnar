FROM alpine

# RUN set -ex; \
#     apk add nginx nginx-mod-http-headers-more; \
#     ln -sf /dev/stdout /var/log/nginx/access.log; \
#     ln -sf /dev/stderr /var/log/nginx/error.log

COPY ./out /var/www/ 
COPY ./nginx.default.conf /etc/nginx/http.d/default.conf

RUN ls -lh /var/www

#EXPOSE 80

#STOPSIGNAL SIGQUIT

CMD ["nginx", "-g", "daemon off;"]