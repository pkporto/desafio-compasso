import { City } from "../../../../../modules/city/infra/typeorm/entities/City";
import { ICityRepository } from "../../models/ICityRepository";

export class CityFakeRepository implements ICityRepository{
    private cities: City[] = [
        {
            "id": 1,
            "name": "Belém",
            "state":"Pará",
            "clients":[]
        }
    ];

    

    async getAll(): Promise<City[]> {
        return this.cities;
    }
    async findByName(name: string): Promise<City[]> {
        
        return this.cities;
    }
    findByState(state: string): Promise<City[]> {
        throw new Error("Method not implemented.");
    }
    async save(city: City): Promise<City> {
        Object.assign(city, {
            id: this.cities.length + 1
        })

        console.log(city);
        this.cities.push(city);

        return city;
    }
    
}