import { City } from "../../../modules/city/infra/typeorm/entities/City";
import { getCustomRepository } from "typeorm";
import { CityRepository } from "../domain/repositories/CityRepository";
import { ICreateCityDTO } from "./CreateCityDTO";

export class CreateCityUseCase {
    constructor(private cityRepository: CityRepository){}
    async execute(data: ICreateCityDTO){
        const user = new City(data);
        this.cityRepository.save(user);
    }
}