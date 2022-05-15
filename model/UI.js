export class UI {
  constructor() {}

  mostrarPregunta(text) {
    const preguntaTitulo = document.getElementById("pregunta");
    preguntaTitulo.innerHTML = text;
  }
  /**
   *
   * @param {string[]} opciones opciones de las preguntas.
   */
  mostrarOpciones(opciones, callback) {
    const opcionesContenedor = document.getElementById("opciones");
    opcionesContenedor.innerHTML = "";
    for (let i = 0; i < opciones.length; i++) {
      const boton = document.createElement("button");
      boton.innerText = opciones[i];
      boton.className = "boton";
      boton.addEventListener("click", () => callback(opciones[i]));
      opcionesContenedor.append(boton);
    }
  }

  /**
   *
   * @param {number} puntaje total
   */

  mostrarPuntaje(puntaje) {
    const finalCuestionario = `
  <h1>Resultado</h1>
  <h2>Lograste ${puntaje} respuestas correctas</h2>`;
    const elemento = document.getElementById("quizz");
    elemento.innerHTML = finalCuestionario;
  }

  /**
   *
   * @param {number} indiceActual es el total de preguntas contestadas
   * @param {number} total es el total de preguntas a responder
   */

  mostrarProgreso(indiceActual, total) {
    const elementoConteo = document.getElementById("progreso");
    elementoConteo.innerHTML = `Respuestas ${indiceActual} de ${total}`;
  }
}
