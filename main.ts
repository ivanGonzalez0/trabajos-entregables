import * as rls from 'readline-sync';
import { Automotor } from './automotor';
import { Auto } from './auto';
import { Camion } from './camion';
import { Patente } from './patente';
import { Moto } from './moto'

// lista de vehiculos
let listaDeVehiculos= new Automotor(Auto, Moto, Camion);

let patenteAuto = new Patente(789, "FGH", "Alemania")
let patenteMoto = new Patente(123, "DFG", "Brasil");
let patenteCamion= new Patente(456, "TUM", "Argentina");

let auto= new Auto("vento", "volksewaguen", 2020, patenteAuto);
let moto= new Moto("mt03", "yamaha", 2017, patenteMoto);
let camion= new Camion("113", "scania", 1997, patenteCamion);

// agrega los nuevos vehiculos a la lista 
listaDeVehiculos.nuevoAuto(auto);
listaDeVehiculos.nuevaMoto(moto);
listaDeVehiculos.nuevoCamion(camion);

console.log("estos son los vehiculos que estan en la lista: ");
console.log(listaDeVehiculos.getAuto(), listaDeVehiculos.getMoto(), listaDeVehiculos.getCamion());

// elimina el auto de la lista
console.log("el vehiculo eliminado es: ");
console.log(listaDeVehiculos.deleteVehiculo(auto, moto, camion));

let patenteK: Patente=new Patente(123, "IGV", "Japon");
let nuevaMoto: Moto= new Moto("ninja h2r", "kawasaki", 2020, patenteK);
listaDeVehiculos.nuevaMoto(nuevaMoto);

// instancias / el usuario elige el vehiculo segun el numero que diga 
let vehiculoUsuario= rls.questionInt("ingrese un numero del 1 al 3");

let patenteAutoU = new Patente(687, "IFV", "Alemania")
let patenteMotoU = new Patente(321, "MSM", "Mexico");
let patenteCamionU= new Patente(987, "VCM", "Australia");


let autoUsuario= new Auto("vento", "volksewaguen", 2020, patenteAutoU);
let motoUsuario= new Moto("mt03", "yamaha", 2017, patenteMotoU);
let camionUsuario= new Camion("113", "scania", 1997, patenteCamionU);

if(vehiculoUsuario === 1){
    console.log(autoUsuario);
}else if(vehiculoUsuario === 2){
    console.log(motoUsuario);
}else if (vehiculoUsuario === 3){
    console.log(camionUsuario);
}else {
    console.log("Número no válido. Por favor, elige un número del 1 al 3.");
}

