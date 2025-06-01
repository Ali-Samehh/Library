const addBookBtn = document.querySelector('#add-book-btn');
const addBookDialog = document.querySelector('#addBookDialog');
const cancelButton = document.querySelector('#cancelButton');
const addBookForm = document.querySelector('#addBookForm');



const myLibrary = [];
const bookContainer = document.querySelector('.book-container');

function Book (title, author, pages, read ) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary (title, author, pages, read) {
    const book = new Book(title,author,pages,read);
    myLibrary.push(book);
    myLibrary.forEach(book => {
        book.id = crypto.randomUUID();
    })
}

function displayBooks () {
    myLibrary.forEach(book => {
        const card = document.createElement('div');
        card.classList.add('card');
        
        // ai generated
        card.setAttribute('data-book-id', book.id);

        const title = document.createElement('h2');
        card.appendChild(title);
        title.textContent = book.title;
        const author = document.createElement('p');
        card.appendChild(author);
        author.textContent = book.author;
        const pages = document.createElement('p');
        card.appendChild(pages);
        pages.textContent = book.pages;
        const read = document.createElement('p');
        read.textContent = book.read;
        card.appendChild(read);

        const removeBtn = document.createElement('button')
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn');
        card.appendChild(removeBtn);
      
        bookContainer.appendChild(card);
    })    
}

addBookBtn.addEventListener('click', () => {
    addBookDialog.showModal();
})

cancelButton.addEventListener ('click' , ()=> {
    addBookDialog.close();
})

addBookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(addBookForm);
    const title = formData.get('title');
    const author = formData.get('author');
    const pages = formData.get('pages');
    const read = formData.get('read');
    addBookToLibrary(title,author,pages,read);
    bookContainer.innerHTML = '';
    displayBooks();
    addBookForm.reset();
    addBookDialog.close();
 
});



