FROM node:latest AS build

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 5173

CMD [ "npm" ,"run","dev" ]



# FROM node:alpine AS deploy

# WORKDIR /app

# RUN npm install -g serve

# COPY --from=build /app/dist .

# EXPOSE 5173

# CMD ["serve", "-s", ".", "-l", "5173"]

