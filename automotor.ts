import { Auto } from "./auto";
import { Moto } from "./moto";
import { Camion } from "./camion";

export class Automotor {
    private arrAuto: Auto[]=[];
    private arrMoto: Moto[]=[];
    private arrCamion: Camion[]=[];

    constructor(auto: Auto[], moto: Moto[], camion: Camion[]){
        this.arrAuto= auto;
        this.arrMoto= moto;
        this.arrCamion= camion;
    }
    // agrega nuevos vehiculos
    nuevoAuto(arrAuto: Auto): void{
        this.arrAuto.push(arrAuto);
    }
    nuevaMoto(arrMoto: Moto):void{
        this.arrMoto.push(arrMoto);
    }
    nuevoCamion(arrCamion: Camion):void{
        this.arrCamion.push(arrCamion);
    }

    // getters
    public getAuto():Auto[]{
        return this.arrAuto;
    }
    public getMoto():Moto[]{
        return this.arrMoto;
    }
    public getCamion():Camion[]{
        return this.arrCamion;
    }

    // elimina los vehiculos
    deleteVehiculo(deleteAuto: Auto, deleteMoto: Moto, deleteCamion: Camion){
        
        //verifica si el auto estan en el arreglo 
        if(deleteAuto !== undefined && this.arrAuto.includes(deleteAuto)){
            const auto: number= this.arrAuto.indexOf(deleteAuto);

            // elimina el auto
            if(auto !== -1){
                this.arrAuto.splice(auto, 1);
            }
        }//verifica si la moto esta en el arreglo
        if(deleteMoto !== undefined && this.arrMoto.includes(deleteMoto)){
            const moto: number= this.arrMoto.indexOf(deleteMoto);
            
            // elimina la moto 
            if(moto !== -1){
                this.arrAuto.splice(moto, 1);
            }
        } //verifica si el camion esta en el arreglo
        if(deleteCamion !== undefined && this.arrCamion.includes(deleteCamion)){
            const camion: number= this.arrCamion.indexOf(deleteCamion);
            
            // elimina el camion
            if(camion !== -1){
                this.arrAuto.splice(camion, 1);
            }
        }
    }
}
