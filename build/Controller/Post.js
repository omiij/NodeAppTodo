"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPosts = exports.getPosts = void 0;
var posts = [{ id: 1, name: "Onkar", lastname: "Jadhav" }];
var getPosts = function () {
    return posts;
};
exports.getPosts = getPosts;
var addPosts = function (name, lastname) {
    var newPost = { id: Date.now(), name: name, lastname: lastname };
    posts.push(newPost);
    return posts;
};
exports.addPosts = addPosts;
//# sourceMappingURL=Post.js.map