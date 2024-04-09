import { BadRequestException } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { GetAllUserUseCase } from '@users/application/use-cases/get-all-user.usecase';
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
describe('GetAllUserUseCase', () => {
  let getAllUserUseCase: GetAllUserUseCase;
  let userRepositoryMock: IUserRepository;
  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [],
      providers: [
        GetAllUserUseCase,
        {
          provide: USERS_REPOSITORY_TOKEN,
          useValue: userRepositoryMock,
        },
      ],
    }).compile();

    getAllUserUseCase = moduleRef.get<GetAllUserUseCase>(GetAllUserUseCase);
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
  it('should get all users and return the result', async () => {
    const expectedResult = [
      { id: '1', name: 'dummy_name', increment_id: 1 },
      { id: '2', name: 'dummy_name', increment_id: 2 },
    ];

    userRepositoryMock.getAll = jest
      .fn()
      .mockImplementation(() => Promise.resolve(expectedResult));

    const result = await getAllUserUseCase.execute();

    expect(userRepositoryMock.getAll).toHaveBeenCalled();

    expect(result).toEqual(expectedResult);
  });

  it('should add a new user and return empty array ', async () => {
    const expectedResult = [];

    userRepositoryMock.getAll = jest
      .fn()
      .mockImplementation(() => Promise.resolve([]));

    const result = await getAllUserUseCase.execute();

    expect(userRepositoryMock.getAll).toHaveBeenCalled();

    expect(result).toEqual(expectedResult);
  });

  it('should throw error when validation fails', async () => {
    jest.spyOn(userRepositoryMock, 'getAll').mockImplementation(() => {
      throw new BadRequestException();
    });

    await expect(getAllUserUseCase.execute()).rejects.toThrow(
      BadRequestException,
    );
  });
});
