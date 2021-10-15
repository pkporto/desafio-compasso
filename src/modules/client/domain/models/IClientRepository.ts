import { Client } from "../../infra/typeorm/entities/Client";

export interface IClientRepository {
    save(client: Client): void;
    findById(id: number): Promise<Client | undefined>;
    findByName(name: string): Promise<Client[]>;
    removeById(id: number): void;
}