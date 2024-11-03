import { Luchador } from "./luchador";

export class LuchadorEvo extends Luchador {

    constructor() {
        super("hulk evolucionado", 10)
        this.nivel = 10;
        this.puntosDeVida = 1000;
    }

    public nivelDeEvolucion(): void {
        console.log(`hulk evoluciono y ahora las caracteristicas son: nivel ${this.nivel}, puntos de vida ${this.puntosDeVida}`);
    }
}