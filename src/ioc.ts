import { Container } from 'inversify';
import { IProvider, NameProvider } from './providers';

export const container = new Container();
container.bind<IProvider<string>>('nameProvider').to(NameProvider);