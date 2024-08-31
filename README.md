# E-commerce Backend

Welcome to the backend of the e-commerce application built using Node.js, Express.js, and MongoDB. This project serves as the server-side component for managing users, products, carts, and orders in an e-commerce platform.

## Features

- **User Authentication:** Secure user login and registration using JWT (JSON Web Tokens)(in implementation).
- **Product Management:** Full CRUD (Create, Read, Update, Delete) operations for products.
- **Cart and Order Management:** Manage user carts and process orders.
- **RESTful API:** Well-structured and easy-to-use RESTful API.
- **MongoDB Integration:** Efficient data storage and retrieval using MongoDB.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14.x or higher)
- [MongoDB](https://www.mongodb.com/) (local instance or cloud)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Tiwariji-07/ecommerce-backend.git
2. **Navigate to the project directory::**
   ```bash
   cd ecommerce-backend
3. **Install dependencies:**
   ```bash
   npm install
4. **Set up environment variables:**
   Create a `.env` file in the root directory and add your MongoDB connection string and the port number:
   ```bash
   MONGODB_URL=your_mongodb_connection_string
   PORT=3000

5. **Start the server:**
   ```bash
   nodemon start
6. **Access the API:**
   Once the server is running, you can access the API at `http://localhost:3000`.
