import { AlumnoPromedio } from "./alumno-promedio.interface";

export interface CursoDashboard {
  idCurso: number,
  nombreCurso: string,
  colorCurso: string;
  alumnosPromedio: AlumnoPromedio[];
}
