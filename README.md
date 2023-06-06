# SecureAuth API

SecureAuth API is a secure user authentication API that utilizes JSON Web Tokens (JWT) for token-based authentication. It provides endpoints for user registration, login, and management, ensuring data confidentiality and integrity.

## Features

- User registration: Allows users to create an account by providing their name, email, and password.
- User login: Authenticates users by verifying their email and password credentials.
- Token-based authentication: Generates and validates JSON Web Tokens (JWT) for secure and stateless authentication.
- User management: Provides endpoints to retrieve user information, update user details, and delete user accounts.

## Technologies Used

1. Node.js: A JavaScript runtime environment for server-side development.
2. Express.js: A flexible web application framework for building robust APIs.
3. PostgreSQL: A powerful open-source relational database management system.
4. JSON Web Tokens (JWT): A standard for secure authentication and authorization.
5. Bcrypt.js: A library for hashing and comparing passwords securely.

## Getting Started

1. Clone the repository: git clone https://github.com/imohamadnashaat/secure-auth-api
2. Install dependencies: npm install
3. Set up the database: Create a PostgreSQL database and update the database connection details in the .env file.
4. Run the application: npm start
5. Access the API: Open your browser and navigate to http://localhost:8000/api
