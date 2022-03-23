// Estado de la APP
let moveCat = true;
let pixelsMove = 10;
let volume = 0.5
let walkForwards = true;

// Variables globales
const img = document.querySelector('img');
img.style.left = '0px';

// Música!
const audio = document.querySelector('audio');
audio.volume = volume;
audio.play();

// escuchar evento submit de formulario
document.querySelector("form").addEventListener("submit", procesarValoresFormulario);

function catWalk() {

    let currentLeft = parseInt(img.style.left);

    if (walkForwards && (currentLeft > (window.innerWidth - img.width))) {
        walkForwards = false;
    }
    if (!walkForwards && (currentLeft <= 0)) {
        walkForwards = true;
    }

    // Ejercicio 4

    if (walkForwards) {
        img.style.left = (currentLeft + 10) + 'px';
    } else {
        img.style.left = (currentLeft - 10) + 'px';
    }
}


function procesarValoresFormulario(event) {

    event.preventDefault();

    // acceder al primer input
    const velocidad = parseInt(document.forms["catConf"].elements["velocidad"].value);
    console.log("nueva velocidad", velocidad);

    // Ejercicio 4

    // Ejercicio 5

}


setInterval(function () {
    // Ejercicio 1: Comprobar una variable de estado aquí y hacer un return inmediatamente sería una buena opción; si dicha variable nos dice que el gato no debe moverse.
    catWalk();
}, 50);