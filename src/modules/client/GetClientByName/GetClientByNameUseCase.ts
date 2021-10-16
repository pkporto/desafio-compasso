import AppError from "../../../shared/helpers/AppError";
import { ClientRepository } from "../domain/repositories/ClientRepository";
import { Client } from "../infra/typeorm/entities/Client";

export class GetClientByNameUseCase {
    constructor(private clientsRepository: ClientRepository){}

    async execute(client: string): Promise<Client[]>{
        const clients = await this.clientsRepository.findByName(client);
        console.log(clients);

        if(clients?.length == 0 ){
            throw new AppError('Nenhuma cliente cadastrado com esse nome.');
        }

        return clients;
    }
}