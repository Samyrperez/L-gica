// Ejemplos de estructuras en JS

/*
* EJERCICIO:
* - Muestra ejemplos de creación de todas las estructuras soportadas por defecto
*   en tu lenguaje.
* - Utiliza operaciones de inserción, borrado, actualización y ordenación.
*


// 1. Array

let array = [1, 2, 3, 4];
array.push(5); // Inserción
console.log(array);
array.splice(2, 1); // Borrado (posicion, cantidad)
console.log(array);
array[1] = 10; // Actualización [posicion]
console.log(array);
// .sort() ordena elementos como cadenas por defecto.
array.sort((a,b) => a - b); // Ordenación menor a mayor
console.log(array)
array.sort((a,b) => b - a); // Ordenación mayor a menor
console.log(array)
// Función de comparación (a, b) => a - b
// Para ordenar números correctamente, usamos una función de comparación.

// 2. Objetos
let objeto = {
    nombre: "Samyr",
    edad: 31
}
objeto.telefono = 3006018709; // Inserción
console.log(objeto);
delete objeto.edad; // Eliminar elemento
console.log(objeto)
objeto.nombre ="Andres" // Actualizar
console.log(objeto)


// Sets
let conjunto = new Set([3, 30, 5, 10]);
console.log(conjunto);
conjunto.add(20);
console.log(conjunto); // inserción
conjunto.delete(3);
console.log(conjunto); //Borrado
conjunto = new Set([...conjunto].sort((a, b) => a - b)); //Ordenación de menor a mayor
console.log(conjunto);
conjunto = new Set([...conjunto].sort((a, b) => b - a)); //Ordenación de mayor a menor

// Maps
let mapa = new Map();
mapa.set("Clave_1", "Clave_2"); // Inserción
console.log(mapa);
mapa.delete("Clave_2"); // Borrado
console.log(mapa)
mapa.set("Clave_5"); // Actualización
console.log(mapa)
mapa.has(Calve_1);  .has(clave) verifica si una clave existe en el mapa.

*/

/*
* DIFICULTAD EXTRA (opcional):
* Crea una agenda de contactos por terminal.
* - Debes implementar funcionalidades de búsqueda, inserción, actualización
*   y eliminación de contactos.
* - Cada contacto debe tener un nombre y un número de teléfono.
* - El programa solicita en primer lugar cuál es la operación que se quiere realizar,
*   y a continuación los datos necesarios para llevarla a cabo.
* - El programa no puede dejar introducir números de teléfono no númericos y con más
*   de 11 dígitos (o el número de dígitos que quieras).
* - También se debe proponer una operación de finalización del programa.
*/

// Agenda de contactos en terminal

class Agenda {
    constructor() {
        this.contactos = new Map();
    }

    agregarContacto(nombre, telefono) {
        if(!/^[0-9]{1,11}$/.test(telefono)) {
            console.log("Número de telefono no válido. ")
        }
        this.contactos.set(nombre, telefono);
        console.log("Contacto agregado") // Utilizo .set para actualizar el numero de telefono
    }

    eliminarContacto(nombre) {
        if (this.contactos.delete(nombre)) {
            console.log("Contacto eliminado.")
        } else {
            console.log("COntacto no encontrado")
        }
    }
    actualizarContacto(nombre, telefono) {
        if(!this.contactos.has(nombre)) {
            console.log("Constacto no encontrado");
            return;
        } 
        if  (!/^[0-9]{1,11}$/.test(telefono)) {
            console.log("Número de telefono no valido")
        }
        this.contactos.set(nombre, telefono);
        console.log("Contacto Actualizado");
    }

    buscarContacto(nombre) {
        if (!this.contactos.has(nombre)) {
            console.log(` ${nombre} - ${this.contactos.get(nombre)}`);
        } else {
            console.log("Contacto no encontrado");
        }
    }
    mostrarContacto(nombre) {
        console.log("Agenda de contactos: ");
        this.contactos.forEach((nombre, telefono) => {
            console.log(`${nombre}: ${telefono}`);
        });
    }
}

// Ejecución en terminal
const agenda = new Agenda();
agenda.agregarContacto("Samyr", "3006018709");
agenda.agregarContacto("Tony", "3006358709");
agenda.agregarContacto("Sam", "3009658709");
agenda.agregarContacto("Andres", "3009658989");
agenda.actualizarContacto("Samyr", "3108946655");
agenda.buscarContacto("Andres");
agenda.eliminarContacto("Andres");

console.log(agenda)