#Stage 1
FROM node:12-alpine AS builder
WORKDIR /usr/app
RUN apk update && apk add yarn python g++ make && rm -rf /var/cache/apk/*
COPY package*.json ./
RUN npm install
COPY . .
ARG SERVER_URL=
ARG CLIENT_URL=
RUN npm run build

#Stage 2
FROM nginx:alpine 
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /usr/app/dist .
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]

EXPOSE 6825