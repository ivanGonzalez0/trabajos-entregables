import { Patente } from "./patente";

export class Moto {
    private nombre: string;
    private marca: string;
    private modelo: number;
    private patente: Patente;

    constructor(nombre: string, marca: string, modelo: number, patente:Patente) {
        this.nombre= nombre;
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
    }
    // getters
    public getNombre():string{
        return this.nombre;
    }
    getMarca(): string {
        return this.marca;
    }
    getModelo(): number {
        return this.modelo;
    }
    getPatente(): Patente {
        return this.patente;
    }
    // setters
    setMarca(marca: string): void {
        this.marca=marca;
    }
    setModelo(modelo: number): void {
        this.modelo=modelo;
    }
    setPantente(patente: Patente): void {
        this.patente=patente;
    }
}
// instancias
let patente = new Patente(123, "MIM", "Brasil");
const miMoto = new Moto("mt03", "yamaha", 2017, patente);