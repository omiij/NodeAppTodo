"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express")); // Default import
var body_parser_1 = __importDefault(require("body-parser")); // Change to default import as well
var todos_1 = __importDefault(require("./Router/todos"));
var app = (0, express_1.default)();
var port = 8000;
// Middleware to parse JSON bodies
app.use(body_parser_1.default.json()); // This should be placed before the routes
// Use the todos router
app.use(todos_1.default);
// Start the server
app.listen(port, function () {
    console.log("Server running at http://localhost:".concat(port));
});
//# sourceMappingURL=app.js.map