// 1. Inicializar la variable del contador.
let valorContador = 10;

// 2. Obtener referencias a los elementos del DOM.
const contadorElemento = document.getElementById('contador');
const botonDisminuir = document.getElementById('botonDisminuir');

// 3. Definir la función que disminuye el contador.
function disminuirContador() {
    // Verificar si el contador es mayor que 0 para no mostrar números negativos (opcional).
    if (valorContador > 0) {
        valorContador--; // Disminuye el valor en 1.
       
        // Actualiza el texto en el HTML con el nuevo valor.
        contadorElemento.textContent = valorContador;
    } else {
        // Opcional: Desactivar el botón o mostrar un mensaje cuando llega a 0.
        contadorElemento.textContent = 0;
        botonDisminuir.disabled = true;
        console.log("El contador ha llegado a 0.");
    }
}

// 4. Asignar la función al evento de clic del botón.
botonDisminuir.addEventListener('click', disminuirContador);