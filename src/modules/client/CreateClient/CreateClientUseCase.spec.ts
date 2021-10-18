import { CityFakeRepository } from "../../../modules/city/domain/repositories/fake/CityFakeRepository";
import { ClientFakeRepository } from "../domain/repositories/fake/ClientFakeRepository";
import { Client } from "../infra/typeorm/entities/Client";
import { CreateClientUseCase } from "./CreateClientUseCase";

describe("Create client", () =>{
     let clientRepository: ClientFakeRepository;
     let createClientUseCase: CreateClientUseCase;

    beforeAll(()=>{
        const cityRepository = new CityFakeRepository();
         clientRepository = new ClientFakeRepository();
         createClientUseCase = new CreateClientUseCase(clientRepository,cityRepository);

    })

    it("should create a client", async ()=>{
       
        const client ={
            name: "Bacural",
            gender: 'M',
            birth: "1997/01/27",
            city: "Bel"
        }

        const client1 = await createClientUseCase.execute(client);
        console.log(client1); 

        expect(client1).toHaveProperty("id");
        expect(client1).toBeInstanceOf(Client);
    })

})