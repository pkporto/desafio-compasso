import { GetClientsByNameController } from './GetClientByNameController';
import { GetClientByNameUseCase } from './GetClientByNameUseCase';
import { ClientRepository } from '../domain/repositories/ClientRepository';

const clientRepository = new ClientRepository();

const getClientByNameUseCase = new GetClientByNameUseCase(clientRepository);

const getClientByNameController = new GetClientsByNameController(getClientByNameUseCase);

export { getClientByNameController };