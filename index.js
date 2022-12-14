import Collection from './modules/Collection.js';
import * as f from './modules/functions.js';
import * as s from './modules/selectors.js';

const collection = new Collection();
/* Displays books on DOM loaded */
collection.displayBooks();

s.form.addEventListener('submit', (e) => {
  collection.addBook(e);
  s.bookName.value = '';
  s.author.value = '';
  f.listSelected();
});
s.bookList.addEventListener('click', (e) => collection.removeBook(e));

/* Navigation event listeners */
s.listNav.addEventListener('click', f.listSelected);
s.addNav.addEventListener('click', f.addSelected);
s.contactNav.addEventListener('click', f.contactSelected);
window.addEventListener('load', f.listSelected);

/* Header time */
f.refreshTime();

window.addEventListener('Load', () => {
  if (collection.booksArray.length === 0) {
    s.bookList.innerHTML = '<h2 class="no-books">Your book list is empty</h2>';
  }
});
