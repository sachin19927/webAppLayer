# Build and compile the frontend
 FROM node:alpine as build-stage
 WORKDIR /app
 COPY package*.json .
 RUN npm install
 COPY ./ /app/
 RUN npm run -- --output-path=./dist/out --configuration local


# Get the compiled app ready to be served with Nginx
#FROM nginx:latest
#COPY /dist/web-app-layer /usr/share/nginx/html
#COPY --from=build-stage /app/dist/out/ /usr/share/nginx/html
# COPY ./nginx-configuration.conf /etc/nginx/conf.d/default.conf
