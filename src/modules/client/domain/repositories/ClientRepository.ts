import AppError from "../../../../shared/helpers/AppError";
import { EntityRepository, getRepository, Like } from "typeorm";
import { Client } from "../../infra/typeorm/entities/Client";
import { IClientRepository } from "../models/IClientRepository";

@EntityRepository(Client)
export class ClientRepository  implements IClientRepository{
async save(client: Client){
    await getRepository(Client).save(client);
}

async findByName(name: string): Promise<Client[]> {
    const clients = await getRepository(Client).find({
        where:{
            name: Like(`%${name}%`)
        }
    })

    if(!clients){
        throw new AppError('Cliente não encontrado(a).', 404);
    }

    return clients;
}
}