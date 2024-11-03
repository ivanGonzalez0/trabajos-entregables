export abstract class Personaje {
    protected nombre: string;
    protected nivel: number = 1;
    protected puntosDeVida: number;

    constructor(nombre: string, puntosDeVida: number) {
        this.nombre = nombre;
        this.puntosDeVida = puntosDeVida;
    }
    // metodos abstractos 
    public abstract habilidad(): void;
    public abstract atacar(): void;
    public abstract defender(): void;

    // metodos 
    public getNivel():number{
        return this.nivel;
    }
    public getVida():number{
        return this.puntosDeVida;
    }
}