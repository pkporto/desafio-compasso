import { EntityRepository, getRepository } from "typeorm";
import { Client } from "../../infra/typeorm/entities/Client";
import { IClientRepository } from "../models/IClientRepository";

@EntityRepository(Client)
export class ClientRepository  implements IClientRepository{
async save(client: Client){
    await getRepository(Client).save(client);
}
}