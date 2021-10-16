import { City } from "../../infra/typeorm/entities/City";

export interface ICityRepository {
    getAll(): Promise<City[]>;
    findByName(name: string): Promise<City[] >;
    findByState(state: string): Promise<City[]>;
    save(city: City): Promise<City>;
}