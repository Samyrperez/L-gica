/* FUNCIONES Y ALCANCES
 * EJERCICIO:
 * - Crea ejemplos de funciones básicas que representen las diferentes
 *   posibilidades del lenguaje:
 *   Sin parámetros ni retorno, con uno o varios parámetros, con retorno...
 * - Comprueba si puedes crear funciones dentro de funciones.
 * - Utiliza algún ejemplo de funciones ya creadas en el lenguaje.
 * - Pon a prueba el concepto de variable LOCAL y GLOBAL.
 * - Debes hacer print por consola del resultado de todos los ejemplos.
 *   (y tener en cuenta que cada lenguaje puede poseer más o menos posibilidades)
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea una función que reciba dos parámetros de tipo cadena de texto y retorne un número.
 * - La función imprime todos los números del 1 al 100. Teniendo en cuenta que:
 *   - Si el número es múltiplo de 3, muestra la cadena de texto del primer parámetro.
 *   - Si el número es múltiplo de 5, muestra la cadena de texto del segundo parámetro.
 *   - Si el número es múltiplo de 3 y de 5, muestra las dos cadenas de texto concatenadas.
 *   - La función retorna el número de veces que se ha impreso el número en lugar de los textos.
 *
 * Presta especial atención a la sintaxis que debes utilizar en cada uno de los casos.
 * Cada lenguaje sigue una convenciones que debes de respetar para que el código se entienda.
 */

// 1. - Crea ejemplos de funciones básicas que representen las diferentes
//    posibilidades del lenguaje:
//    Sin parámetros ni retorno, con uno o varios parámetros, con retorno...
// 1. Función sin parámetros ni retorno
// function saludar(){
//     console.log(`Hola!`)
// }
// saludar();

/*
// 2. Función con un parámetro
function saludarUsuario(nombre){
    console.log("Hola, " + nombre + "!");
}
saludarUsuario("Sam");

// 3. Función con varios parámetros
function sumar(a, b){
    console.log("La suma es: " + (a + b));
}
sumar(5,3);

// 4. Funcion con retorno
function multiplicar(a, b) {
    return a * b
}
let resultado = multiplicar(5, 3);
console.log(`El resultado es: ${resultado}`);

// 5. Función con parámetros por defecto

function saludarConIdioma(nombre = "Usuario", idioma = "es") {
    if (idioma === "es"){
        console.log("Hola, " + nombre)
    } else if (idioma === "en"){
        console.log("Hello, " + nombre)
    } else {
        console.log("Idioma no soportado")
    }
}
saludarConIdioma();
saludarConIdioma("Carlos", "en")

// 6. Función anónima almacenada en una variable

const cuadrado = function(num) {
    return num * num;
}
console.log("El cuadrado de 6 es: " + cuadrado(6));

// 7. Arrow function (Función flecha)
const dividir = (a, b) => a / b;
console.log("La división es: " + dividir(10, 2));

*/

// Esta función imprime los números del 1 al 100, reemplazando los múltiplos de 3 por texto1, los múltiplos de 5 por texto2 y los múltiplos de ambos por su concatenación. Además, devuelve el número de veces que se ha hecho un reemplazo.

function contarReemplazos(multiplo3, multiplo5) {
    let contador = 0;

    for (let i = 1; i <= 100; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            console.log("El número es:", multiplo3 + " y " + multiplo5);
            contador++;
        } else if (i % 3 === 0) {
            console.log("El número es:",multiplo3)
            contador++;
        } else if (i % 5 === 0){
            console.log("El número es:", multiplo5)
            contador++;
        } else {
            console.log(i)
        }
    }
}

let resultado = contarReemplazos("multiplo3", "multiplo5");
console.log( `El listado es: ${resultado}` )