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


## Folder Structure

```plaintext
ecommerce-backend/
│
├── controllers/    # Logic for handling requests and responses
├── models/         # MongoDB schemas using Mongoose
├── routes/         # API endpoints
├── .env            # Environment variables (not included in the repo)
├── package.json    # Project metadata and dependencies
└── README.md       # Project documentation
```

## API Endpoints

### User Authentication

- **POST** `/api/auth/register` - Register a new user
- **POST** `/api/auth/login` - Login with existing user credentials

### Product Management

- **GET** `/api/products` - Retrieve all products
- **POST** `/api/products` - Add a new product
- **GET** `/api/products/:id` - Retrieve a single product by ID
- **GET** `/api/products/search/:key` - Product Search

### Cart Management

- **GET** `/api/cart/find/:id` - Retrieve the current user's cart
- **POST** `/api/cart` - Add items to the cart
- **DELETE** `/api/cart/:cartItemId` - Remove an item from the cart
- **DELETE** `/api/cart/delete/:id` - Clear a user cart

### Order Management

- **POST** `/api/orders` - Place a new order
- **GET** `/api/orders/:id` - Retrieve all orders for the current user

### Address Management

- **POST** `/api/address` - Add new address
- **GET** `/api/address/:id` - Retrieve all addresses for the current user
- **DELETE** `/api/address/:id` - Delete Address
- **POST** `/api/address/update` - Update Address

### Favorite Management

- **POST** `/api/favorite/add` - Add new favorite for an user
- **GET** `/api/favorite/:id` - Retrieve all favorites for the current user
- **DELETE** `/api/favorite/remove/:id` - Remove an item from favorites

### Payment Management

- **POST** `/api/payment/` - Create a Payment intent
- **GET** `/api/payment/:id` - Get a Payment intent

## Dependencies

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database.
- **Mongoose**: ODM for MongoDB, making it easier to work with MongoDB in Node.js.
- **JWT**: For user authentication via JSON Web Tokens.
- **Nodemon**: Automatically restarts the server when file changes are detected during development.



