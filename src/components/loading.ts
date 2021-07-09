import { loadingConstants } from '../config/constants';
import { setDisabledAll, setEnabledAll, show, hide, tryGetElementById } from '../utils/elements';

const ToggleAttribute = loadingConstants.toggleAttribute;
const HideAttribute = loadingConstants.hideAttribute;

type IsValidHandler = (form: HTMLFormElement) => boolean;

let isValid: IsValidHandler;

function hasAtLeastOneElement(elements?: NodeListOf<Element> | null) {
  return elements && elements.length > 0;
}

class Loading {
  form: HTMLFormElement;
  loading?: HTMLElement;
  elementToHide?: HTMLElement;
  submits?: NodeListOf<Element> | null;

  constructor(form: HTMLFormElement) {
    this.form = form;
  }

  static setIsValidHandler(handler: IsValidHandler) {
    isValid = handler;
  }

  static initializeAll() {
    this.findByToggle().forEach(loading => {
      loading.initialize();
      loading.attachSubmitEvent();
    });
  }

  static findByToggle() {
    const foundForms = document.querySelectorAll(`[${ToggleAttribute}]`);

    const loadings: Loading[] = [];

    foundForms.forEach(foundForm =>
      loadings.push(
        new Loading(foundForm as HTMLFormElement)));

    return loadings;
  }

  static create(form: HTMLFormElement) {
    const loading = new Loading(form);

    loading.initialize();

    return loading;
  }

  initialize() {
    const loadingElementId = this.form.getAttribute(ToggleAttribute);

    if (loadingElementId) {
      this.loading = tryGetElementById(loadingElementId);
    }

    const elementToHideId = this.form.getAttribute(HideAttribute);

    if (elementToHideId) {
      this.elementToHide = tryGetElementById(elementToHideId);
    }

    this.submits = this.form.querySelectorAll('[type="submit"]');
  }

  attachSubmitEvent() {
    this.form.addEventListener('submit', (event) => {
      if (isValid && isValid(event.currentTarget as HTMLFormElement) === false) {
        return;
      }

      this.start();
    });
  }

  start() {
    if (hasAtLeastOneElement(this.submits)) {
      setDisabledAll(this.submits!);
    }

    if (this.loading) {
      show(this.loading);
    }

    if (this.elementToHide) {
      hide(this.elementToHide);
    }
  }

  stop() {
    if (hasAtLeastOneElement(this.submits)) {
      setEnabledAll(this.submits!);
    }

    if (this.loading) {
      hide(this.loading);
    }

    if (this.elementToHide) {
      show(this.elementToHide);
    }
  }
}

export default Loading;
