import { Router, Request, Response } from "express";
import {getCityController} from "../../CreateCity/CreateCityIndex"

const citiesRoutes = Router();

citiesRoutes.post("/createCity", (req: Request, res: Response) => {
  return getCityController.handle(req, res);
});


export { citiesRoutes };