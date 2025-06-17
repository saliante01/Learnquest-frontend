import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlumnoDashboard } from '../performance-student-page/alumno-dashboard.interface';
import { RankingGeneralAlumnos } from '../rendimiento-del-curso-page/ranking-general-alumnos.interface';
import { AlumnoItem } from '../performance-student-page/alumno-item.interface';

@Injectable({
  providedIn: 'root',
})
export class AlumnosService {
  private baseUrl = 'http://localhost:8082/api/alumnos';

  constructor(private http: HttpClient) {}

  getAlumnosPorCurso(cursoId: number): Observable<AlumnoItem[]> {
    return this.http.get<AlumnoItem[]>(`${this.baseUrl}/curso/${cursoId}`);
  }

  getAlumnoDashboard(alumnoId: number): Observable<AlumnoDashboard> {
    return this.http.get<AlumnoDashboard>(`${this.baseUrl}/dashboard/${alumnoId}`);
  }

  getRankingGeneral(cursoId: number): Observable<RankingGeneralAlumnos> {
    return this.http.get<RankingGeneralAlumnos>(`${this.baseUrl}/ranking/curso/${cursoId}`);
  }
}
