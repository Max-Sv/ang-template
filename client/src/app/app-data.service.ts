import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
export interface Users {
  id: number;
  name: string;
}
@Injectable({
  providedIn: 'root'
})
export class AppDataService {
  private readonly apiUrl = 'http://127.0.0.1:5000/api/user';
  private readonly _users: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public readonly users$: Observable<any> = this._users.asObservable();
  constructor(private http: HttpClient) {
    this.getUsers().subscribe(item => {
      this._users.next(item);
    });
  }

  getUsers(): Observable<any> {
    return this.http.get<Array<Users>>(this.apiUrl);
  }
  get users() {
    return this._users.getValue();
  }

  getUserById(): void {
    this.http.get('http://127.0.0.1:5000/api/user').subscribe(
      user => {
        console.log('user:', user);
      }
      ,
      error => {
        console.log('errorerro:', error);
      }
    );
  }

}
