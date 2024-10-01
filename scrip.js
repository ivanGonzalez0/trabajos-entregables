"use strict";

let contenedor = document.getElementById("contenedor");

fetch ("https://rickandmortyapi.com/api/character")
.then(resp => resp.json())
.then(data => {
    data.results.forEach(rick =>{
        contenedor.innerHTML += `<h3> nombre: ${rick.name}</h3>`
    })
})









