import { GetClientsByIdController } from './GetClientByIdController';
import { GetClientByIdUseCase } from './GetClientByIdUseCase';
import { ClientRepository } from '../domain/repositories/ClientRepository';

const clientRepository = new ClientRepository();

const getClientByIdUseCase = new GetClientByIdUseCase(clientRepository);

const getClientByIdController = new GetClientsByIdController(getClientByIdUseCase);

export { getClientByIdController };