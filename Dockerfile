FROM node

COPY . ./ftb_supportdesk_web

COPY package.json package-lock.json ./
RUN  npm install

CMD ["npm", "run", "dev"]
EXPOSE 3002