import Loading from './components/loading';
import Sidenav from './components/sidenav';

document.addEventListener('DOMContentLoaded', () => {
  Sidenav.findByToggle()?.initialize();
  Loading.initializeAll();
});
