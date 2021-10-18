import { City } from "../../../modules/city/infra/typeorm/entities/City";
import { getCustomRepository } from "typeorm";
import { ICreateCityDTO } from "./CreateCityDTO";
import { ICityRepository } from "../domain/models/ICityRepository";
import AppError from "../../../shared/helpers/AppError";

export class CreateCityUseCase {
    constructor(private cityRepository: ICityRepository){}
    async execute(data: ICreateCityDTO): Promise<City>{

        const cityExists = await this.cityRepository.findByName(data.name);

        if(cityExists){
            throw new AppError("A cidade já foi cadastrada.");
        }
        const user = new City(data);

        return await this.cityRepository.save(user);
    }
}