class Tarea {
    constructor(titulo, descripcion, estado = "pendiente", prioridad = "media", fechaVencimiento = null) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.estado = estado; // pendiente, en progreso, completada
        this.prioridad = prioridad; // alta, media, baja
        this.fechaVencimiento = fechaVencimiento;
        this.notas = [];
    }

    actualizarEstado(nuevoEstado) {
        this.estado = nuevoEstado;
    }

    editarDetalles({ titulo, descripcion, prioridad, fechaVencimiento }) {
        if (titulo) this.titulo = titulo;
        if (descripcion) this.descripcion = descripcion;
        if (prioridad) this.prioridad = prioridad;
        if (fechaVencimiento) this.fechaVencimiento = fechaVencimiento;
    }

    agregarNota(nota) {
        this.notas.push(nota);
    }

    toString() {
        return `Tarea: ${this.titulo}, Estado: ${this.estado}, Prioridad: ${this.prioridad}, Fecha: ${this.fechaVencimiento}`;
    }
}

class Usuario {
    constructor(nombre, correo) {
        this.nombre = nombre;
        this.correo = correo;
        this.tareas = [];
    }

    agregarTarea(tarea) {
        this.tareas.push(tarea);
    }

    eliminarTarea(tituloTarea) {
        this.tareas = this.tareas.filter(tarea => tarea.titulo !== tituloTarea);
    }

    obtenerResumen() {
        return this.tareas.map(tarea => tarea.toString());
    }

    toString() {
        return `Usuario: ${this.nombre}, Email: ${this.correo}, Tareas: ${this.tareas.length}`;
    }
}

// Ejemplo de uso SIN document.addEventListener
const usuario = new Usuario("Juan Perez", "juan@example.com");
const tarea1 = new Tarea("Hacer compras", "Comprar leche y pan", "pendiente", "alta");
const tarea2 = new Tarea("Estudiar JavaScript", "Repasar clases y hacer ejercicios", "en progreso", "media");

usuario.agregarTarea(tarea1);
usuario.agregarTarea(tarea2);

console.log(usuario.obtenerResumen());
