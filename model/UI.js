export class UI {
  constructor() {}

  mostrarPregunta(text) {
    const preguntaTitulo = document.getElementById("pregunta");
    preguntaTitulo.innerHTML = text;
  }
}
