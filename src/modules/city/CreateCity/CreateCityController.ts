import { Request, Response } from "express";
import { validateCity } from "../../../shared/helpers/CreateValidation";
import { CreateCityUseCase } from "./CreateCityUseCase";

export class CreateCityController {
    constructor(private createCityUseCase: CreateCityUseCase){}

    async handle(req: Request, res: Response): Promise<Response>{
        const {name, state} = req.body;

        try {
            await validateCity.validateAsync(req.body);
        } catch (error: any) {
            return res.status(500).json({
                message: error['message']
            });
        }

        await this.createCityUseCase.execute({name, state});

        return res.status(201).json({
            message: 'Cidade cadastrada com sucesso!'
        })
    }
}