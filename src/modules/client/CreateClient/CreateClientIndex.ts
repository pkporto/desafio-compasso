import { CreateClientController } from './CreateClientController';
import { CreateClientUseCase } from './CreateClientUseCase';
import { ClientRepository} from '../domain/repositories/ClientRepository';

const clientRepository = new ClientRepository();

const createClientUseCase = new CreateClientUseCase(clientRepository);

const createClientController = new CreateClientController(createClientUseCase);

export { createClientController };