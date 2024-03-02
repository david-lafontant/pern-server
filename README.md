# PERN todo API

## Introduction

This project is an API for creating, updating, deleteing task in a todo list "todo".  a template for building fullstack JavaScript applications running on node.js. The technology stack is as follows:

- **express.js** for the server
  - Serves the React app
  - Provides the JSON API for any frontend app using http
- **PostgreSQL** for the database that store the todos

The app is fully deployable to any PaaS like Heroku or AWS Elastic Beanstalk that understands how to build and run projects with a **package.json** file.

## Commands

The package.json provides all the commands needed to test and run this application.

- **npm install** install all dependencies for the server and the client.
- **npm start** starts the api in development mode on <http://localhost:5000>. Only works if the server is started separately.

## Development

Use this template to build your own apps. Since the React app is build using Create React App, you can easily update the React version.

If you want reload-functionality for the server code, I recommend using something like [nodemon](https://www.npmjs.com/package/nodemon). You can then navigate to the server folder and start it using **nodemon src/index.js**.

## Configuration

The app opens on port 5000. You can change the variable **PORT** in `index.js` to modify it.

## LICENCE

[LICENCE](LICENCE.md)
