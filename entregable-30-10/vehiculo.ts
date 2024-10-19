import { Patente } from "./patente";

export class Vehiculo{
    protected nombre: string;
    protected marca: string;
    protected modelo: number;
    protected patente: Patente

    constructor(nombre:string, marca: string, modelo:number, patente: Patente){
        this.nombre= nombre;
        this.marca=marca;
        this.modelo=modelo;
        this.patente=patente;
    }
    // getters
    public getMarca():string{
        return this.marca;
    }
    public getModelo():number{
        return this.modelo;
    }
    public getPatente():Patente{
        return this.patente;
    }
    // setters 
    public setMarca(marca: string):void{
        this.marca=marca;
    }
    public setModelo(modelo:number):void{
        this.modelo=modelo;
    }
    public setPatente(patente:Patente):void{
        this.patente=patente;
    }
}