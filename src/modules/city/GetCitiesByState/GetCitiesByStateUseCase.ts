import AppError from "../../../shared/helpers/AppError";
import { CityRepository } from "../domain/repositories/CityRepository";
import { City } from "../infra/typeorm/entities/City";

export class GetCitiesByStateUseCase {
    constructor(private cityRepository: CityRepository){}

    async execute(state: string): Promise<City[]>{
        const cities = await this.cityRepository.findByState(state);
        console.log(state);

        if(cities?.length == 0 ){
            throw new AppError('Esse estado não possui nenhuma cidade cadastrada.');
        }

        return cities;
    }
}