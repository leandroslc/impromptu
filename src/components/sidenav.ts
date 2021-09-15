import { sidebarConstants } from '../config/constants';

const EscapeKey = 'Escape';
const ToggleAttribute = sidebarConstants.toggleAttribute;
const ExpandedClass = sidebarConstants.expandedClass;
const BackdropClass = sidebarConstants.backdropClass;

class Sidenav {
  private sidebarElement: HTMLElement;

  private toggleElement: HTMLElement;

  private backdropElement: HTMLElement;

  constructor(sidebar: HTMLElement, sidebarToggle: HTMLElement) {
    this.sidebarElement = sidebar;
    this.toggleElement = sidebarToggle;
    this.backdropElement = this.createBackdrop();
  }

  static findByToggle() {
    const toggleElement = document.querySelector(
      `[${ToggleAttribute}]`,
    ) as HTMLElement;

    if (!toggleElement) {
      return null;
    }

    const sidebarId = toggleElement.getAttribute(ToggleAttribute);

    const sidebarElement = sidebarId
      ? document.getElementById(sidebarId)
      : null;

    if (!sidebarElement) {
      return null;
    }

    return new Sidenav(sidebarElement, toggleElement);
  }

  public initialize() {
    document.body.appendChild(this.backdropElement);

    this.toggleElement.addEventListener(
      'click',
      this.createToggleOnClickEvent(),
    );

    this.backdropElement.addEventListener(
      'click',
      this.createBackdropOnClickEvent(),
    );

    document.addEventListener('keyup', this.createDocumentOnKeyPressEvent());
  }

  private createBackdrop() {
    const backdrop = document.createElement('div');
    backdrop.classList.add(BackdropClass);

    return backdrop;
  }

  private isExpanded() {
    return this.sidebarElement.classList.contains(ExpandedClass);
  }

  private open() {
    this.setExpanded(this.sidebarElement, true);
    this.setExpanded(this.backdropElement, true);
  }

  private close() {
    this.setExpanded(this.sidebarElement, false);
    this.setExpanded(this.backdropElement, false);
  }

  private setExpanded(element: HTMLElement, isExpanded: boolean) {
    if (isExpanded) {
      element.classList.add(ExpandedClass);
    } else {
      element.classList.remove(ExpandedClass);
    }
  }

  private createToggleOnClickEvent() {
    return (event: Event) => {
      event.preventDefault();

      if (this.isExpanded()) {
        this.close();
      } else {
        this.open();
      }
    };
  }

  private createBackdropOnClickEvent() {
    return () => {
      this.close();
    };
  }

  private createDocumentOnKeyPressEvent() {
    return (event: KeyboardEvent) => {
      if (!this.isExpanded()) {
        return;
      }

      if (event.key === EscapeKey) {
        this.close();
      }
    };
  }
}

export default Sidenav;
