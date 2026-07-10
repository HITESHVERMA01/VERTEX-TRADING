# Stock Trading Platform

A full-stack stock trading platform built with React for both a public-facing landing experience and an internal-style trading dashboard. The project showcases a modern fintech-style UI, portfolio views, and a backend connected to MongoDB for storing trading-related data.

## Overview

This repository contains three main parts:

- Frontend: a polished landing and marketing website for the platform
- Dashboard: an interactive trading dashboard with portfolio and market views
- Backend: a Node.js/Express API connected to MongoDB for holdings, positions, and orders

## Features

### Public website
- Home page with hero section, stats, pricing, education, and calls to action
- Product, pricing, about, support, and signup pages
- Responsive modern UI

### Trading dashboard
- Watchlist view
- Holdings overview
- Positions view
- Orders summary
- Funds section
- Portfolio-style analytics and charts

### Backend API
- REST endpoints for holdings, positions, and orders
- MongoDB persistence with Mongoose
- CORS-enabled Express server

## Tech Stack

### Frontend
- React
- React Router
- Bootstrap
- CSS

### Dashboard
- React
- Material UI
- Chart.js
- react-chartjs-2
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- Passport.js

## Project Structure

```text
backend/          # Express backend and MongoDB models
frontend/         # Public-facing React app
Dashboard/        # Trading dashboard React app
```

## Getting Started

### Prerequisites
- Node.js installed
- MongoDB available locally or via a cloud service

### 1) Clone the repository

```bash
git clone <repository-url>
cd "STOCK TRADING PLATFORM"
```

### 2) Backend setup

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` folder:

```env
PORT=3002
MONGO_URL=your_mongodb_connection_string
```

Start the backend:

```bash
npm start
```

### 3) Frontend setup

```bash
cd ../frontend
npm install
npm start
```

### 4) Dashboard setup

```bash
cd ../dashboard
npm install
npm start
```

## API Endpoints

The backend exposes endpoints such as:

- `GET /allHoldings`
- `GET /allPositions`
- `POST /newOrder`

## Notes

This project is designed as a sample/full-stack product demo and can be extended with:
- real-time market data
- authentication and user accounts
- order execution logic
- advanced analytics and charts

## License

This project uses the ISC license.
