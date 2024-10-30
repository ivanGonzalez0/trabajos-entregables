import { Patente } from "./patente";
import { Vehiculo } from "./vehiculo";


export class Moto extends Vehiculo {
    private cilindrada: number= 300;

    constructor(cilindrada: number, nombre:string, marca: string, modelo: number, patente: Patente) {
        super(nombre, marca, modelo, patente)
        this.cilindrada = cilindrada;
    }
    // get
    public getCilindrada():number{
        return this.cilindrada;
    }
    // set
    public setCilindrada(cilindrada: number):void{
        this.cilindrada = cilindrada;
    }
}
