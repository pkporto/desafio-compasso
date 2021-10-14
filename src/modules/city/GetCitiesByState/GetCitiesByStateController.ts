import { Request, Response } from "express";
import { GetCitiesByStateUseCase } from "./GetCitiesByStateUseCase";

import { validateCitiesByState} from "../../../shared/helpers/CreateValidation";

export class GetCitiesByStateController {
    constructor(private getCitiesByStateUseCase: GetCitiesByStateUseCase){}

    async handle(req: Request, res: Response): Promise<Response>{

        const {state} = req.query;

        try {
            await validateCitiesByState.validateAsync(req.query);
        } catch (error) {
            return res.status(400).json({
                data: 'Você precisa definir o nome de um estado.'
            })
        }
       
            const cities = await this.getCitiesByStateUseCase.execute(String(state));

            return res.status(200).json({
                data: cities
            })
        
    }
}