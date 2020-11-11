import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getAllFake(): Observable<any> {
    return this.http.get<Array<User>>(`${environment.apiUrl}/users`);
  }
  getAll(): Observable<any> {
    return this.http.get<Array<User>>(`${environment.apiUrl}/api/user`);
  }

}
