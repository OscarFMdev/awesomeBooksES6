/* Book constructor */
function Book(name, author) {
  this.name = name;
  this.author = author;
}

/* Navigation Functions */

function listSelected() {
  addPage.style.display = 'none';
  addNav.style.color = 'black';
  contactPage.style.display = 'none';
  contactNav.style.color = 'black';
  listPage.style.display = 'block';
  listNav.style.color = 'blue';
  if (collection.booksArray.length === 0) {
    bookList.innerHTML = '<h2 class="no-books">Your book list is empty</h2>';
  }
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

export { Book, listSelected, addSelected, contactSelected };