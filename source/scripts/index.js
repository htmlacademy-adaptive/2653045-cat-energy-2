/* в этот файл добавляет скрипты*/
const navMain = document.querySelector('header');
const navToggle = document.querySelector('.header-wrapper__toggle');
const navig = document.querySelector('.main-nav');
const toggle = document.querySelector('.header-wrapper__toglewrap');
const mainmapimg = document.querySelector('.main-map__picture--nojs');
const mainmapframe = document.querySelector('.main-map__frame--hidden');

navig.classList.remove('main-nav--nojs');
toggle.classList.remove('header-wrapper__toglewrap--nojs');
mainmapimg.classList.remove('main-map__picture--nojs');
mainmapimg.classList.add('main-map--js');
mainmapframe.classList.remove('main-map__frame--hidden');
mainmapframe.classList.add('main-map--frame-shown');

navMain.classList.add('header-wrapper--closed');
navMain.classList.remove('main-header--opened');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('header-wrapper--closed')) {
    navMain.classList.remove('header-wrapper--closed');
    navMain.classList.add('main-header--opened');
  } else {
    navMain.classList.add('header-wrapper--closed');
    navMain.classList.remove('main-header--opened');
  }
});
