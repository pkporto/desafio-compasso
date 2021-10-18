import AppError from "../../../../shared/helpers/AppError";
import { EntityRepository, getRepository, Like } from "typeorm";
import { City } from "../../infra/typeorm/entities/City";
import { ICityRepository } from "../models/ICityRepository";

@EntityRepository(City)
export class CityRepository  implements ICityRepository{
async getAll(): Promise<City[]> {
    const cities = await getRepository(City).find();

    return cities;
}
async findByState(state: string): Promise<City[]> {
    const cities = await getRepository(City).find({
        where:{
            state 
        }
    })

   

    return cities;
}
async findByName(name: string): Promise<City | undefined> {
    const city = await getRepository(City).findOne({
        where:{
            name
        }
    })

   

    return city;
}
async save(city: City): Promise<City>{
    return await getRepository(City).save(city);
}
}