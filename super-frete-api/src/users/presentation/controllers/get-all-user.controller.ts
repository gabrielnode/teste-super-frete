import { Controller, Inject, Get } from '@nestjs/common';
import { FullPartial } from '@shared/application/types/partial.types';

import { UserEntity } from '@users/domain/entities/user.entity';
import { IGetAllUsersUsecase } from '@users/domain/usecases/get-all-users.usecase.interface';
import { GET_ALL_USERS_USECASE } from '@users/infra/module/ioc-tokens/usecases/user.usecase.tokens';

@Controller('users')
export class GetAllUsersController {
  public constructor(
    @Inject(GET_ALL_USERS_USECASE) private usecase: IGetAllUsersUsecase,
  ) {}

  @Get()
  public async getAll(): Promise<FullPartial<UserEntity[]>> {
    return this.usecase.execute();
  }
}
