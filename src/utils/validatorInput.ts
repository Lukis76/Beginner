import { defaultMsg } from "./defaultMsg";
import { parserBeginner } from "./parserBeginner";

export const validatorInput = (input: HTMLInputElement, output: HTMLInputElement, msg: HTMLElement): void => {
  var regex = /^[01]+$/; // Expresión regular para validar solo 0 y 1

  if (input.value === "") {
    defaultMsg(msg);
  } else if (regex.test(input.value)) {
    msg.textContent = "";
    parserBeginner(input, output);
  } else {
    msg.style.removeProperty("color");
    msg.textContent = "Solo se aceptan unos y ceros.";
    output.value = "";
  }
};
