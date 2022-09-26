import * as s from './selectors.js';
import { collection } from '../index.js';
import { DateTime } from "./luxon.js";
/* Book constructor */
function Book(name, author) {
  this.name = name;
  this.author = author;
}

/* Navigation Functions */

function listSelected() {
  s.addPage.style.display = 'none';
  s.addNav.style.color = 'black';
  s.contactPage.style.display = 'none';
  s.contactNav.style.color = 'black';
  s.listPage.style.display = 'block';
  s.listNav.style.color = 'blue';
  if (collection.booksArray.length === 0) {
    s.bookList.innerHTML = '<h2 class="no-books">Your book list is empty</h2>';
  }
}

function addSelected() {
  s.listPage.style.display = 'none';
  s.listNav.style.color = 'black';
  s.contactPage.style.display = 'none';
  s.contactNav.style.color = 'black';
  s.addPage.style.display = 'flex';
  s.addNav.style.color = 'blue';
}

function contactSelected() {
  s.listPage.style.display = 'none';
  s.listNav.style.color = 'black';
  s.addPage.style.display = 'none';
  s.addNav.style.color = 'black';
  s.contactPage.style.display = 'block';
  s.contactNav.style.color = 'blue';
}

function refreshTime() {
  const dateString = DateTime.now().toRFC2822();
  s.timeDisplay.textContent = dateString;
}

setInterval(refreshTime, 1000);

export { Book, listSelected, addSelected, contactSelected, refreshTime };