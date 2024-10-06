import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";
import path from "path"; // Use path for directory handling
import dotenv from "dotenv"; // Import dotenv

// Load environment variables from .env file
dotenv.config();

export const AppDataSource = new DataSource({
  type: process.env.PG_DB_TYPE as "postgres", // Use environment variable for type
  host: process.env.PG_DB_HOST, // Use environment variable for host
  port: parseInt(process.env.PG_DB_PORT as string, 10), // Use environment variable for port
  username: process.env.PG_DB_USERNAME, // Use environment variable for username
  password: process.env.PG_DB_PASSWORD, // Use environment variable for password
  database: process.env.PG_DB_DATABASE, // Use environment variable for database name
  synchronize: false, // Disable automatic synchronization
  logging: false,
  entities: [User],
  migrations: [path.join(__dirname, "/migrations/*.{ts,js}")], // Specify the migrations directory
  subscribers: [],
});
