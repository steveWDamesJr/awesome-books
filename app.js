// eslint-disable-next-line max-classes-per-file
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

const dt = new Date();
document.getElementById('date-time').innerHTML = dt;

class UI {
  static displayBooks() {
    // eslint-disable-next-line no-use-before-define
    const books = Store.getBooks();

    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('#book-list');

    const row = document.createElement('div');
    row.setAttribute('id', 'row');
    row.innerHTML = `
      <p class="row-btn">${book.title} by ${book.author}</p>
      <p class="row-btn">${book.isbn}</p>
      <input class ="button delete" type="submit" value="Remove">
    `;

    list.appendChild(row);
  }

  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector('#btitle').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
  }
}

class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();

    books.push(book);

    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(isbn) {
    const books = Store.getBooks();

    books.forEach((book, index) => {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem('books', JSON.stringify(books));
  }
}

document.addEventListener('DOMContentLoaded', UI.displayBooks);

document.querySelector('#book-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.querySelector('#btitle').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;

  const book = new Book(title, author, isbn);
  UI.addBookToList(book);

  Store.addBook(book);

  UI.clearFields();
});

document.querySelector('#book-list').addEventListener('click', (e) => {
  UI.deleteBook(e.target);

  Store.removeBook(e.target.previousElementSibling.textContent);
});

const bookList = document.querySelector('#book-list');
const listHead = document.querySelector('.list-head');
const bookForm = document.querySelector('#book-form');
const addBookTitle = document.querySelector('.add-book-title');
const contactInfo = document.querySelector('.contact-info');

function Toogle() {
  bookList.style.display = 'block';
  bookForm.style.display = 'none';
  addBookTitle.style.display = 'none';
  listHead.style.display = 'block';
  contactInfo.style.display = 'none';
}

document.querySelector('#List').addEventListener('click', () => {
  Toogle();
});

function addToogle() {
  bookList.style.display = 'none';
  bookForm.style.display = 'flex';
  addBookTitle.style.display = 'block';
  listHead.style.display = 'none';
  contactInfo.style.display = 'none';
}

document.querySelector('#add-new').addEventListener('click', () => {
  addToogle();
});

function contactToogle() {
  bookList.style.display = 'none';
  bookForm.style.display = 'none';
  addBookTitle.style.display = 'none';
  contactInfo.style.display = 'block';
  listHead.style.display = 'none';
}

document.querySelector('#contact').addEventListener('click', () => {
  contactToogle();
});
