# Architecture Explanation

## System Design Overview

The system follows a modular backend architecture using Express.js and MongoDB.
Each layer of the application has a dedicated responsibility:

Routes
Handle incoming HTTP requests and route them to controllers.

Controllers
Contain application logic and coordinate between services and database models.

Models
Define the database schema using MongoDB and Mongoose.

Services
Handle reusable business logic such as emotion analysis.

Database
MongoDB Atlas is used to store journal entries.

---

## Scaling to 100k Users

To scale the system to handle large user traffic:

• Deploy backend using containerization (Docker)
• Use a load balancer to distribute requests
• Use horizontally scalable cloud infrastructure
• Use managed database clusters (MongoDB Atlas)
• Implement caching for frequently accessed insights

---

## Reducing LLM Cost

Emotion analysis can be expensive if using large language models.
Cost can be reduced by:

• Running analysis only when requested
• Using lightweight sentiment analysis models
• Caching results for repeated journal entries
• Using batch processing for analysis tasks

---

## Caching Repeated Analysis

If the same journal text is analyzed multiple times:

• Generate a hash of the journal text
• Store the analysis result in database
• Check cache before calling the analysis service

This prevents unnecessary computation.

---

## Protecting Sensitive Journal Data

Journal entries may contain personal information, therefore:

• All APIs should be served over HTTPS
• Database access should be restricted via authentication
• Sensitive data can be encrypted before storage
• Access control mechanisms should restrict user data visibility

---
