const DisabledAttribute = 'disabled';

export function setDisabled(element: Element) {
  element.setAttribute(DisabledAttribute, DisabledAttribute);
}

export function setEnabled(element: Element) {
  element.removeAttribute(DisabledAttribute);
}

export function show(element: HTMLElement) {
  element.style.display = '';
}

export function hide(element: HTMLElement) {
  element.style.display = 'none';
}

export function tryGetElementById(id: string) {
  return document.getElementById(id) || undefined;
}
