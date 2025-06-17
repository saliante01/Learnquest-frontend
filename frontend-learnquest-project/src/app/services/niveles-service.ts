import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResumenNivelesAprobacion } from '../nivel-performance/resumen-niveles-aprobacion.interface';

@Injectable({
  providedIn: 'root',
})
export class NivelesService {
  private baseUrl = 'http://localhost:8082/api/niveles';

  constructor(private http: HttpClient) {}

  getResumenesNiveles(cursoId: number): Observable<ResumenNivelesAprobacion> {
    return this.http.get<ResumenNivelesAprobacion>(`${this.baseUrl}/resumen-niveles/curso/${cursoId}`);
  }
}
