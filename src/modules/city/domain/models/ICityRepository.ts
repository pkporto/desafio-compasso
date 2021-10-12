import { City } from "../../infra/typeorm/entities/City";

export interface ICityRepository {
    getAll(): Promise<City[]>;
    findByName(name: string): Promise<City[] | undefined>;
    findByState(state: string): Promise<City[] | undefined>;
    save(city: City): void;
}