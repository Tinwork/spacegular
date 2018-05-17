import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private data: any;

  constructor() { }

  /**
   * Set Store
   */
  setStore(obj: any) {
    const copy = JSON.stringify(obj);

    try {
      this.data = JSON.parse(copy);
    } catch(e) {
      console.log(e);
    }
  }

  /**
   * Get Store
   */
  getStore() {
    return this.data;
  }
}
