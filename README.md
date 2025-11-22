# MERN Portfolio

A premium personal portfolio website built with the MERN stack (MongoDB, Express, React, Node.js).

## Project Structure

- `client/`: React frontend (Vite)
- `server/`: Express backend API

## Prerequisites

- Node.js installed
- MongoDB installed and running (or a MongoDB Atlas URI)

## Getting Started

### 1. Setup Backend (Server)

Navigate to the server directory and install dependencies:

```bash
cd server
npm install
```

Create a `.env` file based on `.env.example`:

```bash
cp .env.example .env
```
(Or manually create `.env` and add your `MONGODB_URI`)

Start the server:

```bash
npm start
# or for development with auto-restart
npm run dev
```

The server will run on `http://localhost:5000`.

### 2. Setup Frontend (Client)

Open a new terminal, navigate to the client directory and install dependencies:

```bash
cd client
npm install
```

Start the development server:

```bash
npm run dev
```

The client will run on `http://localhost:5173` (or similar).

## Features

- **Hero Section**: Animated introduction.
- **About Section**: Skills and bio.
- **Projects Section**: Fetches projects from the backend API. (Includes fallback data if API is unreachable).
- **Contact Section**: Functional contact form connected to the backend.

## Customization

- Update `client/src/components` to change the content.
- Update `server/server.js` to modify the API or database schema.
