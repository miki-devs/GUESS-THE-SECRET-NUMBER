let numeroSecreto = 0;
let intentos = 0;
let numerosSecretos = [];
let numeroMaximo = 0;

function seleccionarElementoYContenido(elemento, contenido) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = contenido;
}

function generarNumeroAleatorio() {
    numeroMaximo = parseInt(prompt('Ingrese la cantidad máxima de números para adivinar:'));
    numeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1;
    if (numerosSecretos.length == numeroMaximo) {
        seleccionarElementoYContenido('p', `Se han adivinado los ${numeroMaximo} números! 👏`)
    } else {
        if (numerosSecretos.includes(numeroSecreto)) {
            return generarNumeroAleatorio();
        } else {
            numerosSecretos.push(numeroSecreto);
            return numeroSecreto;
        }
    }
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroUsuario === numeroSecreto) {
        seleccionarElementoYContenido('p', `Adivinaste el número! 🎉 Te tomó ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroUsuario > numeroSecreto) {
            seleccionarElementoYContenido('p', 'El número es menor ➖');
        } else {
            seleccionarElementoYContenido('p', 'El número es mayor ➕');
        }
        intentos++;
        limpiarCaja();
    }
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales() {
    numeroSecreto = generarNumeroAleatorio();
    seleccionarElementoYContenido('h1', 'Juego del número secreto');
    seleccionarElementoYContenido('p', `Indica un número del 1 al ${numeroMaximo}:`);
    intentos = 1;
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}

condicionesIniciales();