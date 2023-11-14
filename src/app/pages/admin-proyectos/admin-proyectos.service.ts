import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestCreateProject, ResponseAllProject, ResponseCreateProject } from 'src/app/models/admin/project/project';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminProyectosService {

  constructor(private httpClient: HttpClient) { }

  getProjects(): Observable<ResponseAllProject> {
    return this.httpClient.get<ResponseAllProject>(`${environment.API}/admin/api/projects/all`);
  }

  createProject(requestCreateProject: RequestCreateProject): Observable<ResponseCreateProject> {
    return this.httpClient.post<ResponseCreateProject>(`${environment.API}/admin/api/projects/create`, requestCreateProject);
  }
}
