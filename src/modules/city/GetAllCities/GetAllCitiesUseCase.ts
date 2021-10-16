import { ICityRepository } from "../domain/models/ICityRepository";
import { City } from "../infra/typeorm/entities/City";

export class GetAllCitiesUseCase {
    constructor(private cityRepository: ICityRepository){}

    async execute(): Promise<City[]>{
        return this.cityRepository.getAll();
    }
}