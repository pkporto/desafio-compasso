import { Client } from "../../../modules/client/infra/typeorm/entities/Client";
import { getCustomRepository } from "typeorm";
import { ClientRepository } from "../domain/repositories/ClientRepository";
import { ICreateClientDTO } from "./CreateClientDTO";
import {CityRepository} from '../../city/domain/repositories/CityRepository';

export class CreateClientUseCase {
    constructor(private clientRepository: ClientRepository){}
    async execute(data: ICreateClientDTO){
         const cityRepository = getCustomRepository(CityRepository);

         const city = await cityRepository.findByName(data.city);

        // const age = data.birth; 

       const age = this.calculate_age(data.birth);

        const user = new Client(data);
        user.city = city[0];
        user.age = age;
        this.clientRepository.save(user);
    }

     calculate_age(birth: Date): number {
        const birth_format = String(birth).split('/'); 
        console.log(Number(birth_format[0]), Number(birth_format[1]) ,Number(birth_format[2]));
        const date = new Date(Number(birth_format[0]), Number(birth_format[1]) -1,Number(birth_format[2]));
        
        var diff_ms = Date.now() - date.getTime();
        console.log(diff_ms);
        var age_dt = new Date(diff_ms);
        console.log(age_dt);

        // console.log(Math.ceil(diff_ms / (1000 * 3600 * 24))); 
        console.log(Math.abs(age_dt.getUTCFullYear() - 1970));
       return Math. abs(age_dt. getUTCFullYear() - 1970);
        // return age_dt.;
        }
}