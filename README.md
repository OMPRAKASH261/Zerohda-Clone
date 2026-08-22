# Zerodha Clone

A small demo/learning project that recreates a simplified Zerodha-style trading dashboard and a marketing landing site. Intended for learning React, Express, and MongoDB integrations — includes sample holdings/positions APIs, a demo buy flow, and simple session-based auth examples.

Tech stack: React, Bootstrap, Material UI, Chart.js, Node.js, Express, MongoDB (Mongoose), Jest

## Quick Start

1. Clone the repo

```bash
git clone <repo-url>
cd "Zerodha Clone"
```

2. Backend

```bash
cd backend
cp .env.example .env   # or create .env with MONGO_URL and SESSION_SECRET
npm install
npm start
```

3. Dashboard (frontend)

```bash
cd dashboard
npm install
npm start
```

4. Landing (marketing)

```bash
cd frontend
npm install
npm start
```

## Tools Required

1. VS Code (or any code editor)
2. Google Chrome (or another modern browser)
3. Node.js (v16+ recommended)
4. Git
5. GitHub account (for pushing/hosting)

## Frontend Technologies

1. HTML
2. CSS
3. JavaScript (ES6+)
4. React
5. Bootstrap
6. Material UI (MUI)

## Backend Technologies

1. Node.js
2. Express.js

## Testing Framework

1. Jest (frontend unit tests with React Testing Library)

## Setting up React Project

To scaffold a new React app (if needed):

```bash
npx create-react-app frontend
cd frontend
npm start
```

(This repo already includes `frontend` and `dashboard` apps.)

## Bootstrap

Bootstrap (optional CDN)

Add the CSS and bundle script to `public/index.html` if you prefer the CDN approach:

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
```

Or install via npm in each frontend:

```bash
npm install bootstrap
```

## font-awesome

Font Awesome

This repo includes a local copy under `frontend/public/font-awesome/`. You can also add Font Awesome via CDN or npm. Example (CDN):

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
```

Or place the downloaded `font-awesome` folder under `public/` and reference the CSS file from `public/index.html`.

## Seting up React Router

React Router

```bash
npm install react-router-dom
```

Restart the dev server after installing if it's already running.

## dashboard

Dashboard (app already included)

Install dashboard dependencies:

```bash
cd dashboard
npm install react-router-dom axios chart.js react-chartjs-2 @mui/material @mui/icons-material @emotion/react @emotion/styled
```

Purpose of packages:
- `react-router-dom`: client routing
- `axios`: HTTP client
- `chart.js` + `react-chartjs-2`: charts
- `@mui/material`, `@mui/icons-material`: Material UI components and icons
- `@emotion/*`: MUI styling peers

## Materia UI

Material UI (MUI)

Docs and icons: https://mui.com/

Install via npm in the app folder (dashboard or frontend):

```bash
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled
```

# Backend

# Backend

MongoDB setup

```bash
cd backend
npm init -y
npm install express cors dotenv mongoose bcryptjs express-session
npm install -D nodemon
```

Notes:
- `body-parser` is no longer required; use `express.json()` and `express.urlencoded()`.
- `passport` and `passport-local-mongoose` were considered in earlier iterations; the current example uses `bcrypt` and `express-session`. Feel free to add `passport` later if preferred.
- Create an `index.js` (server entry) and a `.env` with `MONGO_URL` and `SESSION_SECRET`.

Start server:

```bash
npm start
```

### Notes

Notes

- `express`: Web framework for Node.js for routing and HTTP handling.
- `express.json()` / `express.urlencoded()`: parse incoming JSON/form bodies.
- `cors`: enable cross-origin requests during development.
- `dotenv`: load environment variables from `.env`.
- `mongoose`: MongoDB ODM for schemas and models.
- `bcryptjs`: password hashing utility used in the project.
- `express-session`: session middleware for simple session-based auth (in-memory in dev).

#### Tiny memory trick

Tiny memory trick

- express = server
- express.json() = request body parsing
- cors = cross-domain access
- dotenv = env variables
- mongoose = MongoDB model layer
- bcrypt = simple password hashing
- express-session = session support

#### Created .env private or local file

Created `.env` (local/dev)

Set up a MongoDB database (Atlas or local). For Atlas, add an IP access entry (for development you can use `0.0.0.0/0` but it's not secure for production). Create a `.env` with keys such as:

```
MONGO_URL=<your-mongo-connection-string>
SESSION_SECRET=<your-session-secret>
PORT=3003
```

## User Authentication and Authorization

Documentation and notes

This repo includes a simple session-based authentication example using bcrypt for password hashing. For production you should:

- Use a persistent session store (e.g., `connect-mongo`) instead of the in-memory store.
- Use HTTPS and secure cookies.
- Consider JWTs for stateless APIs/frontends.

Helpful guide: https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/#howtosetupmongodb


## chart.js 

Chart.js (React)

Docs and examples: https://react-chartjs-2.js.org/

Install:

```bash
npm install chart.js react-chartjs-2
```

Examples:
- Vertical Bar Chart: https://react-chartjs-2.js.org/examples/vertical-bar-chart
- Doughnut Chart: https://react-chartjs-2.js.org/examples/doughnut-chart

## API - i don't use api because it's paid. 

APIs and data

This project uses dummy/local data for demo purposes. If you want real market data consider providers such as:

1. NSE India
2. Upstox
3. Marketstack (international)
4. Finnhub

Many market data APIs require API keys and paid plans for live data and high-volume requests.

## Testing - Jest
Testing - Jest

Docs: https://jestjs.io/docs/getting-started

Run frontend tests from the `frontend` folder:

```bash
cd frontend
npm test
```