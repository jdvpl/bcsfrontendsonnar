FROM alpine:3.16

# RUN set -ex; \
#     apk add nginx nginx-mod-http-headers-more; \
#     ln -sf /dev/stdout /var/log/nginx/access.log; \
#     ln -sf /dev/stderr /var/log/nginx/error.log

ADD ./out /var/www/ \ 
    ./nginx.default.conf /etc/nginx/http.d/default.conf

EXPOSE 80

#STOPSIGNAL SIGQUIT

CMD ["nginx", "-g", "daemon off;"]