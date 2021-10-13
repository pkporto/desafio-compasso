import { CityRepository } from "../domain/repositories/CityRepository";
import { City } from "../infra/typeorm/entities/City";

export class GetAllCitiesUseCase {
    constructor(private cityRepository: CityRepository){}

    async execute(): Promise<City[]>{
        return this.cityRepository.getAll();
    }
}