FROM node:11
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn install
ENV REACT_APP_API_URL="http://tc-mentor-fetch.herokuapp.com/api"
COPY . .
EXPOSE 3000
CMD ["yarn", "start"]