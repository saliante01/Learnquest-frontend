import { NivelTarjeta } from "./nivel-tarjeta.interface";

export interface AlumnoDashboard {
  curso: string;
  nombreAlumno: string;
  ultimaConexion: string;
  avancePorNiveles: NivelTarjeta[];
  maxNivelJugado: string;
}
