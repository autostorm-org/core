FROM node:10-stretch

# Create app directory
WORKDIR /usr/src/app

# Copy 
COPY package.json .

COPY yarn.lock .

RUN yarn install --production --pure-lockfile --non-interactive --cache-folder ./ycache; rm -rf ./ycache

COPY . .

RUN yarn build

CMD [ "yarn", "start" ]