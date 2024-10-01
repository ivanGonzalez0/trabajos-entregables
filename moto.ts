import { Patente } from "./patente";

export class Moto {
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
    setMarca(nombre: string): string {
        nombre = "yamaha mt03";
        return nombre;
    }
    setModelo(numero: number): number {
        numero = 2017;
        return numero;
    }
    setPantente(numero: number, letras: string, nacionalidad: string): void {
        numero = 123;
        letras = "MIM";
        nacionalidad = "Brasil";
    }
}
// instancias
let patente = new Patente(123, "MIM", "Brasil");
const miMoto = new Moto("mt03", "yamaha", 2017, patente);
console.log(miMoto);