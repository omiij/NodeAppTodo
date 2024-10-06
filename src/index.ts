import express, { Application, Request, Response, NextFunction } from "express";
import * as bodyParser from "body-parser";
import { AppDataSource } from "./data-source";
import { Routes } from "./routes";
import { User } from "./entity/User";

AppDataSource.initialize()
  .then(async () => {
    // Create express app
    const app: Application = express();
    app.use(bodyParser.json());

    // Register express routes from the defined application routes
    Routes.forEach((route) => {
      (app as any)[route.method](
        route.route,
        async (req: Request, res: Response, next: NextFunction) => {
          // NextFunction typed correctly
          try {
            const result = await route.action(req, res, next);
            if (result !== null && result !== undefined) {
              res.send(result);
            }
          } catch (error) {
            next(error); // Pass errors to error-handling middleware
          }
        }
      );
    });

    // Start express server
    app.listen(3000, () => {
      console.log(
        "Express server started on port 3000. Open http://localhost:3000/users to see results."
      );
    });

    // Insert new users for testing
    await AppDataSource.manager.save(
      AppDataSource.manager.create(User, {
        name: "Timber",
        email: "oj@645.cm",
        age: 26,
      })
    );

    await AppDataSource.manager.save(
      AppDataSource.manager.create(User, {
        name: "oonka",
        email: "oj@6asd45.cm",
        age: 29,
      })
    );
  })
  .catch((error) =>
    console.log("Error during DataSource initialization:", error)
  );
