# Next Move Prep with Gen AI

AI-powered interview preparation app that compares a candidate resume with a job description and generates a focused interview prep report.

## Tech Stack

- Frontend: React, Vite, Redux Toolkit, React Router
- Backend: Node.js, Express, MongoDB, Mongoose
- AI: Google Gemini
- Auth: JWT in an httpOnly cookie
- Deployment: Vercel-ready frontend and backend configs

## Project Structure

```text
client/   React/Vite frontend
server/   Express API and serverless Vercel entrypoint
```

## Local Setup

Clone the repository, then install dependencies for both apps:

```bash
cd client
npm install

cd ../server
npm install
```

Create local environment files from the examples:

```bash
cp client/.env.example client/.env
cp server/.env.example server/.env
```

Update `server/.env`:

```env
PORT=5001
MONGODB_URI=mongodb://127.0.0.1:27017/resume-tool
CLIENT_URLS=http://localhost:5173,https://next-move-prep-with-gen-ai.vercel.app
JWT_SECRET=replace-with-a-long-random-secret
GEMINI_API_KEY=replace-with-your-gemini-api-key
COOKIE_SAME_SITE=lax
COOKIE_SECURE=false
```

Update `client/.env`:

```env
VITE_API_URL=http://localhost:5001/api
```

Run the backend:

```bash
cd server
npm run dev
```

Run the frontend in a second terminal:

```bash
cd client
npm run dev
```

Open `http://localhost:5173`.

## API Routes

Base URL locally: `http://localhost:5001/api`

- `GET /health` checks API health
- `POST /user/create-user` creates an account
- `POST /user/login` logs in and sets the auth cookie
- `POST /user/logout` logs out and clears/blacklists the token
- `GET /user/me` returns the current authenticated user
- `GET /interview-report` lists saved reports
- `GET /interview-report/:id` returns one saved report
- `POST /interview-report/generate` uploads a resume PDF and generates a report
- `DELETE /interview-report/:id` deletes a saved report

## Vercel Deployment

Deploy `client` and `server` as separate Vercel projects.

### Frontend Project

- Root directory: `client`
- Build command: `npm run build`
- Output directory: `dist`
- Environment variable:

```env
VITE_API_URL=https://your-backend-domain.vercel.app/api
```

Your current frontend URL is:

```text
https://next-move-prep-with-gen-ai.vercel.app
```

### Backend Project

- Root directory: `server`
- Vercel config: `server/vercel.json`
- Serverless entrypoint: `server/src/vercel.js`
- Environment variables:

```env
MONGODB_URI=your-mongodb-atlas-uri
CLIENT_URLS=https://next-move-prep-with-gen-ai.vercel.app
JWT_SECRET=use-a-long-random-secret
GEMINI_API_KEY=your-gemini-api-key
COOKIE_SAME_SITE=none
COOKIE_SECURE=true
```

For production auth cookies to work across separate frontend and backend domains, `COOKIE_SAME_SITE` must be `none`, `COOKIE_SECURE` must be `true`, and the frontend origin must be included in `CLIENT_URLS`.

## CORS Notes

The backend allows requests from:

- `http://localhost:5173`
- `http://127.0.0.1:5173`
- `https://next-move-prep-with-gen-ai.vercel.app`
- any extra comma-separated origins added in `CLIENT_URLS` or `CLIENT_URL`

If the browser still shows a CORS error after deployment, check that:

- `VITE_API_URL` in the frontend points to the deployed backend and ends with `/api`
- `CLIENT_URLS` in the backend includes the exact deployed frontend origin
- there is no trailing path in `CLIENT_URLS`; use only the origin, for example `https://example.vercel.app`
- after changing Vercel environment variables, both projects were redeployed

## Security Notes

Do not commit real `.env` files or database/API keys. If a secret was ever committed, rotate it in MongoDB Atlas, Google AI Studio, and Vercel.
