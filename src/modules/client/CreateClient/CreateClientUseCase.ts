import { Client } from "src/modules/city/infra/typeorm/entities/City";
import { getCustomRepository } from "typeorm";
import { ClientRepository } from "../domain/repositories/ClientRepository";
import { ICreateClientDTO } from "./CreateClientDTO";

export class CreateClientUseCase {
    async execute(data: ICreateClientDTO){
        const clientRepository = getCustomRepository(ClientRepository);

        const user = new Client(data);
        clientRepository.save()
    }
}