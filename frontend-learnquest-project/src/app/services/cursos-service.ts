import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InfoCurso } from '../rendimiento-del-curso-page/info-curso.interface';
import { CursoDashboard } from '../welcome-courses/curso-dashboard.interface';
import { Estadisticas } from '../estadisticas-generales-page/estadisticas.interface';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  private baseUrl = 'http://localhost:8082/api/cursos';

  constructor(private http: HttpClient) {}

  getCursosDashboard(): Observable<CursoDashboard[]> {
    return this.http.get<CursoDashboard[]>(`${this.baseUrl}/dashboard`);
  }

  getInfoCurso(cursoId: number): Observable<InfoCurso> {
    return this.http.get<InfoCurso>(`${this.baseUrl}/info-curso/${cursoId}`);
  }

  getEstadisticasGenerales(): Observable<Estadisticas> {
    return this.http.get<Estadisticas>(`${this.baseUrl}/estadisticas-generales`);
  }
}
