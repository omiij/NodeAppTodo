"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const uuid_1 = require("uuid");
const router = (0, express_1.Router)();
const todos = [];
// Get all todos
router.get("/todo", (req, res) => {
    res.status(200).json({ todos });
});
// Add a new todo
router.post("/todo", (req, res) => {
    const newTodo = {
        id: (0, uuid_1.v4)(),
        title: req.body.title || "",
        isActive: true,
    };
    todos.push(newTodo);
    res.status(201).json({ message: "Todo is added", todos });
});
// Update a todo by ID
router.put("/todo/:id", (req, res) => {
    const todoIndex = todos.findIndex((todo) => todo.id === req.params.id);
    if (todoIndex === -1) {
        return res.status(404).json({ message: "Todo is not found" });
    }
    todos[todoIndex].title = req.body.title || todos[todoIndex].title;
    todos[todoIndex].isActive =
        req.body.isActive !== undefined
            ? req.body.isActive
            : todos[todoIndex].isActive;
    res.status(200).json({ todos });
});
// Delete a todo by ID
router.delete("/todo/:id", (req, res) => {
    const todoIndex = todos.findIndex((todo) => todo.id === req.params.id);
    if (todoIndex === -1) {
        return res.status(404).json({ message: "Todo not found" });
    }
    todos.splice(todoIndex, 1);
    res.status(200).json({ message: "Todo is deleted", todos });
});
exports.default = router;
