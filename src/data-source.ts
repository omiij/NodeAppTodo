import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";
import path from "path"; // Use path for directory handling

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "React.js@544",
  database: "SidhabaliAdminAPi01",
  synchronize: false, // Disable automatic synchronization
  logging: false,
  entities: [User],
  migrations: [path.join(__dirname, "/migrations/*.{ts,js}")], // Specify the migrations directory
  subscribers: [],
});
