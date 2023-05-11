let holaMundo = "Hola ";
let nombre = window.prompt("Introduce tu nombre para ver el saludo:");
console.log (holaMundo+nombre);
alert(holaMundo+nombre);

let number = window.prompt("Introduce un número para ver si es par o impar:");
if (number % 2 == 0){
    alert("El número " + number + " es par.");
} else {
    alert("El número " + number + " es impar.");
}
