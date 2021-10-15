import { Request, Response } from "express";
import { validateClient } from "../../../shared/helpers/CreateValidation";
import { CreateClientUseCase } from "./CreateClientUseCase";

export class CreateClientController {
    constructor(private createClientController: CreateClientUseCase){}

    async handle(req: Request, res: Response): Promise<Response>{
        const {name, gender, birth, city} = req.body;

        try {
            await validateClient.validateAsync(req.body);
        } catch (error) {
            
        }

        await this.createClientController.execute(req.body);

        return res.status(201).json({
            message: 'Cliente cadastrado(a) com sucesso.'
        })


    }
}