import { Injectable } from '@angular/core';

import { modelDataType } from './users';
// // Model & Interface
//  interface modelDataType {
//   name: string,
//   id: number,
//   indian: boolean,
//   address: any
//  }

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  // Model & Interface
    getModelData() {
      const modelData:modelDataType = {
        name: 'Arshad Siddiqui',
        id: 100,
        indian: true,
        address: "Shiroli, Kolhapur"
      }
      return modelData;
    }
}
