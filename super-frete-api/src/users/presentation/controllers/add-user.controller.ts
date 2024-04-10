import { Controller, Post, Body, Inject } from '@nestjs/common';
import { FullPartial } from '@shared/application/types/partial.types';
import { AddUsersSwaggerDocs } from '@users/application/documentation/swagger/add-users.swagger.docs';
import {
  IAddUsersPayloadV1UsecaseInput,
  IAddUsersUsecaseInput,
} from '@users/application/types/usecases/add-user.type';
import { UserEntity } from '@users/domain/entities/user.entity';
import { IAddUsersUsecase } from '@users/domain/usecases/create-users.usecase.port';
import { ADD_USERS_USECASE } from '@users/infra/module/ioc-tokens/usecases/user.usecase.tokens';

@Controller('users')
export class AddUsersController {
  public constructor(
    @Inject(ADD_USERS_USECASE) private usecase: IAddUsersUsecase,
  ) {}

  @AddUsersSwaggerDocs()
  @Post()
  public async createUser(
    @Body() payload: IAddUsersPayloadV1UsecaseInput,
  ): Promise<FullPartial<UserEntity>> {
    const params: IAddUsersUsecaseInput = { payload };
    return this.usecase.execute(params);
  }
}
