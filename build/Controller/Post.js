"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPosts = exports.getPosts = void 0;
const posts = [{ id: 1, name: "Onkar", lastname: "Jadhav" }];
const getPosts = () => {
    return posts;
};
exports.getPosts = getPosts;
const addPosts = (name, lastname) => {
    const newPost = { id: Date.now(), name, lastname };
    posts.push(newPost);
    return posts;
};
exports.addPosts = addPosts;
