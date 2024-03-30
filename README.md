# FoodOnWheels


React Node Project README
Overview
This project is a combination of React, Node.js, Express.js and MongoDB, aimed at creating a full-stack web application. React is used for the frontend to handle user interface components and interactions, while Node.js is used for the backend to manage server-side logic and data storage.

Prerequisites
Before running this project, ensure you have the following installed:

Node.js: Make sure you have Node.js installed. You can download it from https://nodejs.org.
npm (Node Package Manager): npm typically comes with Node.js installation.
Setup Instructions

1.Clone the repository:
git clone <repository_url>

2.Install dependencies:
cd <project_folder>
npm install express, bootstrap, react-router-dom etc

3.Set up environment variables:
PORT=4000
DATABASE_URL=mongodb://localhost:27017/FoodOnWheels
Start the backend server:
cd backend/
npm start
This will start the Node.js server.

Start the frontend development server:
cd frontend/src
npm start
This will start the React development server.

Access the application:
Once both the backend and frontend servers are running, you can access the application by navigating to http://localhost:3000 in your web browser.

Project Structure
The project structure is organized as follows:

project_folder/
│
├── frontend/             # Frontend (React) code
│   ├── public/         # Public assets
│   └── src/            # React application source code
│       ├── components/ # Reusable components
│       |    |──Card.js
|       |    |──Carousel.js
|       |    |──footer.js
|       |    └──Navbar.js
|       |── routes/
|       |   |──Cart.js
|       |   |──ContextReducer.js
|       |   |──Home.js
|       |   |──Login.js
|       |   |──MyOrder.js
|       |   └──Signup.js
│       ├── App.js      # Main React component
│       └── index.js    # Entry point for React application
│
├── backend/             # Backend (Node.js) code
│   ├── models/          # Data models
|   |   |── Orders.js
|   |   └── User.js
│   ├── routes/          # API routes
|   |   |── CreateUser.js
|   |   |── DisplayData.js
|   |   └── OrderData.js
│   ├── db.js            # Database connection 
│   └── index.js         # Entry point for Node.js server
│
├── package.json        # Node.js dependencies and scripts
└── README.md           # Project README file

Website View
-------------
Home Page (without login)
![Screenshot (30)](https://github.com/Shantanu-2127/FoodOnWheels/assets/72463363/b11d8a88-3c6a-40e0-b3aa-3dd6e01dba40)


Home Page (when logged in)
![LOGGED IN](https://github.com/Shantanu-2127/FoodOnWheels/assets/72463363/00125259-195d-4538-bc1e-1f7d8909d358)


Food Item Cards on Home Page
![Screenshot (31)](https://github.com/Shantanu-2127/FoodOnWheels/assets/72463363/66a89e3d-172a-47ad-9a77-cc9ee2a96223)


Cart Functionality
![Screenshot (32)](https://github.com/Shantanu-2127/FoodOnWheels/assets/72463363/7be6a223-c675-4a8d-b1b5-996f19d69489)


Previous Orders
![Screenshot (33)](https://github.com/Shantanu-2127/FoodOnWheels/assets/72463363/d573959e-4fed-4e1f-8fef-000d4834685e)

