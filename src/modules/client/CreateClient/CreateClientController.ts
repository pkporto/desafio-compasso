import { Request, Response } from "express";

export class CreateClientController {
    constructor(){}

    async handle(req: Request, res: Response): Promise<Response>{
        const {name, gender, birth, city} = req.body;

        


    }
}