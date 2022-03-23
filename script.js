// Estado de la APP
let moveCat = false;
let pixelsMove = 10;
let volume = 0.5
let walkForwards = true;

// Variables globales
const img = document.querySelector('img');
img.style.left = '0px';

// Música!
const audio = new Audio('./lambada.mp3');
audio.volume = volume;

// escuchar evento submit de formulario
document.querySelector("form").addEventListener("submit", procesarValoresFormulario);

// evento click al botón Bailar!
// Ejercicio 1

// 1. Asociar el evento "click" al botón "Bailar"
// 2. Actualizar la variable de estado 'moveCat' a true
// 3. Ejecutar el método .play del objeto 'audio'



// evento click al botón Parar!
// Ejercicio 1

// 1. Asociar el evento "click" al botón "Parar"
// 2. Actualizar la variable de estado 'moveCat' a false
// 3. Ejecutar el método .pause del objeto 'audio'


function catWalk() {

    let currentLeft = parseInt(img.style.left);

    if (walkForwards && (currentLeft > (window.innerWidth - img.width))) {
        walkForwards = false;
        img.style.transform = "rotateY(180deg)";
    }
    if (!walkForwards && (currentLeft <= 0)) {
        walkForwards = true;
        img.style.transform = "";

    }

    // Ejercicio 4

    if (walkForwards) {
        img.style.left = (currentLeft + 10) + 'px';
    } else {
        img.style.left = (currentLeft - 10) + 'px';
    }
}


function procesarValoresFormulario(event) {

    // no 'recargues' la página
    event.preventDefault();

    // acceder al input que tiene el name="velocidad"
    const velocidad = document.forms["catConf"].elements["velocidad"].value;
    console.log("nueva velocidad", velocidad);

    // Ejercicio 4

    // Ejercicio 5

}


setInterval(function () {
    // Ejercicio 1: Comprobar una variable de estado aquí y hacer un return inmediatamente sería una buena opción; si dicha variable nos dice que el gato no debe moverse.

    if (!moveCat) {
        return;
    }

    catWalk();
}, 50);