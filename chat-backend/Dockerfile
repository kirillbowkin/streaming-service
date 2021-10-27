FROM alpine:3.13

RUN apk add openjdk11
COPY build/libs/chat.jar /app.jar
EXPOSE 8080

ENTRYPOINT [ "java", "-jar", "/app.jar" ]