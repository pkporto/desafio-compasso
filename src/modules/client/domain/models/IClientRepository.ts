import { Client } from "../../infra/typeorm/entities/Client";

export interface IClientRepository {
    save(client: Client): void;
}