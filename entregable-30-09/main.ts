import * as rls from 'readline-sync';

import { Automotor } from './automotor';
import { Auto } from './auto';
import { Camion } from './camion';
import { Patente } from './patente';
import { Moto } from './moto'

// lista de vehiculos
let listaDeVehiculos: Automotor = new Automotor();

let autoPatente = new Patente(789, "IGV", "Alemania")
let motoPatente = new Patente(123, "MIM", "Brasil");
let camionPatente = new Patente(456, "VHM", "Argentina");

const miAuto = new Auto("m3", "bmw", 1986, autoPatente);
const miMoto = new Moto("mt03", "yamaha", 2017, motoPatente);
const miCamion = new Camion("1114", "mercedes benz", 1980, camionPatente);

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
let moto = new Moto("ninja h2r", "kawasaki", 2020, patenteMoto);
let camion = new Camion("113", "scania", 1997, patenteCamion);

// instancias / el usuario elige el vehiculo que quiere agregar a la lista segun el numero que elija
let vehiculoUsuario = rls.questionInt("ingrese un numero del 1 al 3 para agregar un nuevo vehiculo a la lista: ");

let autoUsuario = new Auto("vento", "volksewaguen", 2020, patenteAuto);
let motoUsuario = new Moto("ninja h2r", "kawasaki", 2020, patenteMoto);
let camionUsuario = new Camion("113", "scania", 1997, patenteCamion);

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
let modificarVehiculo = rls.questionInt("ingrese un numero del 1 al 6 para modificar un vehiculo: ");

// nuevos vehiculos
let usuarioAuto = new Auto("vento", "volksewaguen", 2020, patenteAuto);
let usuarioMoto = new Moto("ninja h2r", "kawasaki", 2020, patenteMoto);
let usuarioCamion = new Camion("113", "scania", 1997, patenteCamion);

// este if verifica los vehiculos que ya estaban en la lista
if (modificarVehiculo === 1) {
    console.log("elegiste un ", miAuto, "para modificar");
} else if (modificarVehiculo === 2) {
    console.log("elegiste una ", miMoto, "para modificar");
} else if (modificarVehiculo === 3) {
    console.log("elegiste la ", miCamion, "para modificar");
} // este if verifica los nuevos vehiculos agregados a la lista
else if (modificarVehiculo === 4) {
    console.log("elegiste el ", usuarioAuto, "para modificar");
} else if (modificarVehiculo === 5) {
    console.log("elegiste la ", usuarioMoto, "para modificar");
} else if (modificarVehiculo === 6) {
    console.log("elegiste elF ", usuarioCamion, "para modificar");
} else {
    console.log("Numero no valido. por favor elige un numero del 1 al 6.")
}

// elimina el vehiculo de la lista
let eliminarVehiculo = rls.questionInt("ingrese un numero del 1 la 6 para eliminar un Vehiculo: ");

if (modificarVehiculo === 1) {
    console.log("eliminaste un ", miAuto, "de la lista");
} else if (modificarVehiculo === 2) {
    console.log("eliminaste una ", miMoto, "de la lista");
} else if (modificarVehiculo === 3) {
    console.log("eliminaste un ", miCamion, "de la lista");
} else if (eliminarVehiculo === 4) {
    console.log("eliminaste un", usuarioAuto, "de la lista");
} else if (eliminarVehiculo === 5) {
    console.log("eliminaste una", usuarioMoto, "de la lista");
} else if (eliminarVehiculo === 6) {
    console.log("eliminaste un", usuarioCamion, "de la lista");
} else {
    console.log("numero no valido. por favor ingrese un numero del 1 al 6.");
}