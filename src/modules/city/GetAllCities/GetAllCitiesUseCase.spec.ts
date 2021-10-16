import { CityFakeRepository } from "../domain/repositories/fake/CityFakeRepository";
import { City } from "../infra/typeorm/entities/City";
import { GetAllCitiesUseCase } from "./GetAllCitiesUseCase";

describe("Create city", () =>{
     let cityRepository: CityFakeRepository;
     let createCityUseCase: GetAllCitiesUseCase;

    beforeAll(()=>{
         cityRepository = new CityFakeRepository();
         createCityUseCase = new GetAllCitiesUseCase(cityRepository);

    })

    it("should return all cities", async ()=>{
       
       

        const cities = await createCityUseCase.execute();

        // expect(cities).toMatchObject(City[])
    })

})