import { loadingConstants } from '../config/constants';
import { setDisabled, show, hide, tryGetElementById } from '../utils/elements';

const ToggleAttribute = loadingConstants.toggleAttribute;
const HideAttribute = loadingConstants.hideAttribute;

class Loading {
  form: HTMLFormElement;
  loading?: HTMLElement;
  elementToHide?: HTMLElement;
  submit?: Element | null;

  constructor(form: HTMLFormElement) {
    this.form = form;
  }

  static initializeAll() {
    this.findByToggle().forEach(loading => {
      loading.initialize();
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

  initialize() {
    const loadingElementId = this.form.getAttribute(ToggleAttribute);

    if (loadingElementId) {
      this.loading = tryGetElementById(loadingElementId);
    }

    const elementToHideId = this.form.getAttribute(HideAttribute);

    if (elementToHideId) {
      this.elementToHide = tryGetElementById(elementToHideId);
    }

    this.submit = this.form.querySelector('[type="submit"]');

    this.form.addEventListener('submit', () => {
      this.start();
    });
  }

  start() {
    if (this.submit) {
      setDisabled(this.submit);
    }

    if (this.loading) {
      show(this.loading);
    }

    if (this.elementToHide) {
      hide(this.elementToHide);
    }
  }
}

export default Loading;
