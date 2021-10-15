import { Request, Response } from "express";
import { RemoveClientByIdUseCase } from "./RemoveClientByIdUseCase";

// import { validateClientsById} from "../../../shared/helpers/CreateValidation";

export class RemoveClientsByIdController {
    constructor(private removeClientsByIdUseCase: RemoveClientByIdUseCase){}

    async handle(req: Request, res: Response): Promise<Response>{

        const {id} = req.params ;

        // try {
        //     await validateClientsById.validateAsync(req.params);
        // } catch (error) {
        //     return res.status(400).json({
        //         data: 'Você precisa definir o id de um cliente.'
        //     })
        // }
       
            await this.removeClientsByIdUseCase.execute(Number(id));

            return res.status(200).json({
                data: 'Usuário deletado com sucesso.'
            })
        
    }
}