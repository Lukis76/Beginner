export const parserBeginner = (input: HTMLInputElement, output: HTMLInputElement): void => {
  output.value = "";
  if (Number(input.value)) {
    // logica de trasformacion
    output.value = parseInt(input.value, 2).toString();
  }
};
