import { CityFakeRepository } from "../domain/repositories/fake/CityFakeRepository";
import { City } from "../infra/typeorm/entities/City";
import { CreateCityUseCase } from "./CreateCityUseCase";

describe("Create city", () =>{

    it("should create a city", async ()=>{
        const cityRepository = new CityFakeRepository();
        const createCityUseCase = new CreateCityUseCase(cityRepository);

        const city ={
            name: "Bacural",
            state: "Maranhão"
        }

        const city1 = await createCityUseCase.execute(city);
        console.log(city1);

        expect(city1).toHaveProperty("id");
    })
})