"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var uuid_1 = require("uuid");
var router = (0, express_1.Router)();
var todos = [];
// Get all todos
router.get("/todo", function (req, res) {
    res.status(200).json({ todos: todos });
});
// Add a new todo
router.post("/todo", function (req, res) {
    var newTodo = {
        id: (0, uuid_1.v4)(),
        title: req.body.title || "",
        isActive: true,
    };
    todos.push(newTodo);
    res.status(201).json({ message: "Todo is added", todos: todos });
});
// Update a todo by ID
router.put("/todo/:id", function (req, res) {
    var todoIndex = todos.findIndex(function (todo) { return todo.id === req.params.id; });
    if (todoIndex === -1) {
        return res.status(404).json({ message: "Todo is not found" });
    }
    todos[todoIndex].title = req.body.title || todos[todoIndex].title;
    todos[todoIndex].isActive =
        req.body.isActive !== undefined
            ? req.body.isActive
            : todos[todoIndex].isActive;
    res.status(200).json({ todos: todos });
});
// Delete a todo by ID
router.delete("/todo/:id", function (req, res) {
    var todoIndex = todos.findIndex(function (todo) { return todo.id === req.params.id; });
    if (todoIndex === -1) {
        return res.status(404).json({ message: "Todo not found" });
    }
    todos.splice(todoIndex, 1);
    res.status(200).json({ message: "Todo is deleted", todos: todos });
});
exports.default = router;
//# sourceMappingURL=todos.js.map