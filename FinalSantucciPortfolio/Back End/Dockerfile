FROM amazoncorretto:11-alpine-jdk
MAINTAINER RS
COPY target/rs-0.0.1-SNAPSHOT.jar rs-app.jar
ENTRYPOINT ["java","-jar","/rs-app.jar"]