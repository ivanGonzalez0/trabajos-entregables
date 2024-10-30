import { Patente } from "./patente";
import { Vehiculo } from "./vehiculo";

export class Camion extends Vehiculo{
    private ejes: string="dos ejes de 18 a 20 toneladas";

    constructor(ejes: string, nombre:string, marca:string, modelo: number, patente: Patente){
        super(nombre, marca, modelo, patente)
        this.ejes=ejes;
    }
    // get
    public getEjeCamion():string{
        return this.ejes;
    }
    // set
    public setEjeCamion(eje: string):void{
        this.ejes=eje;
    }
}
