import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserHttpResponse, UserModel } from '../types/user.type';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getAllUsers() {
    return this.http.get<UserHttpResponse[]>(`${environment.API}/users`).pipe(
      map((userData) => {
        return userData.map((user) => {
          return {
            ...user,
            fullName: `${user.lastname} ${user.firstname}`,
          } as UserModel;
        });
      })
    );
  }
}
