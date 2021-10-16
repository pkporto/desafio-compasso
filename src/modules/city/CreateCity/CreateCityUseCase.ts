import { City } from "../../../modules/city/infra/typeorm/entities/City";
import { getCustomRepository } from "typeorm";
import { ICreateCityDTO } from "./CreateCityDTO";
import { ICityRepository } from "../domain/models/ICityRepository";

export class CreateCityUseCase {
    constructor(private cityRepository: ICityRepository){}
    async execute(data: ICreateCityDTO): Promise<City>{
        const user = new City(data);
        return await this.cityRepository.save(user);
    }
}