import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseAllRol, ResponseCreateRol } from 'src/app/models/admin/roles/roles';
import { RequestCreateRol } from '../../models/admin/roles/roles';

@Injectable({
  providedIn: 'root'
})
export class AdminRolesService {

  constructor(private httpClient: HttpClient) { }

  getRoles(): Observable<ResponseAllRol> {
    return this.httpClient.get<ResponseAllRol>("http://localhost:8080/admin/api/roles/all");
  }

  createRol(requestCreateRol: RequestCreateRol): Observable<ResponseCreateRol> {
    return this.httpClient.post<ResponseCreateRol>("http://localhost:8080/admin/api/roles/create", requestCreateRol);
  }
}
