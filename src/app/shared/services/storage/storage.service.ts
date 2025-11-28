import { Injectable } from '@angular/core';
import { StorageKeysEnums } from 'src/app/enums/StorageKeys.enums';

import { Storage } from '@ionic/storage-angular';
import { Mentor } from 'src/app/models/Mentor';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  
  constructor(private storage: Storage) {}

  async init() {
    await this.storage.create()
  }

  async setValue(
    storageKey: StorageKeysEnums,
    objectValue: any
  ): Promise<void> {
    await this.storage.set(storageKey, objectValue);
  }

  async getValue<T>(storageKey: StorageKeysEnums): Promise<T> {

    const storedValue = await this.storage.get(storageKey);
    // return Mentor.tipefy(storedValue);
    return storedValue;
  }

  async cleanItemOnStorage(storageKeys: Array<StorageKeysEnums>) {

    for (const key of storageKeys) {
      await this.storage.remove(key);
    }

  }

  async cleanStorage(): Promise<void> {
    await this.storage.clear();
  }
}
