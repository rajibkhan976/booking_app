# pull the base image
FROM node:12-alpine

# set the working direction
WORKDIR /booking_app

# install app dependencies
COPY package.json ./

COPY package-lock.json ./

RUN npm cache clean --force
RUN npm install

# add app
COPY . ./

# start app
CMD ["npm", "start"]
