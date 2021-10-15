import { ChangeClientNameController } from './ChangeClientNameController';
import { ChangeClientNameUseCase } from './ChangeClientNameUseCase';
import { ClientRepository } from '../domain/repositories/ClientRepository';

const clientRepository = new ClientRepository();

const changeClientNameUseCase = new ChangeClientNameUseCase(clientRepository);

const changeClientNameController = new ChangeClientNameController(changeClientNameUseCase);

export { changeClientNameController };