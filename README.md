# AI Assisted Journal System

## Overview

The AI Assisted Journal System allows users to record journal entries after immersive nature sessions such as forest, ocean, or mountain environments.
The system stores journal entries, analyzes emotional tone from the text, and provides insights about the user’s mental state.

This project demonstrates API design, backend architecture, and integration of basic emotion analysis.

---

## Features

• Create journal entries
• Retrieve previous journal entries by user
• Analyze emotional tone from journal text
• Extract keywords and generate a short summary

---

## Tech Stack

Backend: Node.js, Express.js
Database: MongoDB Atlas
Language: JavaScript

---

## Project Structure

backend/
controllers/
journalController.js

models/
Journal.js

routes/
journalRoutes.js

services/
aiService.js

server.js

---

## API Endpoints

### Create Journal Entry

POST /api/journal

Example Request

{
"userId": "123",
"ambience": "forest",
"text": "I felt calm today after listening to the rain."
}

---

### Get User Entries

GET /api/journal/:userId

Returns all journal entries created by the user.

---

### Analyze Journal Emotion

POST /api/journal/analyze

Example Request

{
"text": "I felt calm today after listening to the rain."
}

Example Response

{
"emotion": "calm",
"keywords": ["I","felt","calm"],
"summary": "User feels calm"
}

---

## Setup Instructions

Clone the repository

git clone <repository-link>

Install dependencies

npm install

Run the server

npx nodemon server.js

Server runs on

http://localhost:5000

---

## Future Improvements

• Advanced NLP based emotion detection
• Visualization of mood trends over time
• User authentication and privacy controls
• Real-time insights dashboard

---

