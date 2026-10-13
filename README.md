# Quiz App

A React + Vite quiz application where users can sign up, log in, answer video-based questions, and view their results. The app uses Firebase Authentication and Firebase Realtime Database for user accounts and quiz data.

## Features

- User signup and login flow with Firebase Authentication
- Protected routes for quiz and result pages
- Video-based quiz browsing using dynamic routes
- Question answering with multiple-choice options
- Score calculation and result analysis
- Firebase-backed quiz and answer data loading

## Tech Stack

- React 19
- Vite
- React Router DOM
- Firebase
- CSS Modules

## Project Structure

```bash
src/
├── components/
├── contexts/
├── costomHook/
├── pages/
├── style/
├── App.jsx
├── main.jsx
├── ...
firebase.jsx
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Create a `.env.local` file in the project root and add your Firebase configuration:

```env
VITE_API_KEY=your_api_key
VITE_AUTH_DOMAIN=your_auth_domain
VITE_PROJECT_ID=your_project_id
VITE_STORAGE_BUCKET=your_storage_bucket
VITE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_APP_ID=your_app_id
VITE_MEASUREMENT_ID=your_measurement_id
VITE_DATABASE_URL=your_database_url
```

### 3. Run the app

```bash
npm run dev
```

The app will start in development mode and usually be available at:

```bash
http://localhost:5173
```

## Available Scripts

```bash
npm run dev     # start the Vite dev server
npm run build   # create a production build
npm run preview # preview the production build
npm run lint    # run ESLint checks
```

## Firebase Setup

This app expects:

- Firebase Authentication enabled for Email/Password sign-in
- Firebase Realtime Database with quiz data stored in paths like:
  - `quiz/<videoId>/questions`
  - `answers/<videoId>/questions`
  - `result/<userId>`

## Notes

This project is designed as a learning or demo quiz app and uses Firebase for real authentication and database content. If your database structure differs, update the data access logic in the custom hooks under `src/costomHook/`.

## License

This project is for educational/demo purposes.

