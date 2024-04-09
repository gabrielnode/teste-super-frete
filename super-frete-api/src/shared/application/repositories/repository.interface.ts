export interface IRepository<T> {
  add(data: T): Promise<T>;
  getAll(): Promise<T[]>;
  getById(id: string): Promise<T>;
}
