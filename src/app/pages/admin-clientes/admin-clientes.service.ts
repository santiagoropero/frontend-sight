import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseAllClient } from 'src/app/models/admin/client/cliente';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminClientesService {

  constructor(private httpClient: HttpClient) { }

  getClients(): Observable<ResponseAllClient> {
    return this.httpClient.get<ResponseAllClient>(`${environment.API}/admin/api/clients/all`);
  }
}
