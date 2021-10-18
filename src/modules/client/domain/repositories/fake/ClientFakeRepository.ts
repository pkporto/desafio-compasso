import { Client } from "../../../../../modules/client/infra/typeorm/entities/Client";
import AppError from "../../../../../shared/helpers/AppError";
import { IClientRepository } from "../../models/IClientRepository";

export class ClientFakeRepository implements IClientRepository{
    private clients: Client[] = [];

    async save(client: Client): Promise<Client> {

        

        Object.assign(client, {
            id: this.clients.length + 1
        })

        this.clients.push(client);

        return client;
    }
    async findById(id: number): Promise<Client | undefined> {
        const client = this.clients.find(client => client.id == id);

        if(!client){
            throw new AppError('Cliente não encontrado.');
        }
        return client;
    }
    findByName(name: string): Promise<Client[]> {
        throw new Error("Method not implemented.");
    }
    removeById(id: number): void {
        throw new Error("Method not implemented.");
    }

}