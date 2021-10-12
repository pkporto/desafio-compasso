import "reflect-metadata";
import "../typeorm";
import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import AppError from "../helpers/AppError";
import { citiesRoutes } from "../../modules/city/infra/http/citiesRoutes";


const app = express();
const PORT = 8181;

app.use(cors());
app.use(express.json());

app.use(citiesRoutes);

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

app.listen(process.env.APP_PORT || PORT, () => {
  console.log(`APP RODANDO NA PORTA ${PORT}`);
})

