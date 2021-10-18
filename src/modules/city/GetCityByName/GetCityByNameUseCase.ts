import AppError from "../../../shared/helpers/AppError";
import { CityRepository } from "../domain/repositories/CityRepository";
import { City } from "../infra/typeorm/entities/City";

export class GetCityByNameUseCase {
    constructor(private cityRepository: CityRepository){}

    async execute(city: string): Promise<City>{
        const cityExists = await this.cityRepository.findByName(city);

        if(!cityExists){
            throw new AppError('Nenhuma cidade com esse nome.');
        }

        return cityExists;
    }
}