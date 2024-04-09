import { Module } from '@nestjs/common';
import { AddUsersController } from '@users/presentation/controllers/add-user.controller';
import { UserRepository } from '@users/infra/repositories/user.repository';
import { AddUserUseCase } from '@users/application/use-cases/add-user.usecase';
import { USERS_REPOSITORY_TOKEN } from './ioc-tokens/repositories/user.repository.tokens';
import {
  ADD_USERS_USECASE,
  GET_ALL_USERS_USECASE,
} from './ioc-tokens/usecases/user.usecase.tokens';
import { GetAllUserUseCase } from '@users/application/use-cases/get-all-user.usecase';
import { GetAllUsersController } from '@users/presentation/controllers/get-all-user.controller';

@Module({
  controllers: [AddUsersController, GetAllUsersController],
  providers: [
    {
      provide: ADD_USERS_USECASE,
      useClass: AddUserUseCase,
    },
    {
      provide: GET_ALL_USERS_USECASE,
      useClass: GetAllUserUseCase,
    },
    {
      provide: USERS_REPOSITORY_TOKEN,
      useClass: UserRepository,
    },
  ],
})
export class UserModule {}
