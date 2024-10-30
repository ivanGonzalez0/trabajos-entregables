import { Patente } from './patente';

export class Auto {
    private nombre: string;
    private marca: string;
    private modelo: number;
    private patente: Patente;

    constructor(nombre: string, marca: string, modelo: number, patente: Patente) {
        this.nombre= nombre;
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
    }
    // GETTERS
    public getNombre():string{
        return this.nombre;
    }
    public getMarca(): string {
        return this.marca;
    }
    public getModelo(): number {
        return this.modelo;
    }
    public getPatente(): Patente {
        return this.patente;
    }
    // SETTERS
    setMarca(nombre: string): void {
        this.nombre= nombre;
    }
    setMoldelo(modelo: number): void {
        this.modelo= modelo;
    }
    setPatente(patente: Patente): void {
        this.patente= patente;
    }
}