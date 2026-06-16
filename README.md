# ShopEZ - MERN E-Commerce Platform

ShopEZ is a full-stack MERN e-commerce web application developed using React.js, Node.js, Express.js, and MongoDB. The project allows users to browse products, view product details, add products to cart, manage quantity, checkout with GST and delivery charges, and place orders. It also includes an admin dashboard for product management.


## Project Overview

ShopEZ is designed to provide a simple and user-friendly online shopping experience. The application includes both user and admin functionality. Users can register, login, browse products, add items to cart, checkout, and view orders. Admin users can manage products and access admin features through a protected admin dashboard.

## Features

### User Features

* User registration
* User login with JWT authentication
* Product listing page
* Product details page
* Add to cart only after login
* Cart quantity increase and decrease
* Remove products from cart
* Checkout page with delivery details
* GST calculation
* Delivery charge calculation
* Grand total calculation
* Order placement
* User profile page
* Order history page

### Admin Features

* Admin login
* Protected admin dashboard
* View products
* Add products
* Delete products
* Manage product details
* View order-related details

## Technology Stack

### Frontend

* React.js
* React Router DOM
* Axios
* Bootstrap
* CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JSON Web Token
* bcrypt.js
* CORS
* dotenv

### Database

* MongoDB
* MongoDB Compass

## Project Architecture

```text
ShopEZ
│
├── client
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── server
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── index.js
│   └── package.json
│
└── README.md
```

## Folder Structure Explanation

### Client

The `client` folder contains the React frontend application.

Important folders:

* `components` - reusable UI components like Navbar
* `pages` - frontend pages like Home, Products, Cart, Checkout, Login, Register, Profile, Admin Dashboard
* `services` - Axios API configuration
* `App.jsx` - application routes
* `main.jsx` - React entry file

### Server

The `server` folder contains the backend Express application.

Important folders:

* `config` - MongoDB connection file
* `models` - Mongoose schemas for User, Product, Cart, and Order
* `controllers` - backend logic for authentication, cart, and orders
* `routes` - API routes
* `middleware` - authentication and admin authorization middleware
* `index.js` - backend server entry file

## Installation and Setup

### Prerequisites

Install the following software:

* Node.js
* MongoDB
* MongoDB Compass
* VS Code

## Backend Setup

Open terminal in the `server` folder.

```bash
cd server
npm install
```

Create a `.env` file inside the `server` folder.

```env
PORT=8000
MONGO_URI=mongodb://127.0.0.1:27017/shopez
JWT_SECRET=shopsecreta
```

Start the backend server:

```bash
npm run dev
```

Backend will run on:

```text
http://localhost:8000
```

## Frontend Setup

Open another terminal in the `client` folder.

```bash
cd client
npm install
npm run dev
```

Frontend will run on:

```text
http://localhost:5173
```

## API Endpoints

### Authentication APIs

| Method | Endpoint             | Description                   |
| ------ | -------------------- | ----------------------------- |
| POST   | `/api/auth/register` | Register a new user           |
| POST   | `/api/auth/login`    | Login user and generate token |

### Product APIs

| Method | Endpoint            | Description                |
| ------ | ------------------- | -------------------------- |
| GET    | `/api/products`     | Get all products           |
| GET    | `/api/products/:id` | Get single product details |
| POST   | `/api/products`     | Add product by admin       |
| DELETE | `/api/products/:id` | Delete product by admin    |

### Cart APIs

| Method | Endpoint        | Description               |
| ------ | --------------- | ------------------------- |
| GET    | `/api/cart`     | Get logged-in user's cart |
| POST   | `/api/cart`     | Add product to cart       |
| DELETE | `/api/cart/:id` | Remove product from cart  |

### Order APIs

| Method | Endpoint          | Description             |
| ------ | ----------------- | ----------------------- |
| POST   | `/api/orders`     | Place order             |
| GET    | `/api/orders/all` | Get all orders by admin |

### Admin APIs

| Method | Endpoint               | Description                      |
| ------ | ---------------------- | -------------------------------- |
| GET    | `/api/admin/dashboard` | Access protected admin dashboard |

## Authentication

ShopEZ uses JWT authentication.

When a user logs in, the backend generates a token. This token is stored in localStorage and used to access protected pages and APIs.

Admin access is handled using role-based authorization. Only users with `userType: "admin"` can access admin routes.

## Database Collections

### Users Collection

Stores user details.

Fields:

* username
* email
* password
* userType

### Products Collection

Stores product details.

Fields:

* title
* description
* mainImg
* category
* price
* discount

### Cart Collection

Stores cart items.

Fields:

* userId
* productId
* title
* price
* quantity
* mainImg

### Orders Collection

Stores order details.

Fields:

* userId
* name
* email
* mobile
* address
* pincode
* title
* price
* quantity
* paymentMethod
* orderDate

## Main Pages

* Home Page
* Products Page
* Product Details Page
* Register Page
* Login Page
* Cart Page
* Checkout Page
* Orders Page
* Profile Page
* Admin Dashboard
* Admin Product Management Page

## Checkout Calculation

The checkout page calculates:

```text
Subtotal = Product Price × Quantity
GST = 18% of Subtotal
Delivery Charges = ₹99
Grand Total = Subtotal + GST + Delivery Charges
```

## Testing

The project was tested using:

* Browser testing
* Manual user testing
* Postman API testing
* MongoDB Compass database verification

Tested features:

* User registration
* User login
* Product display
* Product details
* Add to cart
* Quantity update
* Checkout
* Order placement
* Admin dashboard access
* Product add/delete by admin

## Known Issues

* Online payment gateway is not integrated yet.
* Product search and filter features can be improved.
* Order tracking is not yet implemented.
* Image upload is currently handled using image URLs.

## Future Enhancements

* Razorpay or UPI payment gateway integration
* Wishlist feature
* Product search and filter
* Product reviews and ratings
* Order tracking system
* Email confirmation
* Cloud deployment using Vercel, Render, and MongoDB Atlas
* Admin order status update feature

## Acknowledgement

This project was developed as part of Full Stack Development learning using the MERN stack. The core functionality, backend APIs, database models, and frontend pages were implemented by me. Some UI styling ideas and CSS design references were taken with the help of AI tools to improve the visual appearance of the project.

## Author

Gajerla Praneeth

## Project Status

Completed for academic submission and demonstration.
