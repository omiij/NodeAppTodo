import express, { Application } from "express";
import bodyParser from "body-parser";
import todosRoute from "./Router/todos";

const app: Application = express();
const port: number = 8000;

// Middleware to parse JSON bodies
app.use(bodyParser.json()); // This should be placed before the routes

// Use the todos router
app.use(todosRoute);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
