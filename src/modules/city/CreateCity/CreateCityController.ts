import { Request, Response } from "express";
import { CreateCityUseCase } from "./CreateCityUseCase";

export class CreateCityController {
    constructor(private createCityUseCase: CreateCityUseCase){}

    async handle(req: Request, res: Response): Promise<Response>{
        const {name, state} = req.body;

        await this.createCityUseCase.execute({name, state});

        return res.status(201).json({
            message: 'Cidade cadastrada com sucesso!'
        })
    }
}