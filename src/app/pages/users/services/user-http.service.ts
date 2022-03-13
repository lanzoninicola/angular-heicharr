import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpRequestOptionsService } from 'src/app/core/services/http-request-options.service';
import { environment } from 'src/environments/environment';
import { UserDTO } from '../types/user.dto.type';

@Injectable({
  providedIn: 'root',
})
export class UserHttpService {
  baseURL = `${environment.API}/users`;
  parentRelations: string[] = [];

  constructor(
    private http: HttpClient,
    private _httpOptions: HttpRequestOptionsService
  ) {}

  findAll(): Observable<UserDTO[]> {
    const url = `${this.baseURL}`;

    return this.http.get<UserDTO[]>(url, this._httpOptions.isBackendRequest());
  }

  findById(id: number): Observable<UserDTO> {
    const url = `${this.baseURL}/${id}`;

    return this.http.get<UserDTO>(url, this._httpOptions.isBackendRequest());
  }

  findByParam(param: string, value: string) {
    const url = `${this.baseURL}?${param}=${value}`;

    return this.http.get<UserDTO[]>(url, this._httpOptions.isBackendRequest());
  }

  save(dto: UserDTO): Observable<UserDTO> {
    return this.http.post<UserDTO>(
      this.baseURL,
      dto,
      this._httpOptions.isFormSubmission()
    );
  }

  update(dto: UserDTO): Observable<UserDTO> {
    return this.http.put<UserDTO>(
      `${this.baseURL}/${dto.id}`,
      dto,
      this._httpOptions.isFormSubmission()
    );
  }

  delete(id: number): Observable<UserDTO> {
    return this.http.put<UserDTO>(
      `${this.baseURL}/${id}`,
      null,
      this._httpOptions.isFormSubmission()
    );
  }
}
