import { Personaje } from "./personaje";

export class Arquero extends Personaje {
    private punteria: string;

    // metodos
    public habilidad(): void {
        this.punteria = this.punteria;
    }
    public  atacar(): void {
        console.log(`${this.nombre} esta atacando al pueblo de los enemigos con sus tropas`);
    }
    public defender(): void {
        console.log(`${this.nombre} esta defendiendo su aldea de los enemigos y tiene ${this.puntosDeVida}/100 de vida`);
    }
}