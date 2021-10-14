import { GetAllCitiesController } from './GetAllCitiesController';
import { GetAllCitiesUseCase } from './GetAllCitiesUseCase';
import { CityRepository } from '../domain/repositories/CityRepository';

const cityRepository = new CityRepository();

const getAllCitiesUseCase = new GetAllCitiesUseCase(cityRepository);

const getAllCitiesController = new GetAllCitiesController(getAllCitiesUseCase);

export { getAllCitiesController };