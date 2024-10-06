import { AppDataSource } from "../data-source";
import { NextFunction, Request, Response } from "express";
import { User } from "../entity/User";

// Repository instance
const userRepository = AppDataSource.getRepository(User);

// Get all users
export const getAllUsers = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const users = await userRepository.find();
    return response.json(users);
  } catch (error) {
    next(error);
  }
};

// Get a specific user by ID
export const getUserById = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const id = parseInt(request.params.id);
    const user = await userRepository.findOne({
      where: { id },
    });

    if (!user) {
      return response.status(404).json({ message: "Unregistered user" });
    }
    return response.json(user);
  } catch (error) {
    next(error);
  }
};

// Save a new user
export const saveUser = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const { name, email, age } = request.body;

    const newUser = userRepository.create({ name, email, age });
    const savedUser = await userRepository.save(newUser);

    return response.status(201).json(savedUser);
  } catch (error) {
    next(error);
  }
};

// Remove a user by ID
export const removeUser = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const id = parseInt(request.params.id);

    const userToRemove = await userRepository.findOneBy({ id });

    if (!userToRemove) {
      return response.status(404).json({ message: "This user does not exist" });
    }

    await userRepository.remove(userToRemove);

    return response.status(200).json({ message: "User has been removed" });
  } catch (error) {
    next(error);
  }
};
