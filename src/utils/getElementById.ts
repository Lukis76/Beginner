export const $ = (textId: string): HTMLElement | null => {
  const element = document.getElementById(textId);
  return element;
};
