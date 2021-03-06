import "reflect-metadata";
import "../typeorm";
import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import swaggerUI from "swagger-ui-express"
import cors from "cors";
import AppError from "../helpers/AppError";
import { citiesRoutes } from "../../modules/city/infra/http/citiesRoutes";
import { clientsRoutes } from "../../modules/client/infra/http/clientRoutes";

import swaggerDocs from '../helpers/swagger.json';
const app = express();

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.use(cors());
app.use(express.json());

app.use(citiesRoutes);
app.use(clientsRoutes);
app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      console.log("App Error");
      console.log(error);
      return response.status(error.statusCode).json({
        message: error.message,
      });
    }

    console.log(error);

    return response.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
);

export { app };
