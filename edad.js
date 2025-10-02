function verificarEdad() {
    let entrada = prompt("Por favor, ingresa tu edad:");
    let edad = Number(entrada); // Convertimos la entrada a número

    const mensajeElemento = document.getElementById("mensaje");

    // Validamos que se haya ingresado un número válido
    if (isNaN(edad) || edad === 0) {
        mensajeElemento.textContent = "Por favor, ingresa una edad válida.";
        mensajeElemento.style.color = "orange";
    } else if (edad >= 18) {
        mensajeElemento.textContent = "Acceso permitido. Eres mayor de edad.";
        mensajeElemento.style.color = "green";
    } else {
        mensajeElemento.textContent = "Acceso denegado. Eres menor de edad.";
        mensajeElemento.style.color = "red";
    }
}
