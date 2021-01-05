import 'bootstrap';
import '../sass/main.scss';
import './custom';
const sed123 = document.querySelector('.app-sidebar');
const sed = document.querySelector('.app-sidebar__toggle');
const pwd123 = document.querySelector('.app-content');
sed.addEventListener('click', () => {
  sed123.classList.toggle('app-1234');
  pwd123.classList.toggle('app-content1');
});
