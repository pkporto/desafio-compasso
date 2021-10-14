import AppError from "../../../shared/helpers/AppError";
import { CityRepository } from "../domain/repositories/CityRepository";
import { City } from "../infra/typeorm/entities/City";

export class GetCityByNameUseCase {
    constructor(private cityRepository: CityRepository){}

    async execute(city: string): Promise<City[]>{
        const cities = await this.cityRepository.findByName(city);
        console.log(cities);

        if(cities?.length == 0 ){
            throw new AppError('Nenhuma cidade com esse nome.');
        }

        return cities;
    }
}