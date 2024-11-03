import { Personaje } from "./personaje";

export class Luchador extends Personaje {
    private fuerza: number;

    // metodos 
    public habilidad(): void {
        this.fuerza = this.fuerza;
    }
    public atacar(): void {
        console.log(`${this.nombre} esta atacando a los enemigos y tiene ${this.puntosDeVida}/100 de vida`);
    }
    public defender(): void {
        console.log(`${this.nombre} esta defendiendo a los aldeanos`);
    }
}