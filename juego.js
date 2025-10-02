function jugar() {
    const numeroSecreto = 7; // Puedes cambiar el número si quieres
    const entrada = prompt("Adivina el número secreto (entre 1 y 10):");
    const intento = Number(entrada);

    const resultado = document.getElementById("resultado");

    if (isNaN(intento) || intento < 1 || intento > 10) {
        resultado.textContent = "Por favor, ingresa un número válido entre 1 y 10.";
        resultado.style.color = "orange";
    } else if (intento === numeroSecreto) {
        resultado.textContent = "¡Felicidades! Adivinaste el número secreto.";
        resultado.style.color = "green";
    } else {
        resultado.textContent = "Lo siento, ese no es el número secreto.";
        resultado.style.color = "red";
    }
}
