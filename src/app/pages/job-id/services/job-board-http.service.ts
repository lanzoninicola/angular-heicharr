import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpRequestOptionsService } from 'src/app/core/services/http-request-options.service';
import { HttpService } from 'src/app/core/types/http-service.type';
import { environment } from 'src/environments/environment';
import { JobIdDTO } from '../../job-id/types/jobid.dto.type';

@Injectable({
  providedIn: 'root',
})
export class JobBoardHttpService implements HttpService {
  baseURL = `${environment.API}/jobs`;
  parentRelations: string[] = [
    'requests',
    'boardtemplates',
    'jobroles',
    'branches',
  ];

  constructor(
    private http: HttpClient,
    private _httpOptions: HttpRequestOptionsService
  ) {}

  findAll(
    options = {
      withRelations: true,
    }
  ): Observable<JobIdDTO[]> {
    const url = `${this.baseURL}`;

    return this.http.get<JobIdDTO[]>(
      options.withRelations ? this._getURLwithRelations(url) : url,
      this._httpOptions.isBackendRequest()
    );
  }

  findById(
    id: number,
    options = {
      withRelations: true,
    }
  ): Observable<JobIdDTO> {
    const url = `${this.baseURL}/${id}`;

    return this.http.get<JobIdDTO>(
      options.withRelations ? this._getURLwithRelations(url) : url,
      this._httpOptions.isBackendRequest()
    );
  }

  save(dto: JobIdDTO): Observable<JobIdDTO> {
    return this.http.post<JobIdDTO>(
      this.baseURL,
      dto,
      this._httpOptions.isFormSubmission()
    );
  }

  update(dto: JobIdDTO): Observable<JobIdDTO> {
    return this.http.put<JobIdDTO>(
      `${this.baseURL}/${dto.id}`,
      dto,
      this._httpOptions.isFormSubmission()
    );
  }

  /**
   *
   * @description
   * Returns the full URL with the query parameters of the relations to be expanded
   *
   */
  private _getURLwithRelations(baseURL: string) {
    return `${baseURL}?${this._relationsQueryString()}`;
  }

  /**
   * @description
   * Returns a string of the query parameters of the relations to be expanded
   */
  private _relationsQueryString() {
    let fullUrlQuery = '';

    this.parentRelations.forEach((model) => {
      fullUrlQuery = fullUrlQuery + `&_expand=${model}`;
    });

    return fullUrlQuery;
  }
}
