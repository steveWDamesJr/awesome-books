class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class UI {
  static displayBooks() {
    const StoredBooks = [
      {
        title: 'Awesome Book One',
        author: 'Awesome Book Author'
      },
      {
        title: 'Awesome Book One',
        author: 'Awesome Book Author'
      }
    ];

    const books = StoredBooks;

    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('#book-list')

    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td><a href="#" class"btn btn-danger btn-sm delete">X</a></td>
    `;
    list.appendChild(row);
  }

    static clearFields() {
      document.querySelector('#btitle').value = '';
      document.querySelector('#author').value = '';
    }
  }


document.addEventListener('DOMContentLoaded', UI.displayBooks);

document.querySelector('#book-form').addEventListener('submit', (e) => {

  e.preventDefault();

  const title = document.querySelector('#btitle').value;
  const author = document.querySelector('#author').value;

  const book = new Book(title, author);
  UI.addBookToList(book);

  UI.clearFields();

  console.log(book);

});