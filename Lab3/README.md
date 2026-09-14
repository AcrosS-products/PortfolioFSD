# Assignment 3: Backend Integration for Portfolio Website (Node.js / Express)

This project extends the React Portfolio Website built in Assignment 2 by integrating a live Node.js and Express backend built using the MVC architecture.

## Setup and Running Instructions

### 1. Starting the Backend Server
Navigate to the `server` directory and install dependencies:
```bash
cd server
npm install
```

Start the backend server in development mode using `nodemon` or standard `node`:
```bash
npm run dev
# or
npm start
```
The server will start on port `5000` by default (configurable via `.env`).

### 2. Starting the Frontend React Application
Open a separate terminal window, navigate to the `Lab3` root directory, install dependencies and start Vite dev server:
```bash
npm install
npm run dev
```
The frontend will run at `http://localhost:5173`.

---

## Environment Variables (.env)

The server configuration uses environment variables loaded via `dotenv`. See `server/.env.example` for details:
```env
PORT=5000
CLIENT_ORIGIN=http://localhost:5173
```

---

## API Endpoints & Documentation

### B1: Health Check
- **Endpoint:** `GET /`
- **Response:** `200 OK`
```json
{
  "status": "ok"
}
```

### B2: Get All Projects
- **Endpoint:** `GET /api/projects`
- **Response:** `200 OK`
```json
[
  {
    "id": "skill-swap",
    "title": "Skill Swap",
    "description": "Peer-to-peer learning exchange platform with real-time messaging and media storage.",
    "techStack": ["React", "Node.js", "MongoDB", "Socket.IO"],
    "image": "",
    "link": "https://skill-swap-across.vercel.app/"
  },
  {
    "id": "dristikon-ai",
    "title": "Dristikon AI",
    "description": "GenAI-powered SaaS for content perspective intelligence using Google Gemini API and AWS deployment.",
    "techStack": ["React", "Node.js", "MongoDB", "Gemini API", "AWS"],
    "image": "",
    "link": "http://13.48.28.106/"
  },
  {
    "id": "portfolio",
    "title": "Personal Portfolio",
    "description": "Responsive personal portfolio website built using React and Express backend.",
    "techStack": ["React", "Express", "Node.js", "CSS"],
    "image": "",
    "link": "#"
  }
]
```

### B3: Get Single Project
- **Endpoint:** `GET /api/projects/:id`
- **Success Response (200 OK):**
```json
{
  "id": "skill-swap",
  "title": "Skill Swap",
  "description": "Peer-to-peer learning exchange platform with real-time messaging and media storage.",
  "techStack": ["React", "Node.js", "MongoDB", "Socket.IO"],
  "image": "",
  "link": "https://skill-swap-across.vercel.app/"
}
```
- **Failure Response (404 Not Found):**
```json
{
  "error": "Project not found"
}
```

### B4: Submit Contact Form
- **Endpoint:** `POST /api/contact`
- **Request Body:**
```json
{
  "name": "Arnav Sharma",
  "email": "arnav@example.com",
  "message": "Great portfolio!"
}
```
- **Success Response (201 Created):**
```json
{
  "message": "Contact submission received successfully",
  "submission": {
    "id": "1726338000000",
    "name": "Arnav Sharma",
    "email": "arnav@example.com",
    "message": "Great portfolio!",
    "createdAt": "2026-09-14T13:00:00.000Z"
  }
}
```
- **Validation Failure Response (400 Bad Request):**
```json
{
  "error": "Invalid email format: missing '@' symbol"
}
```

### B5: List All Contact Submissions
> **Note:** This is an open endpoint provided without authentication for assignment verification and evaluation purposes.
- **Endpoint:** `GET /api/contact`
- **Response:** `200 OK`
```json
[
  {
    "id": "1726338000000",
    "name": "Arnav Sharma",
    "email": "arnav@example.com",
    "message": "Great portfolio!",
    "createdAt": "2026-09-14T13:00:00.000Z"
  }
]
```

### B6: Undefined Route Handling (404)
- **Endpoint:** `GET /api/doesnotexist`
- **Response:** `404 Not Found`
```json
{
  "error": "Route not found"
}
```

---

## Postman Collection
A pre-configured Postman collection file `postman_collection.json` is included in the project root directory to test all endpoints.