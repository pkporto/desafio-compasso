import { CityFakeRepository } from "../domain/repositories/fake/CityFakeRepository";
import { City } from "../infra/typeorm/entities/City";
import { CreateCityUseCase } from "./CreateCityUseCase";

describe("Create city", () =>{
     let cityRepository: CityFakeRepository;
     let createCityUseCase: CreateCityUseCase;

    beforeAll(()=>{
         cityRepository = new CityFakeRepository();
         createCityUseCase = new CreateCityUseCase(cityRepository);

    })

    it("should create a city", async ()=>{
       
        const city ={
            name: "Bacural",
            state: "Maranhão"
        }

        const city1 = await createCityUseCase.execute(city);
        console.log(city1); 

        expect(city1).toHaveProperty("id");
        expect(city1).toBeInstanceOf(City);
    })

})