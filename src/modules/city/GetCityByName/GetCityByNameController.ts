import { Request, Response } from "express";
import { GetCityByNameUseCase } from "./GetCityByNameUseCase";

import { validateCityByName} from "../../../shared/helpers/CreateValidation";

export class GetCityByNameController {
    constructor(private getCityByNameUseCase: GetCityByNameUseCase){}

    async handle(req: Request, res: Response): Promise<Response>{

        const {city} = req.params;

        try {
            await validateCityByName.validateAsync(req.params);
        } catch (error) {
            return res.status(400).json({
                data: 'Você precisa definir o nome de uma cidade.'
            })
        }
       
            const cities = await this.getCityByNameUseCase.execute(String(city));

            return res.status(200).json({
                data: cities
            })
        
    }
}