import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "React.js@544",
  database: "SidhabaliAdminAPi01",
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
});

// Call this function to initialize the data source
export const initializeDataSource = async () => {
  await AppDataSource.initialize();
};
