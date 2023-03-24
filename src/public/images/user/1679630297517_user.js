// Clase en vivo 09: JSON y más métodos de arrays
const fs = require('fs');
const path = require('path');
// console.log(fs);

const texto = fs.readFileSync(path.join(__dirname,'/datos/datos.json'), 'utf-8');
const datos = JSON.parse(texto); // convierte el JSON de string a Objetos
// console.log(datos.profes[1].edad);

datos.profes.push({
    nombre: "Facu",
    apellido: "Erbin",
    edad: 20
});

const jsonModificado = JSON.stringify(datos); // convierte de objeto literal a JSON (string)
// fs.writeFileSync(__dirname + '/datos/datos.json', jsonModificado);

// console.log(jsonModificado);

// Métodos de Arrays II
let colores = ["Rojo", "Azul", "Amarillo", "Celeste", "Verde"];

for (let i = 0; i < colores.length; i++) {
    // console.log(colores[i]);
    // console.log(colores);
}

// foreach
colores.forEach((elemento, indice, self) => {
    // console.log(self[indice])
    // console.log(elemento)
    // console.log(self[self.length - 1 - indice]); // recorrer al reves
});

colores.forEach((color) => {
    // console.log(color);
});

// map
// Te devuelve un array del mismo tamaño que el original, modificado aplicando el callback (la función) a cada elemento
// ["Rojo", "Azul", "Amarillo", "Celeste", "Verde"];
const coloresMapeado = colores.map((color) => {
    if (color[0] == "A" || color[0] == "a") {
        return color.toUpperCase();
    }
    return color;
});
// console.log(coloresMapeado);

// filter
// Nos permite filtrar los elementos de un array en base a una función callback
// Retorna un array con los elementos que hagan que la función callback (condición) retorne true;
const coloresConA = colores.filter((color) => {
    return color[0] == "A" || color[0] == "a";
});

// console.log(coloresConA);

// reduce
// Reduce el array a un único valor

function sumatoria (numeros) {
    let resultado = 0;

    for (let i = 0; i < numeros.length; i++) {
        resultado += numeros[i];
    }

    return resultado;
}

let nums = [100,200,35,250,350];
// console.log(sumatoria(nums))

// let suma = nums.reduce((acumulador, elemento) =>{
//     return acumulador + elemento;
// });

// console.log(suma);

let sumaEdad = datos.profes.reduce((acc, profe) => {
    return acc + profe.edad;
}, 0);

// console.log(sumaEdad);
const bicis = {};

let tienda = {
    biciletas: bicis,

    buscarBici: (id) => {
        // retorna la bici con el mismo id
    },
}

