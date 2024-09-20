"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const todos_1 = __importDefault(require("./Router/todos"));
const app = (0, express_1.default)();
const port = 8000;
// Middleware to parse JSON bodies
app.use(body_parser_1.default.json()); // This should be placed before the routes
// Use the todos router
app.use(todos_1.default);
// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
