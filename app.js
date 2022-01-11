class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  static displayBooks() {
    const books = Store.getBooks();

    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('#book-list')

    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
<<<<<<< HEAD
=======
      <td>${book.isbn}</td>
>>>>>>> d49cb6c5b7911fa843f292e09a69dca799405b56
      <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
    `;

    list.appendChild(row);
  }

  static deleteBook(el) {
    if(el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
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
      if(localStorage.getItem('books') === null) {
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

        if(book.isbn === isbn) {
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

  Store.removeBook
  (e.target.parentElement.previousElementSibling.textContent);
}); 
