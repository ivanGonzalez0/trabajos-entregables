import * as rls from 'readline-sync';

import { Registro } from './registro';
import { Vehiculo } from './vehiculo';
import { Auto } from './auto';
import { Patente } from './patente';
import { Moto } from './moto';
import { Camion } from './camion';

// lista de vehiculos
let listaDeVehiculos: Registro = new Registro();

let autoPatente = new Patente(789, "IGV", "Alemania")
let motoPatente = new Patente(123, "MIM", "Brasil");
let camionPatente = new Patente(456, "VHM", "Argentina");

const miAuto = new Auto("m3", "bmw", 1986, autoPatente);
const miMoto = new Moto(300, "mt03", "yamaha", 2017, motoPatente);
const miCamion = new Camion("dos ejes de 18 toneladas", "1114", "mercedes benz", 1980, camionPatente);

listaDeVehiculos.nuevoAuto(miAuto);
listaDeVehiculos.nuevaMoto(miMoto);
listaDeVehiculos.nuevoCamion(miCamion);

console.log("estos son los vehiculos que estan en la lista: ");
console.log(listaDeVehiculos.getAuto(), listaDeVehiculos.getMoto(), listaDeVehiculos.getCamion());

// agrega los nuevos vehiculos a la lista 
let patenteAuto = new Patente(543, "FGH", "Alemania");
let patenteMoto = new Patente(365, "IGV", "Japon");
let patenteCamion = new Patente(234, "TUM", "Argentina");

let auto = new Auto("vento", "volksewaguen", 2020, patenteAuto);
let moto = new Vehiculo("ninja h2r", "kawasaki", 2020, patenteMoto);
let camion = new Vehiculo("113", "scania", 1997, patenteCamion);

// instancias / el usuario elige el vehiculo que quiere agregar a la lista segun el numero que elija
let vehiculoUsuario = rls.questionInt("ingrese un numero del 1 al 3 para agregar un nuevo vehiculo a la lista: ");

let autoUsuario = new Auto("vento", "volksewaguen", 2020, patenteAuto);
let motoUsuario = new Vehiculo("ninja h2r", "kawasaki", 2020, patenteMoto);
let camionUsuario = new Vehiculo("113", "scania", 1997, patenteCamion);

if (vehiculoUsuario === 1) {
    console.log("agregaste un", autoUsuario, "a la lista");
} else if (vehiculoUsuario === 2) {
    console.log("agregaste una", motoUsuario, "a la lista");
} else if (vehiculoUsuario === 3) {
    console.log("agregaste un", camionUsuario, "a la lista");
} else {
    console.log("Número no válido. Por favor, elige un número del 1 al 3.");
}

// modificar el vehiculo
let modificarVehiculo = rls.questionInt("ingrese un numero del 1 al 3 para modificar un vehiculo: ");

// nuevos vehiculos
let usuarioAuto = new Auto("vento", "volksewaguen", 2020, patenteAuto);
let usuarioMoto = new Vehiculo("ninja h2r", "kawasaki", 2020, patenteMoto);
let usuarioCamion = new Vehiculo("113", "scania", 1997, patenteCamion);

 // este if verifica los nuevos vehiculos agregados a la lista
if (modificarVehiculo === 1) {
    console.log("elegiste el ", usuarioAuto, "para modificar");
} else if (modificarVehiculo === 2) {
    console.log("elegiste la ", usuarioMoto, "para modificar");
} else if (modificarVehiculo === 3) {
    console.log("elegiste elF ", usuarioCamion, "para modificar");
} else {
    console.log("Numero no valido. por favor elige un numero del 1 al 3.")
}

// elimina el vehiculo de la lista
let eliminarVehiculo = rls.questionInt("ingrese un numero del 1 la 3 para eliminar un Vehiculo: ");

if (eliminarVehiculo === 1) {
    console.log("eliminaste un", usuarioAuto, "de la lista");
} else if (eliminarVehiculo === 2) {
    console.log("eliminaste una", usuarioMoto, "de la lista");
} else if (eliminarVehiculo === 3) {
    console.log("eliminaste un", usuarioCamion, "de la lista");
} else {
    console.log("Numero no valido. por favor elige un numero del 1 al 3.")
}