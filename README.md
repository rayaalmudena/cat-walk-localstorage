# El Gato de LocalStorage

Tenemos un gato muy bailón que le gusta saber de las preferencias del usuario para saber cómo y cuanto debe bailar.

## Ejercicio 1 - ¡Para gato!

Actualmente el gato siempre se mueve. Nunca para. Asocia dos eventos **click** a los botones de bailar y parar; para que el gato baile o pare. Piensa en qué variable de estado debes actualizar; y fíjate en las notas en **script.js** para comprobar dicha variable de estado.

Ademas, haremos que la música solo suene cuando el gato baile. Modifica las variables de estado inicial para que al cargar la App; el gato esté parado. La música solo debe sonar mientras el gato baila.; y parar si el gato para.

## Ejercicio 2

Utiliza localStorage para guardar el estado de movimiento del gato. Crea una propiedad localStorage.moveCat ; que valga true o false por ejemplo; y en función de dicho valor.

Debes actulizar la propiedad localStorage.mover en el momento que hagas clic en alguno de los botones. Luego, al cargar de nuevo el script, carga el valor localStorage.moveCat en la variable de estado "moveCat". NO elimines la variable de estado "moveCat".

**BONUS**: Puedes pensar en algun detalle visual para que se note cual es el estado que está activo en este momento, si "Bailar" o "Parar". Por ejemplo, puedes mostrar como deshabilitado el botón que esté acutalmente activo, para dar la sensación de que no puede pulsarlo de nuevo.

## Ejercicio 3 - ¡Más rápido!

Límita el valor que podemos poner en "Velocidad gatuna". Mínimo 1 píxel, y máximo, vamos a permitir que el gato se mueva 50 píxeles.

Cada vez que hacemos click en el botón "Guardar!" del formulario, se ejecuta la función **procesarValoresFormulario**.

Busca el lugar del código adecuado para indicar que el gato debe moverse el número de píxeles que ha puesto el usuario en el control (actualmente siempre se mueve 10 píxeles, pongamos lo que pongamos en velocidad gatuna). PISTA: actualmente la variable de estado **pixelsMove** NO se está usando adecuadamente....

## Ejercicio 4

Similar al ejercicio 2, guarda el valor en el localStorage. Decide cómo se va a llamar la propiedad del localStorage para guardar el número de píxeles que se mueve el gato; y donde debes actualizar y cuándo debes cargarla

## Ejercicio 5 - Controla el volumen de la música

Implementa la funcionalidad que permita modificar el volumen del control **audio**. Debes actualizar la propiedad audio.volume con el valor del slider del control "Volumen Musica".

De nuevo, guarda dicho valor en el localStorage cuando se actualice en el formulario; y cárgalo al iniciar la aplicación.

## BONUS

Haz que la velocidad gatuna y el volumen de la música cambien **immediatamente** al cambiar el valor del control. Echa un vistazo al evento **input** o **change**.
