// src/app.module.ts
import { Module } from '@nestjs/common';
import { UserModule } from '@users/infra/module/user.module';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
