import domBuilder from '../components/domBuilder';
import buildNavBar from '../components/navBar';
import navEvents from '../navBarEvents';

const startApp = (user) => {
  document.querySelector('#login-form-container').innerHTML = '';
  domBuilder(user);
  buildNavBar();
  navEvents();
};

export default startApp;
