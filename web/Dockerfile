FROM node:12.0.0 as BASE

# 为了规避pwc的网关
ENV SELF_SIGNED_CERT_IN_CHAIN=true
ENV NODE_TLS_REJECT_UNAUTHORIZED=0
RUN npm config set strict-ssl false
RUN yarn config set strict-ssl false

# 提供缓存层给nodule_module
COPY package.json yarn.lock /tmp/
RUN cd /tmp && yarn install
RUN mkdir -p /app && cp -a /tmp/node_modules /app/

# Load the application code
WORKDIR /app
ADD . /app

# Install dependancies
RUN yarn install

FROM BASE as BUILD
RUN yarn build

FROM BASE as RELEASE
# Define the url as the healthcheck
# HEALTHCHECK CMD curl --fail http://localhost:8443/ping || exit 1

# Start 'er up
CMD ["yarn", "start"]
