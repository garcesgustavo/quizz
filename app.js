// @ts-check

import { preguntas } from "./data/preguntas.js";

import { Quiz } from "./model/Quiz.js";

import { UI } from "./model/UI.js";

function principal() {
  const quiz = new Quiz(preguntas);

  const ui = new UI();

  ui.mostrarPregunta(quiz.getPreguntaIndex().pregunta);
}
principal();
