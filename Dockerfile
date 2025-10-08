# Use the official Node.js 16 image
FROM node:16.17.0

# Set the NODE_ENV argument, default to development
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

# Set the working directory to /opt/
WORKDIR /opt/

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install node-gyp globally
RUN yarn global add node-gyp

# Set a longer timeout for network requests and install dependencies
RUN yarn config set network-timeout 600000 -g && yarn install

# Add node_modules/.bin to PATH for easier command usage
ENV PATH /opt/node_modules/.bin:$PATH

# Set the working directory to /opt/app
WORKDIR /opt/app

# Copy the rest of the application files
COPY . .

# Change ownership of the application files to the node user
RUN chown -R node:node /opt/app

# Switch to the node user
USER node

# Build the Strapi application
RUN ["yarn", "build"]

# Expose port 1337
EXPOSE 1337

# Start the Strapi application in development mode
CMD ["yarn", "develop"]
