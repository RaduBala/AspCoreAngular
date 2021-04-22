import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserService
{
    token: any; 

    constructor(private http: HttpClient)
    {
        this.http = http;
    }

    public login(user)
    {
      return this.http.post('api/account/login', user)
    }
}
