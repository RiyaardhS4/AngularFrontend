import { Injectable, Output, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { GlobalVariable } from '../global';
import { Router } from '@angular/router';
import { User } from '../_models/user';
import { Globals } from '../_models/globals';




@Injectable()
export class DataService {
  hasNavigated: boolean = false;
  currentUser: User;
  selectedUser: User;
  constructor(private http: HttpClient, private router: Router, private globals: Globals) {

  }

  public AddUser(firstName: string, lastName: string, email: string, userName: string) {
    return this.http.post<any>(GlobalVariable.BASE_API_URL + `user`, { firstName, lastName, email, userName })
      .pipe(map(data => {
        return data;
      }));
  }

  public GetUsers() {
    return this.http.get<any>(GlobalVariable.BASE_API_URL + `user`)
      .pipe(map(data => {
        return data;
      }));
  }
  

  public UpdateUser(id: string, firstName: string, lastName: string, email: string, userName: string) {
    return this.http.put<any>(GlobalVariable.BASE_API_URL + `user`, { id, firstName, lastName, email, userName })
      .pipe(map(data => {
        return data;
      }));
  }
}


