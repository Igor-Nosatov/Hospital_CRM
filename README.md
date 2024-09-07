# 🚀 My Laravel Project Hospital CRM with React 18

![Hospital CRM]

## ✨ Overview

Welcome to **My Laravel Project Hospital CRM**! This is a comprehensive web application built with Laravel 10 and React 18. The project features a REST API for backend operations and a modern React frontend using TypeScript, Redux Toolkit, and React Router.

## 📦 Features

### Backend:

- **Laravel 10**:
  - Utilizes a DTO (Data Transfer Object) approach for clean data handling.
  - Implements strict type declarations and a filter builder approach for robust querying.
  - Includes Laravel Feature PHPUnit tests for comprehensive backend testing.

- **Swagger**:
  - REST API documentation is available via Swagger UI.

- **Postman**:
  - A pre-configured Postman collection is available for testing API endpoints. 

- **MySQL 8**:
  - Primary database for storing application data.

- **MongoDB**:
  - Used for storing application logs.

- **RabbitMQ**:
  - Manages queues for asynchronous processing.

- **Docker**:
  - Runs the application using Docker containers for simplified setup and deployment.

### Frontend:

- **React 18**:
  - Modern UI framework leveraging hooks and concurrent features.

- **Redux Toolkit**:
  - State management solution for efficient and maintainable state management.

- **React Router**:
  - Handles navigation between different pages of the application.

- **TypeScript**:
  - Provides static typing for a better developer experience and enhanced code quality.

### Technical debt:

- Add logging of all actions through the queue using Apache Kafka
- QA Testing 
- Check Laravel Feature Tests
- Add more typization on Frontend
- Add Redis cache
- Add Broadcast with WebSocket functionality for Support Service
- Add payment systems (use strategic pattern)
