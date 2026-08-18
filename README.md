## Tools Required
 1. Vs code
 2. chrome
 3. node js
 4. git
 5. githud

## Frontend Technologies
 1. Html
 2. Css
 3. JavaScript
 4. React
 5. Bootstrap
 6. Material UI

## Backend Technologies
 1. node js
 2. Express js

// Testing Frameword
 1. Jest

## Setting up React Project
command: `npx create-react-app frontend`
   - cd frontend
   - npm start
   <!-- [Create React App](https://github.com/facebook/create-react-app). -->

## Bootstrap
[Bootstrap](https://getbootstrap.com/)
link & script paste in frontend -> public- > index.html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>

## font-awesome
[font-awesome](https://fontawesome.com/v4/get-started/)
[icons](https://fontawesome.com/v4/icons/)
download zip file and paste in fontend -> public folder -> double click to exract.
then go frontend index.html paste the path or link of font-awesome.
terminal- `cd frontend`  then  `npm start`

## Seting up React Router
`npm i react-router-dom`
`npm start`

## dashboard
command: `npx create-react-app dashboard`
   - cd frontend
   - npm start

Dashboard Dependencies:-
`npm install react-router-dom axios chart.js react-chartjs-2 @mui/material @mui/icons-material @emotion/react @emotion/styled`
* react-router-dom: routing
* axios: HTTP client
* chart.js: charting library
* react-chartjs-2: React bindings for Chart.js
* @mui/material: Material UI components
* @mui/icons-material: Material icons
* @emotion/react: MUI peer (CSS-in-JS)
* @emotion/styled: MUI peer (styled API)


## Materia UI 
install in dasboard terminal
browser - `mui.com`
goto -> `https://mui.com/material-ui/material-icons/`
copy npm command paste in dasboard terminal

# Backend
Mongodb setup 
terminal -> cd backend
`npm init`
`npm i -D nodemon`   (-D is developer dependencies)
`npm i express body-parser cors dotenv mongoose passport passport-local passport-local-mongoose`
create index.js file
termianl -> `npm start`  (it will start nodemon server)

### Notes
•	express: Web framework for Node.js; used to create routes and server.
•	body-parser: Parses incoming request bodies; often replaced by  express.json()  and  express.urlencoded() .
•	cors: Allows cross-origin requests between frontend and backend.
•	dotenv: Loads environment variables from a  .env  file.
•	mongoose: ODM for MongoDB; helps define schemas and work with the database.
•	passport: Authentication middleware for Node.js.
•	passport-local: Passport strategy for username/password login.
•	passport-local-mongoose: Mongoose plugin that simplifies Passport local auth with user schema helpers and hashing. It works with Passport and Mongoose, and expects those packages to be installed

#### Tiny memory trick
•	express = server
•	body-parser = request data
•	cors = cross-domain access
•	dotenv = env variables
•	mongoose = MongoDB model layer
•	passport = auth system
•	passport-local = local login strategy
•	passport-local-mongoose = easier user auth plugin

## Created .env  private or local file
in mongodb atlas zerodhaclosecluster -> go to ip access and create a new ip address `0.0.0.0/0` it's a universal ip address.
