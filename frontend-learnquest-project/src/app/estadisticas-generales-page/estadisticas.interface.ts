import { CursoPromedio } from "./curso-promedio.interface";

export interface Estadisticas {
  todosLosCursos: CursoPromedio[];
  top3Cursos: CursoPromedio[];
}
