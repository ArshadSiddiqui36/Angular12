import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {

  constructor(private http:HttpClient) { }

  api_url:string = "http://ipwhois.app/json/8.8.4.4";
  usersApi() {
    return this.http.get(this.api_url);
  }
}
