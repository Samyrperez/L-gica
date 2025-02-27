// Crea una agenda de contactos por terminal.
// * - Debes implementar funcionalidades de búsqueda, inserción, actualización y eliminación de contactos.
// * - Cada contacto debe tener un nombre y un número de teléfono.
// * - El programa solicita en primer lugar cuál es la operación que se quiere realizar,
// *   y a continuación los datos necesarios para llevarla a cabo.
// * - El programa no puede dejar introducir números de teléfono no númericos y con más
// *   de 11 dígitos (o el número de dígitos que quieras).
// * - También se debe proponer una operación de finalización del programa.
// */



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

// agenda.agregarContacto("Samyr" , "3006018709");
// agenda.agregarContacto("Tony", "3006358709");
// agenda.agregarContacto("Sam", "3009658709");
// agenda.agregarContacto("Andres", "3009658989");
// // agenda.eliminarContacto("Samyr");
// // agenda.actualizarContacto("Samyr", "3108946655")
// agenda.buscarContacto("Samyr")
// agenda.mostrarContactos("Samyr")



