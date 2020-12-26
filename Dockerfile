### STAGE 1: Build ###
#getting node Docker image from registry and naming the compilation stage as build
FROM node:15.4.0-alpine3.10 AS build
# setting default work directory
WORKDIR /usr/src/app
# copying package.json and package-lock.json files from local root directory
COPY package.json package-lock.json ./
# installing necessary libraries
RUN npm prune
# installing necessary libraries
RUN npm install
# copying all remaining files with a source code
COPY . .
# compiling our app
RUN npm run build

### STAGE 2: Run ###
FROM nginx:1.19-alpine
COPY nginx.conf /etc/nginx/nginx.conf
# --from=build tell Docker that it needs to copy compiled files from build stage
COPY --from=build /usr/src/app/dist/pokedex /usr/share/nginx/html

