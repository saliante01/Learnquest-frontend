import { NivelTarjeta } from "./nivel-tarjeta.interface";

export interface AlumnoDashboard {
  nombreAlumno: string;
  ultimaConexion: string;
  avancePorNiveles: NivelTarjeta[];
  maxNivelJugado: string;
}
