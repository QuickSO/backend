# Deployment Documentation

## Prerequisites
- Postgres
- NodeJS (Version `v16.17.0`) => You can use `nvm` to install that version
- yarn => `npm install -g yarn`

## Install back-end
- Create a database inside Postgres
- Create a `.env` file inside the folder with the following content (Remember to replace the value in brackets {} with yours):
HOST=0.0.0.0
PORT=1339
APP_KEYS=poysonRy3zO54mH6fSUFAg==,C34rGqhyIx5yS4yrQyUp7g==,BTJQ8OonbNWYEad8XKRT2Q==,tM+9kwGN7QQMaSAHrrQN9Q==
API_TOKEN_SALT=n6KWI0WS1tT9ahayKI6YqA==
ADMIN_JWT_SECRET=3N/WZWfy27qyVBMmx3hc/g==
JWT_SECRET=XiVitW9WWms5f3Ot2/aGng==

Database
DATABASE_HOST={your database host}
DATABASE_PASSWORD={your database password}
DATABASE_NAME={your database name}
API_AUTH_URL={your API domain/host url}/api/auth/local

Email
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USERNAME=username
SMTP_PASSWORD=password
EMAIL_SENDER=curious@quickso.in
EMAIL_REPLY_TO=curious@quickso.in

SES
AWS_SES_ACCESS_KEY_ID={your key id}
AWS_SES_SECRET_ACCESS_KEY={your secret access key}
AWS_SES_REGION={your region}

markdown
Copy code
- Run `yarn install`
- Run `yarn build`
- Run `yarn start`
- Access `http://localhost:8000/admin` to access the dashboard
- Create a new account for the Strapi admin dashboard
- Create an account to be able to access the front-end (See Content Population part)

## Install front-end
- Create a `.env` file inside the folder with the following content (Remember to replace the value in brackets {} with yours):
REACT_APP_BASE_API_URL={your Strapi API domain/host url}
REACT_APP_API_URL={your Strapi API domain/host url}/api
REACT_APP_BASE_APP_URL={your web domain/host url}

markdown
Copy code
- Run `yarn install`
- Run `yarn start`
- Access `http://localhost:3003` to access the web

## Content Population
1. On the Strapi, visit `/admin/content-manager/collectionType/api::app-role.app-role`, then import the `app_roles.json` file data
2. On the Strapi, visit `https://quicksocms.tpix.in/admin/content-manager/collectionType/api::app-user.app-user`, then import the `app_users.json` file
3. On the Strapi, visit and create a new entry with these information:
   - username: b8b788ba-c039-4023-85d8-4dd7372bf15d
   - email: b8b788ba-c039-4023-85d8-4dd7372bf15d@gmail.com
   - password: {your password}
   - confirmed: true
   - blocked: false
   - uid: b8b788ba-c039-4023-85d8-4dd7372bf15d
   - full_name: b8b788ba-c039-4023-85d8-4dd7372bf15d
4. Go to the front-end domain url and login with this account: admin / {your password}
