import AppError from "../../../shared/helpers/AppError";
import { ClientRepository } from "../domain/repositories/ClientRepository";
import { Client } from "../infra/typeorm/entities/Client";

export class GetClientByNameUseCase {
    constructor(private clientsRepository: ClientRepository){}

    async execute(clients: string): Promise<Client[]>{
        const cities = await this.clientsRepository.findByName(clients);
        console.log(cities);

        if(cities?.length == 0 ){
            throw new AppError('Nenhuma cliente cadastrado com esse nome.');
        }

        return cities;
    }
}