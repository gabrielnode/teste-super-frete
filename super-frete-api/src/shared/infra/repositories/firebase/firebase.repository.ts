// src/shared/infra/base.repository.ts
import { IRepository } from '@shared/application/repositories/repository.interface';
import * as firebase from 'firebase-admin';

export class FireBaseRepository<T> implements IRepository<T> {
  public constructor(private collection: string) {}

  public async add(item: T): Promise<T> {
    const docRef = await firebase
      .firestore()
      .collection(this.collection)
      .add({ ...item });
    return { id: docRef.id, ...item };
  }

  public async getAll<T>(): Promise<T[]> {
    const snapshot = await firebase
      .firestore()
      .collection(this.collection)
      .get();
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as T[];
  }

  public async getById<T>(id: string): Promise<T | null> {
    const doc = await firebase
      .firestore()
      .collection(this.collection)
      .doc(id)
      .get();
    if (!doc.exists) {
      return null;
    }
    return { id: doc.id, ...doc.data() } as T;
  }
}
