const libraryDiv = document.querySelector('.library');

const myLibrary = [];

document.addEventListener('DOMContentLoaded', () => {
    function Book ( title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

function addBookToLibrary () {
    book1 = new Book('harry Potter', 'J.K.Rowling', 500, true);
    book2 = new Book('The Hobbit', 'J.R.R.Tolkien', 300, false);
    book3 = new Book('The Lord of the Rings', 'J.R.R.Tolkien', 1000, true);
    myLibrary.push(book2);
    myLibrary.push(book3);
    myLibrary.push(book1);
    myLibrary.forEach( book => {
        book.id = crypto.randomUUID();
    })
}

function displayBooks() {
    myLibrary.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.textContent = `${book.title} by ${book.author}, ${book.pages} pages, Read: ${book.read}`;
        bookDiv.classList.add('book');
        libraryDiv.appendChild(bookDiv);
    })
}


addBookToLibrary();
console.log(myLibrary);
displayBooks();
});

const openButton = document.getElementById('openButton');
const closeButton = document.getElementById('closeButton');
const bookForm = document.getElementById('bookForm');




openButton.addEventListener('click', () => {
                bookForm.style.display = 'block';

});

closeButton.addEventListener('click', () => {
            bookForm.style.display = 'none';
        });


