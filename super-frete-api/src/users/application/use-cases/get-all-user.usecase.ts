import { IUserRepository } from '@users/domain/repositories/user.repository.interface';
import { UserEntity } from '@users/domain/entities/user.entity';
import { Inject } from '@nestjs/common';
import { USERS_REPOSITORY_TOKEN } from '@users/infra/module/ioc-tokens/repositories/user.repository.tokens';
import { FullPartial } from '@shared/application/types/partial.types';
import { IGetAllUsersUsecase } from '@users/domain/usecases/get-all-users.usecase.interface';

export class GetAllUserUseCase implements IGetAllUsersUsecase {
  public constructor(
    @Inject(USERS_REPOSITORY_TOKEN) private userRepository: IUserRepository,
  ) {}

  public async execute(): Promise<FullPartial<UserEntity[]>> {
    const users = await this.userRepository.getAll();
    return users.sort((a, b) => b.increment_id - a.increment_id);
  }
}
