console.log("Hablar desde la consola");

let variable = "Hablar desde la consola mediante variable";
console.log(variable);

let variableNum = 1231312;
console.log("El numero por consola es: " + variableNum);

let variableObjeto = {
    nombre: "nombre",
    apellido: "apellido", 
    edad: 20
};

console.log("Mostramos el objeto por consola: ");
console.log({variableObjeto});

//Funciones
function mensajeConsola(texto) { console.log(texto);};
mensajeConsola("Mostramos una propiedad del objeto: " + variableObjeto.edad);

let variablePantalla = prompt("Ingrese un dato: ");
mensajeConsola("El dato ingresado es: " + variablePantalla);

alert("Mostrar mensaje por pantalla");

// Pequeña práctica
/* let nombreUsuario = prompt("Ingrese su nombre: ");
let apellidoUsuario = prompt("Ingrese su apellido: ");
let edadUsuario = parseInt(prompt("Ingrese su edad")); */

let usuario = {
    nombre: prompt("Ingrese su nombre: "),
    apellido: prompt("Ingrese su apellido: "),
    edad: parseInt(prompt("Ingrese su edad"))
};

if (usuario.edad < 18 ) {
    alert(usuario.nombre + " " + usuario.apellido + " usted no es adulto! ");
} else {
    alert(usuario.nombre + " " + usuario.apellido + " usted es un adulto!");
};