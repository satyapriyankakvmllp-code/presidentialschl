# presidentialschl# Enquiry backend — deployment notes

- Start command: `npm start`  (runs `node server.js`) · Install: `npm install` · Node >= 18
- Set these in the host's Environment Variables panel (do NOT upload `.env`):
  `GMAIL_USER`, `GMAIL_APP_PASSWORD` (Google App Password), `ENQUIRY_TO`
- Frontend: set `VITE_API_URL=https://<your-backend-url>` before `npm run build`.
- `server.js` currently listens on fixed port 5000 and allows all origins (`cors()`).
  Hosts that assign a port (Render, Railway, Heroku…) need `process.env.PORT || 5000`.
