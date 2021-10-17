import { Router, Request, Response } from "express";
import {createClientController} from "../../CreateClient/CreateClientIndex";
import {getClientByNameController} from "../../GetClientByName/GetClientByNameIndex";
import {getClientByIdController} from "../../GetClientById/GetClientByIdIndex";
import {changeClientNameController } from '../../ChangeClientName/ChangeClientNameIndex';
import {removeClientByIdController} from '../../RemoveClientById/RemoveClientByIdIndex';

const clientsRoutes = Router();

clientsRoutes.post("/createClient", (req: Request, res: Response) => {
  return createClientController.handle(req, res);
});

clientsRoutes.get("/clientsName/:name", (req: Request, res: Response) => {
  return getClientByNameController.handle(req, res);
});

clientsRoutes.get("/clients/:id", (req: Request, res: Response) => {
  return getClientByIdController.handle(req, res);
});

clientsRoutes.delete("/clients/:id", (req: Request, res: Response) => {
  return removeClientByIdController.handle(req, res);
});

clientsRoutes.post("/changeClientName", (req: Request, res: Response) => {
  return changeClientNameController.handle(req, res);
});



export { clientsRoutes };