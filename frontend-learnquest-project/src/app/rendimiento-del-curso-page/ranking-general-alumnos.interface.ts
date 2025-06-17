import { RankingAlumno } from "./ranking-alumno.interface";

export interface RankingGeneralAlumnos {
  mejores5: RankingAlumno[];
  peores5: RankingAlumno[];
}
