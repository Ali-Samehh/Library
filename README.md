const myLibrary = [];
const bookContainer = document.querySelector(".book-container");

function Book (name , author , pages , read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary (name , author , pages , read) {
    const book = new Book (name , author , pages , read);
    myLibrary.push(book);
    myLibrary.forEach (book => {
        book.id = crypto.randomUUID();
    })
}

addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, true);
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, true);
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, true);

console.log(myLibrary);


function displayBooks () {
    myLibrary.forEach (book => {
        const card = document.createElement("div");
        card.classList.add("card");

        // Add details about the book
        const title = document.createElement("h2");
        title.textContent = book.name;
        card.appendChild(title);

        const author = document.createElement("p");
        author.textContent = `Author: ${book.author}`;
        card.appendChild(author);

        const pages = document.createElement("p");
        pages.textContent = `Pages: ${book.pages}`;
        card.appendChild(pages);

        bookContainer.appendChild(card);
    })
}

displayBooks();


# Library
   const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn');
        removeBtn.setAttribute('data-book-id', book.id);
        card.appendChild(removeBtn);

        removeBtn.addEventListener('click', (e) => {
            const bookId = e.target.dataset.bookId;
            const bookIndex = myLibrary.findIndex(b => b.id === bookId);
            if (bookIndex > -1) {
                myLibrary.splice(bookIndex, 1);
                const bookCard = document.querySelector(`[data-book-id="${bookId}"]`);
                bookCard.remove();
            }
        });
