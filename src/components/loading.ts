import { loadingConstants } from '../config/constants';
import { setDisabled, setEnabled, show, hide, tryGetElementById } from '../utils/elements';

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

    this.submit = this.form.querySelector('[type="submit"]');
  }

  attachSubmitEvent() {
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

  stop() {
    if (this.submit) {
      setEnabled(this.submit);
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
