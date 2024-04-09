// src/user/infra/user.repository.ts
import { Injectable } from '@nestjs/common';
import { FireBaseRepository } from '@shared/infra/repositories/firebase/firebase.repository';
import { UserEntity } from '@users/domain/entities/user.entity';

@Injectable()
export class UserRepository extends FireBaseRepository<UserEntity> {
  public constructor() {
    super('users');
  }
}
