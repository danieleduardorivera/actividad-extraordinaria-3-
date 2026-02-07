var jugar = "SI";

while (jugar == "SI") {

    var numeroComputadora = Math.floor(Math.random() * 9) + 1;
    var numeroUsuario = parseInt(prompt("Ingresa un número entre 3 y 6"));
    while (numeroUsuario < 3 || numeroUsuario > 6) {
        numeroUsuario = parseInt(prompt("Número inválido. Ingresa un número entre 3 y 6"));
    }
    let eleccion = prompt("Escribe MAYOR, MENOR o IGUAL");

    let mensaje = "";
    if (numeroUsuario > numeroComputadora && eleccion == "MAYOR") {
        mensaje = "Su elección es mayor. ¡Ha adivinado!";
    }
    else if (numeroUsuario < numeroComputadora && eleccion == "MENOR") {
        mensaje = "Su elección es menor. ¡Ha adivinado!";
    }
    else if (numeroUsuario == numeroComputadora && eleccion == "IGUAL") {
        mensaje = "Los números son iguales. ¡Ha adivinado!";
    }
    else {
        mensaje = "No ha adivinado.";
    }
    alert(
        "La computadora eligió " + numeroComputadora +
        ", usted eligió " + numeroUsuario +
        ". " + mensaje
    );
    jugar = prompt("¿Desea jugar otra vez? (SI / NO)");
}
var nombre = prompt("Ingrese su nombre:");
var carnet = prompt("Ingrese su número de carnet:");

alert(
    "Gracias por jugar\n" +
    "Nombre: " + nombre + "\n" +
    "Carnet: " + carnet
);
