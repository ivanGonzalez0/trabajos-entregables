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
    setMarca(nombre: string): string {
        nombre = "bmw";
        return nombre;
    }
    setMoldelo(numero: number): number {
        numero = 1986;
        return numero;
    }
    setPatente(numero: number, letras: string, nacionalidad: string): void {
        numero = 789;
        letras = "IGV";
        nacionalidad = "Alemania";
    }
}
// instancias
let patente = new Patente(789, "IGV", "Alemania")
const miAuto = new Auto("m3","bmw", 1986, patente);
console.log(miAuto);