import AppError from "../../../shared/helpers/AppError";
import { ClientRepository } from "../domain/repositories/ClientRepository";
import { Client } from "../infra/typeorm/entities/Client";

export class GetClientByIdUseCase {
    constructor(private clientsRepository: ClientRepository){}

    async execute(id: number): Promise<Client>{
        const client = await this.clientsRepository.findById(id);

        if(!client ){
            throw new AppError('Nenhuma cliente cadastrado com esse nome.');
        }

        return client;
    }
}