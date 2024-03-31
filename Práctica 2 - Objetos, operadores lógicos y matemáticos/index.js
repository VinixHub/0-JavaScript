// Operadores
let num1 = parseInt(prompt("Ingrese el numero 1: "));
let num2 = parseInt(prompt("Ingrese el numero 2: "));
alert("Suma: " + (num1 + num2) + " | Resta: " + (num1 - num2) + " | Multiplicación: " + (num1 * num2) + " | División: " + (num1 / num2) + " | Resto: " + (num1 % num2));

// Objetos un toque más complejo
let persona = {
    nombre: "Nombre",
    apellido: "Apellido",
    edad: 20,
    parientes: {
        madre: "madre",
        padre: "padre",
        cantParientes: 2
    },
    trabajo: "nombre trabajo",
    apodo: "apodo"
};

console.log("Observar objeto por consola: ");
console.log({persona});
console.log("Nombre del padre de la persona: " + persona.parientes.padre);

// Que paja me da repasar esto por 23846° vez :C
let dato1 = 10;
let dato2 = "10";
console.log("Estos datos son iguales en valor: " + (dato1 == dato2));
console.log("Pero no son iguales en su tipo de dato: " + (dato1 === dato2));