import { NivelAprobacion } from "./nivel-aprobacion.interface";

export interface ResumenNivelesAprobacion {
  todosLosNiveles: NivelAprobacion[];
  nivelConMenorAprobacion: NivelAprobacion;
  top3NivelesConMayorAprobacion: NivelAprobacion[];
}
