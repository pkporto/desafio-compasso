import { Request, Response } from "express";
import { GetClientByNameUseCase } from "./GetClientByNameUseCase";

import { validateClientsByName} from "../../../shared/helpers/CreateValidation";

export class GetClientsByNameController {
    constructor(private getClientsByNameUseCase: GetClientByNameUseCase){}

    async handle(req: Request, res: Response): Promise<Response>{

        const {name }= req.query;

        try {
            await validateClientsByName.validateAsync(req.query);
        } catch (error) {
            return res.status(400).json({
                data: 'Você precisa definir o nome de um cliente.'
            })
        }
       
            const clients = await this.getClientsByNameUseCase.execute(String(name));

            return res.status(200).json({
                data: clients
            })
        
    }
}