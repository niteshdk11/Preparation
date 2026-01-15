FROM node:20

WORKDIR /my-app

# Copy all files from the current directory to the container's /my-app directory
COPY . . 

RUN npm install


# Run the application
CMD ["node", "index.js"]
