// Selectores de etiquetas
console.log("Ahora se mostrará el DIV entero: ");
const elementoUno = document.querySelector("#domNodos");
console.log(elementoUno);

console.log("Ahora se mostrará el DIV en base al ID: ");
const elementoDos = document.getElementById("domNodos");
console.log(elementoDos);

console.log("Ahora se mostrará el H1 en base al CLASS: ");
const elementoTres = document.getElementsByClassName("nodoh1");
console.log(elementoTres);

console.log("Ahora se mostrarán los 'p' en base al nombre de la etiqueta: ");
const elementoCuatro = document.getElementsByTagName("p");
console.log(elementoCuatro);

elementoUno.createElement("")