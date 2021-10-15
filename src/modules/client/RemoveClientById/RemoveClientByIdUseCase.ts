import AppError from "../../../shared/helpers/AppError";
import { ClientRepository } from "../domain/repositories/ClientRepository";
import { Client } from "../infra/typeorm/entities/Client";

export class RemoveClientByIdUseCase {
    constructor(private clientsRepository: ClientRepository){}

    async execute(id: number) {
        await this.clientsRepository.removeById(id);

    
    }
}