import { CreateCityController } from './CreateCityController';
import { CreateCityUseCase } from './CreateCityUseCase';
import { CityRepository } from '../domain/repositories/CityRepository';

const cityRepository = new CityRepository();

const getCityUseCase = new CreateCityUseCase(cityRepository);

const getCityController = new CreateCityController(getCityUseCase);

export { getCityController };