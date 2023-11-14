import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseAllPerson, ResponseCreatePerson } from 'src/app/models/admin/person/person';
import { environment } from 'src/environments/environment';
import { RequestCreatePerson } from '../../models/admin/person/person';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminPersonasService {

  constructor(private httpClient: HttpClient) { }

  getPersons(): Observable<ResponseAllPerson> {
    return this.httpClient.get<ResponseAllPerson>(`${environment.API}/admin/api/persons/all`);
  }

  createPerson(requestCreatePerson: RequestCreatePerson): Observable<ResponseCreatePerson> {
    return this.httpClient.post<ResponseCreatePerson>(`${environment.API}/admin/api/persons/create`, requestCreatePerson);
  }
}
