import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseAllRol } from 'src/app/models/admin/rol/roles';

@Injectable({
  providedIn: 'root'
})
export class AdminRolesService {

  constructor(private httpClient: HttpClient) { }

  getRoles(): Observable<ResponseAllRol> {
    return this.httpClient.get<ResponseAllRol>("http://localhost:8080/admin/api/roles/all");
  }
}
