import { IRepository } from '@shared/application/repositories/repository.interface';
import { UserEntity } from '../entities/user.entity';

export interface IUserRepository extends IRepository<UserEntity> {}
