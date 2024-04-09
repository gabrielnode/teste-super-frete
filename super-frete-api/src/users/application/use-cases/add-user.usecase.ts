import { IUserRepository } from '@users/domain/repositories/user.repository.interface';
import { UserEntity } from '@users/domain/entities/user.entity';
import { IAddUsersUsecaseInput } from '@users/application/types/usecases/add-user.type';
import { Inject } from '@nestjs/common';
import { USERS_REPOSITORY_TOKEN } from '@users/infra/module/ioc-tokens/repositories/user.repository.tokens';
import { IAddUsersUsecase } from '@users/domain/usecases/create-users.usecase.port';
import { FullPartial } from '@shared/application/types/partial.types';

export class AddUserUseCase implements IAddUsersUsecase {
  public constructor(
    @Inject(USERS_REPOSITORY_TOKEN) private userRepository: IUserRepository,
  ) {}

  public async execute(
    params: IAddUsersUsecaseInput,
  ): Promise<FullPartial<UserEntity>> {
    const { payload } = params;
    const newUser = new UserEntity(payload).createValidation();
    return this.userRepository.add(newUser);
  }
}
