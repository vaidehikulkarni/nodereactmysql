# nodereactmysql
node js react js and mysql connection

To set up a full-stack application with Node.js, React.js, Redux, React-Ag-Grid, MySQL database, Postman for API testing. This example will walk you through setting up both the backend and frontend parts, along with state management, MySQL database connection.

nodereactmysql/
├── backend/                  # Backend code (Node.js + Express)
│   ├── config/               # Database and other configurations
│   ├── models/               # Sequelize models
│   ├── .env                  # Environment variables
│   └── server.js             # Express server
├── frontend/                   # Frontend code (React + Redux + React-Ag-Grid)
│   ├── public/
│   ├── src/
│   │   ├── components/       # React components
│   │   ├── redux/            # Redux store and slices
│   │   ├── App.js            # Main React component
│   │   └── index.js          # Entry point for React app
│   └── .env                  # Environment variables for frontend
└── README.md

-----------------------------------------------------------------------------------------------
Set Up the Backend (Node.js + Express + MySQL)

1. Initialize Backend Project: First, create the 'backend' directory and initialize a Node.js project.

2. Install Backend Dependencies: Install the required dependencies for the backend:
    npm install express mysql2 sequelize dotenv cors

    express: Web framework.
    mysql2: MySQL client for Node.js.
    sequelize: ORM for MySQL.
    dotenv: Environment variable management.
    cors: Middleware for handling cross-origin requests.

3. Set Up Sequelize and MySQL Connection: Create a config/database.js file for Sequelize setup:
    Add the .env file to store environment variables

4. Create Sequelize Model: In models/item.js, create a model for the Item table

5. Set Up Express Server: In server.js, set up the Express server and connect to MySQL using Sequelize

6. Test APIs Using Postman
    Start the backend server by running 'node server.js'
    Open Postman and test the GET /api/items endpoint.
    If there are items in the database, they will be returned as JSON.

--------------------------------------------------------------------------------------------

Setting Up the Frontend (React + Redux + AG Grid)

1. Initialize react project:
    a. create react app using 'npx create-react-app frontend'
    b. install necessary dependencies
    npm install redux react-redux axios @reduxjs/toolkit ag-grid-react ag-grid-community

2.  Set Up Redux Store
    a. Create Redux slice: Create a file src/redux/slices/itemsSlice.js to manage items in the state.
    b. Set up Redux store in src/redux/store.js
    c. Wrap your app with the Redux provider: In src/index.js

3. Create Items Component: src/components/Items.js
    a. Set Up AG Grid
    a. In src/App.js, integrate Items component to display the items:
    c. Fetch Data Using Redux and Display in AG Grid
    d. The items will be fetched from the backend using Redux and displayed in the AG Grid.

4. Run backend server: node server.js
5. Run front end react app: npm start

The React app will fetch items data from the Express backend, and AG Grid will display it.

6. Testing with Postman
    Test the backend APIs using Postman (e.g., GET /api/items).