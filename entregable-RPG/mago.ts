import { Personaje } from "./personaje";

export class Mago extends Personaje {
    private hechizo: string;

    // metodos 
    public habilidad(): void {
        this.hechizo = this.hechizo;
    }
    public atacar(): void {
        console.log(`${this.nombre} esta atacando al enemigo`);
    }
    public defender(): void {
        console.log(`${this.nombre} esta defendiendo al pueblo de los enemigos y tiene ${this.nivel} de experiencia`);
    }
}