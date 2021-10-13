import { Request, Response } from "express";

export class GetAllCitiesController {
    constructor(private getAllCitiesUseCase: GetAllCitiesUseCase){}

    async handle(req: Request, res: Response): Promise<Response>{
        await this.getAllCitiesUseCase
    }
}