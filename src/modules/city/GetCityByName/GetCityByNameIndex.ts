import { GetCityByNameController } from './GetCityByNameController';
import { GetCityByNameUseCase } from './GetCityByNameUseCase';
import { CityRepository } from '../domain/repositories/CityRepository';

const cityRepository = new CityRepository();

const getCityByNameUseCase = new GetCityByNameUseCase(cityRepository);

const getCityByNameController = new GetCityByNameController(getCityByNameUseCase);

export { getCityByNameController };