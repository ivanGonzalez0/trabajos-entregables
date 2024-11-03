import { Mago } from "./mago";
import { Arquero } from "./arquero";
import { Luchador } from "./luchador";
import { LuchadorEvo } from "./luchadorEvolucionado";

let mago= new Mago("Odin", 100);
let arkero= new Arquero("Link", 50);
let luchador= new Luchador("hulk", 30);
let luchadorEvolucionado= new LuchadorEvo();

// muestra por consola los personajes
console.log(mago);
console.log(arkero);
console.log(luchador);
console.log(luchadorEvolucionado)

// muestra por consola las diferentes acciones que hacen los personajes
mago.atacar();
arkero.defender();
luchador.atacar();
luchadorEvolucionado.nivelDeEvolucion();
