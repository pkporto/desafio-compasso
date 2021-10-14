import { GetCitiesByStateController } from './GetCitiesByStateController';
import { GetCitiesByStateUseCase } from './GetCitiesByStateUseCase';
import { CityRepository } from '../domain/repositories/CityRepository';

const cityRepository = new CityRepository();

const getCitiesByStateUseCase = new GetCitiesByStateUseCase(cityRepository);

const getCitiesByStateController = new GetCitiesByStateController(getCitiesByStateUseCase);

export { getCitiesByStateController };