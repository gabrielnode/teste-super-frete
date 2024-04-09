import { Test, TestingModule } from '@nestjs/testing';
import { GET_ALL_USERS_USECASE } from '@users/infra/module/ioc-tokens/usecases/user.usecase.tokens';
import { BadRequestException } from '@nestjs/common';
import { GetAllUsersController } from '@users/presentation/controllers/get-all-user.controller';
import { IGetAllUsersUsecase } from '@users/domain/usecases/get-all-users.usecase.interface';

describe('GetAllUsersController', () => {
  let controller: GetAllUsersController;
  let usecase: IGetAllUsersUsecase;

  beforeEach(async () => {
    const usecaseProvider = {
      provide: GET_ALL_USERS_USECASE,
      useValue: {
        execute: jest.fn().mockResolvedValue({
          id: '1',
          name: 'John Doe',
        }),
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetAllUsersController],
      providers: [usecaseProvider],
    }).compile();

    controller = module.get<GetAllUsersController>(GetAllUsersController);
    usecase = module.get<IGetAllUsersUsecase>(GET_ALL_USERS_USECASE);
  });

  it('should call the getAll execute method with correct parameters and return the result', async () => {
    const response = await controller.getAll();

    expect(usecase.execute).toHaveBeenCalled();
    expect(response).toEqual({
      id: '1',
      name: 'John Doe',
    });
  });
  it('should call the usecase execute method with incorrect parameters and return throw', async () => {
    jest.spyOn(usecase, 'execute').mockImplementation(() => {
      throw new BadRequestException();
    });

    await expect(controller.getAll()).rejects.toThrow(BadRequestException);
    expect(usecase.execute).toHaveBeenCalled();
  });
});
