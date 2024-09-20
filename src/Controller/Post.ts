import { postType } from "../ApiTypes/api-types";

const posts: postType[] = [{ id: 1, name: "Onkar", lastname: "Jadhav" }];

export const getPosts = () => {
  return posts;
};

export const addPosts = (name: string, lastname: string) => {
  const newPost: postType = { id: Date.now(), name, lastname };
  posts.push(newPost);
  return posts;
};
