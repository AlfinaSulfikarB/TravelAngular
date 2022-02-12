import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Login } from './login';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httClient:HttpClient) {}

  public login(login:Login){

    return this.httClient.post(environment.apiUrl+'login/token',login);

  }

}
