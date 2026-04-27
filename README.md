# Evangadi Forum Frontend

A React + Vite frontend for a community Q&A platform where users can register, log in, ask questions, post answers, and manage their own content.

## Overview

This repository contains the client application for Evangadi Forum. It connects to a REST API backend and provides:

- JWT-based authentication flow (register, login, protected routes)
- Question listing with search and pagination
- Ask, edit, and delete question workflows
- Answer view and editing flows
- Responsive UI built with CSS Modules, Bootstrap, and MUI icons

## Tech Stack

- React 19
- Vite 6
- React Router
- Axios
- Bootstrap 5
- CSS Modules
- Framer Motion (installed)

## Project Structure

```text
evangadi-forum-frontend/
  client/
    src/
      components/
      pages/
      utiltis/api/api.js
```

## Prerequisites

- Node.js 18+ (recommended: latest LTS)
- npm 9+
- Running Evangadi Forum backend API

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/abrahamshimels/evangadi-forum-frontend.git
   cd evangadi-forum-frontend/client
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure API base URL (if needed):

   The client currently uses:

   ```js
   // client/src/utiltis/api/api.js
   baseURL: "http://localhost:5500/api"
   ```

   Update this URL if your backend runs on a different host or port.

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the app in your browser (typically):

   ```text
   http://localhost:5173
   ```

## Available Scripts

Run these inside the `client` directory:

- `npm run dev` - Start Vite dev server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Authentication Notes

- A JWT token is stored in `localStorage` after login.
- Axios request interceptor automatically attaches `Authorization: Bearer <token>`.
- Protected routes redirect unauthenticated users to the login page.

## Build Status

The project builds successfully with Vite (`npm run build`).

## Roadmap Ideas

- Add `.env`-based API configuration (`VITE_API_BASE_URL`)
- Add unit/integration tests
- Improve bundle splitting to reduce large chunk warnings
- Add CI checks for lint/build

## License

ISC
