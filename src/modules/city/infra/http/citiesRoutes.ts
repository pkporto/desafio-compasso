import { Router, Request, Response } from "express";
import {getCityController} from "../../CreateCity/CreateCityIndex"
import {getAllCitiesController} from "../../GetAllCities/GetAllCitiesIndex"
import {getCityByNameController} from "../../GetCityByName/GetCityByNameIndex"
import {getCitiesByStateController} from "../../GetCitiesByState/GetCitiesByStateIndex"

const citiesRoutes = Router();

citiesRoutes.post("/createCity", (req: Request, res: Response) => {
  return getCityController.handle(req, res);
});

citiesRoutes.get("/getAllCities", (req: Request, res: Response) => {
  return getAllCitiesController.handle(req, res);
});

citiesRoutes.get("/getCityByName", (req: Request, res: Response) => {
  return getCityByNameController.handle(req, res);
});

citiesRoutes.get("/getCitiesByState", (req: Request, res: Response) => {
  return getCitiesByStateController.handle(req, res);
});




export { citiesRoutes };