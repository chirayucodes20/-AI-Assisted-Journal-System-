# AI Assisted Journal System

## Overview

This project is a simple backend system where users can write journal entries after nature sessions and analyze their emotional state.

## Features

* Create journal entries
* Retrieve past entries
* Basic emotion analysis from journal text

## Tech Stack

Backend: Node.js, Express
Database: MongoDB Atlas

## APIs

### Create Journal Entry

POST /api/journal

Body:
{
"userId":"123",
"ambience":"forest",
"text":"I felt calm today after listening to rain"
}

### Get User Entries

GET /api/journal/:userId

### Analyze Journal Emotion

POST /api/journal/analyze

Body:
{
"text":"I felt calm today after listening to rain"
}

## Run Project

Install dependencies:

npm install

Start server:

npx nodemon server.js
