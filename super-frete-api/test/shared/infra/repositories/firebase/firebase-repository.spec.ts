import { FireBaseRepository } from '@shared/infra/repositories/firebase/firebase.repository';
import * as firebase from 'firebase-admin';

jest.mock('firebase-admin', () => ({
  firestore: jest.fn().mockReturnValue({
    collection: jest.fn(() => ({
      add: jest.fn(() => Promise.resolve({ id: 'someId' })),
      doc: jest.fn((docId) => ({
        get: jest.fn(() =>
          Promise.resolve({
            exists: true,
            id: docId,
            data: () => ({ name: 'Test Name' }),
          }),
        ),
      })),
      get: jest.fn(() =>
        Promise.resolve({
          docs: [
            {
              exists: true,
              id: 'someId',
              data: (): any => ({ name: 'Test Name' }),
            },
          ],
        }),
      ),
    })),
  }),
}));

describe('FireBaseRepository', () => {
  let repository: FireBaseRepository<any>;

  beforeEach(() => {
    repository = new FireBaseRepository<any>('testCollection');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should add an item and return it', async () => {
    const item = { name: 'Test Name' };
    const result = await repository.add(item);

    expect(result).toEqual({ id: 'someId', ...item });
  });

  it('should get all items', async () => {
    const results = await repository.getAll<any>();
    expect(results.length).toBe(1);
    expect(results[0].id).toBe('someId');
  });

  it('should get an item by id', async () => {
    const result = await repository.getById<any>('someId');

    expect(result).toEqual({ id: 'someId', name: 'Test Name' });
  });

  it('should return null if an item does not exist', async () => {
    (firebase.firestore().collection as jest.Mocked<any>).mockReturnValueOnce({
      doc: jest.fn((docId) => ({
        get: jest.fn(() =>
          Promise.resolve({
            exists: false,
            id: docId,
            data: () => null,
          }),
        ),
      })),
    });
    const result = await repository.getById<any>('nonExistingId');
    expect(result).toBeNull();
  });
});
