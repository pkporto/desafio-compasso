import { Request, Response } from "express";
import { GetCityByNameUseCase } from "./GetCityByNameUseCase";

import { validateCityByName} from "../../../shared/helpers/CreateValidation";

export class GetCityByNameController {
    constructor(private getCityByNameUseCase: GetCityByNameUseCase){}

    async handle(req: Request, res: Response): Promise<Response>{

        const {name} = req.query;

        try {
            await validateCityByName.validateAsync(req.query);
        } catch (error) {
            return res.status(400).json({
                message: 'Você precisa definir o nome de uma cidade.'
            })
        }
        console.log(req.query);
            const cities = await this.getCityByNameUseCase.execute(String(name));

            return res.status(200).json({
                data: cities
            })
        
    }
}