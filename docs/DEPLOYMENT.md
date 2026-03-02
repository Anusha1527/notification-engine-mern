# 🌐 Deployment Guide

## Overview

This document explains deployment of the MERN system to live cloud environments.

---

## Backend Deployment (Render)

### Steps

1. Push repository to GitHub
2. Login to Render
3. Create Web Service
4. Select repository

### Configuration

Environment: Node

Build Command:
```
    npm install
```
Start Command:
```
    node server.js
```

Root Directory:
```
    server
```
---

### Environment Variables
```
PORT=10000
MONGO_URI=<mongodb-atlas-url>
```
### Health Endpoint
/health

Used for uptime monitoring.

---

## Frontend Deployment (Vercel)

1. Import GitHub repository
2. Select `/client` folder

Settings:

Framework: Vite

Build Command:
``` 
npm run build
```
Output Directory:
```
dist
```
---

## Production Update

Replace API URL:

http://localhost:5000

with:

https://your-backend.onrender.com

---

## Verification Steps

- Open frontend URL
- Submit notification
- Verify decision output
- Check history updates
- Test `/health` endpoint

---

## Deployment Outcome

System available publicly with:

✅ Live frontend  
✅ Live backend  
✅ Cloud database  
✅ Production environment

## Free Tier Behavior (Render)

The backend is deployed using Render's free web service tier.

Render automatically spins down inactive services after 15 minutes
of inactivity to conserve resources.

When a new request arrives:
- The service automatically wakes up
- Cold start time may take 30–60 seconds

This does NOT affect functionality and is expected behavior
for free-tier deployments.

For production environments, upgrading to an always-on instance
removes cold starts completely.