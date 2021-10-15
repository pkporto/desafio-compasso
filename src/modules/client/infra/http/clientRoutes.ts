import { Router, Request, Response } from "express";
import {createClientController} from "../../CreateClient/CreateClientIndex"
// import {getAllCitiesController} from "../../GetAllCities/GetAllCitiesIndex"
import {getClientByNameController} from "../../GetClientByName/GetClientByNameIndex"
// import {getCitiesByStateController} from "../../GetCitiesByState/GetCitiesByStateIndex"

const clientsRoutes = Router();

clientsRoutes.post("/createClient", (req: Request, res: Response) => {
  return createClientController.handle(req, res);
});

// clientsRoutes.get("/getAllCities", (req: Request, res: Response) => {
//   return getAllCitiesController.handle(req, res);
// });

clientsRoutes.get("/getClientByName", (req: Request, res: Response) => {
  return getClientByNameController.handle(req, res);
});

// clientsRoutes.get("/getCitiesByState", (req: Request, res: Response) => {
//   return getCitiesByStateController.handle(req, res);
// });




export { clientsRoutes };