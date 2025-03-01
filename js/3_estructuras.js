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
        this.contactos = new Map([
            ["Samyr", "3006018709"],
            ["Tony", "3006358709"],
            ["Sam", "3009658709"],
            ["Andres", "3009658989"]
        ]);
    }

    agregarContacto(nombre, telefono) {
        if (!/^[0-9]{1,11}$/.test(telefono)) {
            console.log("Número de teléfono no válido.");
            return;
        }
        this.contactos.set(nombre, telefono);
        console.log("Contacto agregado");
    }

    eliminarContacto(nombre) {
        if (this.contactos.delete(nombre)) {
            console.log("Contacto eliminado.");
        } else {
            console.log("Contacto no encontrado");
        }
    }

    actualizarContacto(nombre, telefono) {
        if (!this.contactos.has(nombre)) {
            console.log("Contacto no encontrado");
            return;
        }
        if (!/^[0-9]{1,11}$/.test(telefono)) {
            console.log("Número de teléfono no válido");
            return;
        }
        this.contactos.set(nombre, telefono);
        console.log("Contacto actualizado");
    }

    buscarContacto(nombre) {
        if (this.contactos.has(nombre)) {
            console.log(`${nombre} - ${this.contactos.get(nombre)}`);
        } else {
            console.log("Contacto no encontrado");
        }
    }

    mostrarContactos() {
        let contactos = "Agenda de contactos:\n";
        this.contactos.forEach((telefono, nombre) => {
            contactos += `${nombre}: ${telefono}\n`;
        });
        console.log(contactos);
    }
}

// Ejecución en el navegador
const agenda = new Agenda();

function mostrarMenu() {
    let option;
    do {
        option = prompt("Seleccione una opción:\n1. Agregar contacto\n2. Eliminar contacto\n3. Actualizar contacto\n4. Buscar contacto\n5. Mostrar contactos\n6. Salir")
        switch(option){
            case "1":
                let nombreAgregar = prompt("Ingrese un nombre: ");
                let telefonoAgregar = prompt("Ingrese un numero");
                agenda.agregarContacto(nombreAgregar, telefonoAgregar);
                break;
            case "2":
                let nombreElimnar = prompt("Ingrese el nombre del contacto a eliminar: ");
                agenda.eliminarContacto(nombre);
                break;
            case "3":
                let nombreActualizar = prompt("Ingrese el nombre dle contacto a Actualizar: ");
                let telefonoActualizar = prompt("Ingrese el nuevo telefono: ")
                agenda.actualizarContacto(nombreActualizar, telefonoActualizar);
                break;
            case "4":
                let nombreBuscar = prompt("Ingrese el nombre a Actualizar: ")
                agenda.buscarContacto(nombreBuscar);
                break;
                case "5":
                    agenda.mostrarContactos();
                    break;
                case "6":
                    console.log("Saliendo...");
                    break;
                default:
                    console.log("Opción no válida.")    
        }
    }while (option !== "6");
}
mostrarMenu();

console.log(agenda)