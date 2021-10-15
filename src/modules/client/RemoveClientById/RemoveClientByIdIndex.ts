import { RemoveClientsByIdController } from './RemoveClientByIdController';
import { RemoveClientByIdUseCase } from './RemoveClientByIdUseCase';
import { ClientRepository } from '../domain/repositories/ClientRepository';

const clientRepository = new ClientRepository();

const removeClientByIdUseCase = new RemoveClientByIdUseCase(clientRepository);

const removeClientByIdController = new RemoveClientsByIdController(removeClientByIdUseCase);

export { removeClientByIdController };