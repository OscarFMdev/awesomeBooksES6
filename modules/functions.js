import { DateTime } from './luxon.js';

/* Navigation selectors */
const listNav = document.querySelector('.list');
const addNav = document.querySelector('.new-book');
const contactNav = document.querySelector('.contact');

/* Pages selectors */
const listPage = document.querySelector('#list');
const addPage = document.querySelector('#new-book');
const contactPage = document.querySelector('#contact');

/* time selector */

const timeDisplay = document.getElementById('date');

/* Navigation Functions */

function listSelected() {
  addPage.style.display = 'none';
  addNav.style.color = 'black';
  contactPage.style.display = 'none';
  contactNav.style.color = 'black';
  listPage.style.display = 'block';
  listNav.style.color = 'blue';
}

function addSelected() {
  listPage.style.display = 'none';
  listNav.style.color = 'black';
  contactPage.style.display = 'none';
  contactNav.style.color = 'black';
  addPage.style.display = 'flex';
  addNav.style.color = 'blue';
}

function contactSelected() {
  listPage.style.display = 'none';
  listNav.style.color = 'black';
  addPage.style.display = 'none';
  addNav.style.color = 'black';
  contactPage.style.display = 'block';
  contactNav.style.color = 'blue';
}

function refreshTime() {
  const dateString = DateTime.now().toRFC2822();
  timeDisplay.textContent = dateString;
}

setInterval(refreshTime, 1000);

export {
  listSelected,
  addSelected,
  contactSelected,
  refreshTime,
};
