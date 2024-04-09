import { BadRequestException } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AddUserUseCase } from '@users/application/use-cases/add-user.usecase'; // Atualize o caminho conforme necessário
import { IUserRepository } from '@users/domain/repositories/user.repository.interface';
import { USERS_REPOSITORY_TOKEN } from '@users/infra/module/ioc-tokens/repositories/user.repository.tokens';
jest.mock('@users/domain/entities/user.entity', () => {
  return {
    UserEntity: jest.fn().mockImplementation(() => {
      return {
        createValidation: jest.fn().mockImplementationOnce(() => ({
          name: 'dummy_name',
        })),
      };
    }),
  };
});
describe('AddUserUseCase', () => {
  let addUserUseCase: AddUserUseCase;
  let userRepositoryMock: IUserRepository;
  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [],
      providers: [
        AddUserUseCase,
        {
          provide: USERS_REPOSITORY_TOKEN,
          useValue: userRepositoryMock, // Supondo que você tem um mockUserRepository definido
        },
      ],
    }).compile();

    addUserUseCase = moduleRef.get<AddUserUseCase>(AddUserUseCase);
    userRepositoryMock = moduleRef.get<IUserRepository>(USERS_REPOSITORY_TOKEN);
  });
  userRepositoryMock = {
    add: jest.fn().mockResolvedValue({}),
    getAll: jest.fn().mockResolvedValue({}),
    getById: jest.fn().mockResolvedValue({}),
  };

  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should add a new user and return the result', async () => {
    const payload = { name: 'dummy_name' };
    const expectedResult = { id: '1', ...payload };

    userRepositoryMock.add = jest
      .fn()
      .mockImplementation(() => Promise.resolve(expectedResult));

    const result = await addUserUseCase.execute({ payload });

    expect(userRepositoryMock.add).toHaveBeenCalledWith(payload);

    expect(result).toEqual(expectedResult);
  });

  it('should add a new user and return throw error ', async () => {
    const payload = { name: 'dummy_name', email: 'dummy_email' };
    const expectedResult = { id: '1', ...payload };

    userRepositoryMock.add = jest
      .fn()
      .mockImplementation(() => Promise.resolve(expectedResult));

    const result = await addUserUseCase.execute({ payload });

    expect(userRepositoryMock.add).not.toHaveBeenCalledWith(payload);

    expect(result).toEqual(expectedResult);
  });

  it('should throw error when validation fails', async () => {
    jest.spyOn(userRepositoryMock, 'add').mockImplementation(() => {
      throw new BadRequestException();
    });

    const payload = { name: 'dummy_name', email: 'dummy_email' };

    await expect(addUserUseCase.execute({ payload })).rejects.toThrow(
      BadRequestException,
    );
  });
});
