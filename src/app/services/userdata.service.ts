import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }

  users() {
    return [
      { name: 'Arshad', age: 24, email: 'arshad@test.com'},
      { name: 'Arif', age: 22, email: 'arif@test.com'},
      { name: 'Arbaz', age: 24, email: 'arbaz@test.com'}

    ]
  }
}
