import AppError from "../../../shared/helpers/AppError";
import { ClientRepository } from "../domain/repositories/ClientRepository";
import { Client } from "../infra/typeorm/entities/Client";
import { IChangeClientNameDTO } from "./ChangeClientNameDTO";

export class ChangeClientNameUseCase {
    constructor(private clientsRepository: ClientRepository){}

    async execute(data: IChangeClientNameDTO): Promise<Client>{
        const client = await this.clientsRepository.findById(data.id);

        if(!client ){
            throw new AppError('Nenhuma cliente cadastrado com esse nome.');
        }

        client.name = data.name;

        await this.clientsRepository.save(client);

        return client;
    }
}