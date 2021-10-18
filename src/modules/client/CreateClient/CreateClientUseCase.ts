import { Client } from "../../../modules/client/infra/typeorm/entities/Client";
import { ICreateClientDTO } from "./CreateClientDTO";
import AppError from "../../../shared/helpers/AppError";
import { IClientRepository } from "../domain/models/IClientRepository";
import { ICityRepository } from "../../../modules/city/domain/models/ICityRepository";

export class CreateClientUseCase {
    constructor(private clientRepository: IClientRepository, private cityRepository: ICityRepository){}
    async execute(data: ICreateClientDTO): Promise<Client>{

         const city = await this.cityRepository.findByName(data.city);

        if(!city){
            throw new AppError("Cidade não encontrada");
        }

       const age = this.calculate_age(data.birth);

        const client = new Client(data);
        client.city = city;
        client.age = age;
        this.clientRepository.save(client);
        return client;
    }

     calculate_age(birth: string): number {
        const birth_format = String(birth).split('/'); 
        const date = new Date(Number(birth_format[0]), Number(birth_format[1]) -1,Number(birth_format[2]));
        
        var diff_ms = Date.now() - date.getTime();
        var age_dt = new Date(diff_ms);

       return Math. abs(age_dt. getUTCFullYear() - 1970);
        }
}