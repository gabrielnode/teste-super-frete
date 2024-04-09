import { Test, TestingModule } from '@nestjs/testing';
import { AddUsersController } from '@users/presentation/controllers/add-user.controller';
import { IAddUsersUsecase } from '@users/domain/usecases/create-users.usecase.port';
import { ADD_USERS_USECASE } from '@users/infra/module/ioc-tokens/usecases/user.usecase.tokens';
import { BadRequestException } from '@nestjs/common';

describe('AddUsersController', () => {
  let controller: AddUsersController;
  let usecase: IAddUsersUsecase;

  beforeEach(async () => {
    const usecaseProvider = {
      provide: ADD_USERS_USECASE,
      useValue: {
        execute: jest.fn().mockResolvedValue({
          id: '1',
          name: 'John Doe',
        }),
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [AddUsersController],
      providers: [usecaseProvider],
    }).compile();

    controller = module.get<AddUsersController>(AddUsersController);
    usecase = module.get<IAddUsersUsecase>(ADD_USERS_USECASE);
  });

  it('should call the usecase execute method with correct parameters and return the result', async () => {
    const payload = { name: 'John Doe' };
    const response = await controller.createUser(payload);

    expect(usecase.execute).toHaveBeenCalledWith({ payload });
    expect(response).toEqual({
      id: '1',
      name: 'John Doe',
    });
  });
  it('should call the usecase execute method with incorrect parameters and return throw', async () => {
    const payload = { name: 'John Doe', email: 'dummy_email' };

    jest.spyOn(usecase, 'execute').mockImplementation(() => {
      throw new BadRequestException();
    });

    await expect(controller.createUser(payload)).rejects.toThrow(
      BadRequestException,
    );
    expect(usecase.execute).toHaveBeenCalledWith({ payload });
  });
});
