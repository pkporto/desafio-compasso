import { Request, Response } from "express";
import { GetClientByIdUseCase } from "./GetClientByIdUseCase";

// import { validateClientsById} from "../../../shared/helpers/CreateValidation";

export class GetClientsByIdController {
    constructor(private getClientsByIdUseCase: GetClientByIdUseCase){}

    async handle(req: Request, res: Response): Promise<Response>{

        const {id} = req.params ;

        // try {
        //     await validateClientsById.validateAsync(req.params);
        // } catch (error) {
        //     return res.status(400).json({
        //         data: 'Você precisa definir o id de um cliente.'
        //     })
        // }
       
            const client = await this.getClientsByIdUseCase.execute(Number(id));

            return res.status(200).json({
                data: client
            })
        
    }
}