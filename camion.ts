import { Patente } from "./patente";

export class Camion{
    private nombre:string;
    private marca: string;
    private modelo: number;
    private patente: Patente;

    constructor(nombre: string, marca: string, modelo:number, patente: Patente){
        this.nombre= nombre;
        this.marca = marca;
        this.modelo= modelo;
        this.patente = patente;
    }
    // getters
    getNombre():string{
        return this.nombre;
    }
    getMarca():string{
        return this.marca;
    }
    getModelo():number{
        return this.modelo;
    }
    getPatente():Patente{
        return this.patente;
    }
    // setters
    setMarca(nombre: string):string{
        nombre= "mercedes benz 1114";
        return nombre;
    }
    setModelo(numero: number):number{
        numero = 1980;
        return numero;
    }
    setPatente(numero: number, letras: string, nacionalidad: string):void{
        numero= 456;
        letras= "VHM";
        nacionalidad= "Argentina";
    }
}
// instancias
let patente= new Patente(456, "VHM", "Argentina");
const miCamion =new Camion( "1114", "mercedes benz", 1980, patente);
console.log(miCamion);