import {
  getAllUsers,
  getUserById,
  saveUser,
  removeUser,
} from "./Controller/UserController";

export const Routes = [
  {
    method: "get",
    route: "/users",
    action: getAllUsers, // Directly referencing the getAllUsers function
  },
  {
    method: "get",
    route: "/users/:id",
    action: getUserById, // Directly referencing the getUserById function
  },
  {
    method: "post",
    route: "/users",
    action: saveUser, // Directly referencing the saveUser function
  },
  {
    method: "delete",
    route: "/users/:id",
    action: removeUser, // Directly referencing the removeUser function
  },
];
