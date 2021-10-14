import { Request, Response } from "express";
import { GetAllCitiesUseCase } from "./GetAllCitiesUseCase";

export class GetAllCitiesController {
    constructor(private getAllCitiesUseCase: GetAllCitiesUseCase){}

    async handle(req: Request, res: Response): Promise<Response>{
        const cities = await this.getAllCitiesUseCase.execute();

        return res.status(200).json({
            data: cities
        })
    }
}