import { CreateClientController } from './CreateClientController';
import { CreateClientUseCase } from './CreateClientUseCase';
import { ClientRepository} from '../domain/repositories/ClientRepository';
import {CityRepository } from '../../city/domain/repositories/CityRepository';

const clientRepository = new ClientRepository();
const cityRepository = new CityRepository();

const createClientUseCase = new CreateClientUseCase(clientRepository, cityRepository);

const createClientController = new CreateClientController(createClientUseCase);

export { createClientController };