import domBuilder from '../components/domBuilder';
import buildNavBar from '../components/navBar';
import formEvents from '../Events/formEvents';
import navEvents from '../Events/navBarEvents';

const startApp = (user) => {
  document.querySelector('#login-form-container').innerHTML = '';
  domBuilder(user);
  buildNavBar();
  navEvents(user);
  formEvents(user);
  document.querySelector('#app').addEventListener('click', (e) => {
    console.warn(e);
  });
};

export default startApp;
