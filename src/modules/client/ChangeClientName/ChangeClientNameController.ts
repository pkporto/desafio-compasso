import { Request, Response } from "express";
import { ChangeClientNameUseCase } from "./ChangeClientNameUseCase";

// import { validateClientsById} from "../../../shared/helpers/CreateValidation";

export class ChangeClientNameController {
    constructor(private changeClientNameUseCase: ChangeClientNameUseCase){}

    async handle(req: Request, res: Response): Promise<Response>{

        const {id, name} = req.body;

        // try {
        //     await validateClientsById.validateAsync(req.params);
        // } catch (error) {
        //     return res.status(400).json({
        //         data: 'Você precisa definir o id de um cliente.'
        //     })
        // }
       
            const client = await this.changeClientNameUseCase.execute({id, name});

            return res.status(200).json({
                data: client
            })
        
    }
}