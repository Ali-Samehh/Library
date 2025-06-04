const addBookBtn = document.querySelector('#add-book-btn');
const addBookDialog = document.querySelector('#addBookDialog');
const cancelButton = document.querySelector('#cancelButton');
const addBookForm = document.querySelector('#addBookForm');

const bookContainer = document.querySelector('.book-container')



const myLibrary = [];

function Book (title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleRead = function() {
    
} 

function addBookToLibrary (title,author,pages,read){
    const book = new Book(title,author,pages,read);
    myLibrary.push(book);
    myLibrary.forEach(book => {
        book.id = crypto.randomUUID();
    })
}

function removeBook(bookId) {
    const bookIndex = myLibrary.findIndex(book => book.id === bookId)
    if (bookIndex !== -1) {
        myLibrary.splice(bookIndex, 1);
        bookContainer.innerHTML = '';
        displayBooks();
    }
}

function displayBooks () {
    myLibrary.forEach (book => {
        const card = document.createElement('div');
        card.classList.add('card');
    
        const title = document.createElement('h2');
        title.textContent = `Title: ${book.title}`;
        card.appendChild(title);
    
        const author = document.createElement('p');
        author.textContent = `Author: ${book.author}`;
        card.appendChild(author);
    
        const pages = document.createElement('p');
        pages.textContent = `${book.pages} pages`;
        card.appendChild(pages);
    
        const read = document.createElement('button');
        read.textContent = `Read: ${book.read}`;
        card.appendChild(read);
        
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn');
        removeBtn.addEventListener('click' , () => {
            removeBook(book.id);
        })
        card.appendChild(removeBtn);

        bookContainer.appendChild(card);
    })
    
}

addBookBtn.addEventListener('click' , () => {
    addBookDialog.showModal();
})

cancelButton.addEventListener('click' , () => {
    addBookDialog.close();
})

addBookForm.addEventListener('submit' , e => {
    e.preventDefault();
    const formData = new FormData(addBookForm);
    const title = formData.get('title');
    const author = formData.get('author');
    const pages = formData.get('pages');
    const read = formData.get('read');

    addBookToLibrary(title,author,pages,read);
    bookContainer.innerHTML = '';
    displayBooks();
    addBookDialog.close();
    addBookForm.reset();

})



