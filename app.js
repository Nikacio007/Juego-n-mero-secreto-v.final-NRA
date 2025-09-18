let númeroSecreto = 0;
let intentos = 0;
let listaNúmerosSorteados = [];
let númeroMáximo = 10;

function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);  // Selecciona el elemento h1 
    elementoHTML.innerHTML = texto;
    return;  
}

function verificarIntento() {
    let númeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); 
    
    if (númeroDeUsuario === númeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`); // Mensaje al acertar 
        document.getElementById('reiniciar').removeAttribute('disabled');  // Habilita el botón de reiniciar
        } else {
        if (númeroDeUsuario > númeroSecreto) {
            asignarTextoElemento('p','El número es menor');
        } else {
            asignarTextoElemento('p','El número es mayor');
        }
        intentos++;
        limpiarCaja(); 
    }
    return;
}  

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = ''; // Limpia la caja de entrada
}

function generarNúmeroSecreto () {
    let númeroGenerado = Math.floor(Math.random() * númeroMáximo) + 1;  // Si el número generado ya está en la lista, generar otro
    if (listaNúmerosSorteados.length == númeroMáximo) {
        asignarTextoElemento('p','Se han agotado los números disponibles');
    } else {}
        if (listaNúmerosSorteados.includes(númeroGenerado)) {
            return generarNúmeroSecreto();  // Llama a la función de nuevo para generar otro número
    }     else {
            listaNúmerosSorteados.push(númeroGenerado);  // Agrega el número generado a la lista
            return númeroGenerado;
    }

}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto');  // Llama a la función para cambiar el título
    asignarTextoElemento('p',`Indica un número entre 1 y ${númeroMáximo}`);  // Llama a la función para cambiar el párrafo
    númeroSecreto = generarNúmeroSecreto();
    intentos = 1;
    return;
}

function reiniciarJuego() {
    // limpiar caja
    limpiarCaja();
    // Indicar mensaje de intervalo de números
    // generar el número aleatorio
    // inicializar el número de intentos 
    condicionesIniciales();
    // Deshabilitar el botón de reiniciar
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}    
condicionesIniciales();  // Llama a la función para mostrar los mensajes iniciales
