const bookButton = document.getElementById("addBook")
const bookForm = document.getElementById("form")
const hideForm = document.getElementById("closeBtn")
const bookTitle = document.getElementById("bname")
const bookAuthor = document.getElementById("author")
const bookPages = document.getElementById("pages")
const bookReadStatus = document.getElementById("read")
const submitBook = document.getElementById("submitBook")
const bookGallery = document.getElementById("bookGallery")
const main = document.getElementById("main")



//form to add books
const popUpForm = (bookButton, bookForm) => {
    bookButton.addEventListener("click", () => {
    bookForm.classList.add("show")
    })
}

//closes form
const closeForm = (hideForm, bookForm) => {
    hideForm.addEventListener("click", () => {
        bookForm.classList.remove("show")
    })
}

const myLibrary = [];


class Book {
    constructor(title, author, pages, read) {
        this.title = title
        this.authors = author
        this.pageNumbers = pages
        this.readStatus = read
    }
}


//takes user input makes books and adds to library
function addBookToLibrary(submitBook) {
    submitBook.addEventListener("click", () => {
        let titles = bookTitle.value
        let authors = bookAuthor.value
       let pages = bookPages.value
        let newBook = new Book(titles,authors,pages,undefined)
        myLibrary.push(newBook)
        cardCreator(newBook)
    })
   
}

//makes the display for books
function cardCreator(newBook) {
   
    let bookContainer = document.createElement("div")
    let bookTitle = document.createElement("div")
    let bookAuthors = document.createElement("div")
    let bookPages = document.createElement("div")
    let deleteButton = document.createElement("button")
    let readButton = document.createElement("INPUT")
    let readText = document.createElement("div")
    let readBox = document.createElement("div")
    let read = document.createElement("label")
    let readToggle = document.createElement("span")
    
    readBox.appendChild(readText)
    readBox.appendChild(read)
    readBox.classList.add("readBox")

    readText.textContent = "Read:"
    readText.classList.add("readText")
    readButton.setAttribute("id", "readBtn")
    readButton.setAttribute("type", "checkbox")
    
    read.classList.add("switch")
    
    readToggle.setAttribute("id", "toggle")
    readToggle.classList.add("slider", "round")

    read.appendChild(readButton)
    read.appendChild(readToggle)
    bookContainer.dataset.number = `${myLibrary.indexOf(newBook)}` 
    bookTitle.textContent = `${newBook.title}`
    bookAuthors.textContent = `By: ${newBook.authors}`
    bookPages.textContent = `Pages: ${newBook.pageNumbers}`
    deleteButton.textContent = "Delete"
    bookContainer.classList.add("bookContainer")
    bookTitle.classList.add("bookTitle")
    bookAuthors.classList.add("book")
    bookPages.classList.add("book")
    deleteButton.classList.add("deleteButton")
    main.appendChild(bookContainer)
    
    bookContainer.appendChild(bookTitle)
    bookContainer.appendChild(bookAuthors)
    bookContainer.appendChild(bookPages)
    
    bookContainer.appendChild(readBox)
    bookContainer.appendChild(deleteButton)

    //sets read status of book
    readButton.addEventListener("change", function() {
        if (this.checked) {
            newBook.readStatus = true
        } else {
            newBook.readStatus = false
        }
    })
    
    //resets site so nodelist can update
    deleteButton.onclick = () => {
        
        
        myLibrary.splice(Number(myLibrary.indexOf(newBook)), 1)
        main.innerHTML = ""
        let addForm = document.createElement("div")
        let bookButton = document.createElement("button")
        let bookForm = document.createElement("div")
        
        let bookTitle = document.createElement("INPUT")
        let bookAuthor = document.createElement("INPUT")

        
        let hideForm = document.createElement("button")
        hideForm.textContent = "x"
        hideForm.setAttribute("id", "closeBtn")
        bookForm.appendChild(hideForm)

        let titleLabel = document.createElement("LABEL")
        let title = document.createTextNode("Book Title:")
        titleLabel.setAttribute("for", "Book Title:")
        titleLabel.appendChild(title)

        let authorLabel = document.createElement("LABEL")
        let author = document.createTextNode("Author(s):")
        authorLabel.setAttribute("for","Author(s):")
        authorLabel.appendChild(author)

        let bookPages = document.createElement("INPUT")
        let pages = document.createTextNode("# of pages:")
        bookPages.setAttribute("for", "# of pages:")
        bookPages.appendChild(pages)
        
        let submitBook = document.createElement("button")
        submitBook.textContent = "Add"
        submitBook.setAttribute("id", "submitBook")

        bookForm.classList.add("addform")
        bookForm.setAttribute("id", "form")
        bookForm.appendChild(titleLabel)
        bookForm.appendChild(bookTitle)
        
        hideForm.setAttribute("id", "closeBtn")
        bookTitle.setAttribute("id", "bname")
        bookAuthor.setAttribute("id", "author")
        bookTitle.setAttribute("type", "text")
        bookAuthor.setAttribute("type", "text")
        bookPages.setAttribute("type", "text")
        main.appendChild(bookForm)
        
        document.getElementById("form").insertBefore(bookTitle,document.getElementById("Book Title:"))
        document.getElementById("")
        bookForm.appendChild(authorLabel)
        bookForm.appendChild(bookAuthor)
        bookButton.classList.add("add")
        addForm.classList.add("create")
        addForm.setAttribute("id", "bookGallery")
        bookButton.setAttribute("id","addBook")
        bookButton.textContent = "Add Book"
        main.appendChild(addForm)
        addForm.appendChild(bookButton)
        bookForm.appendChild(pages)
        bookForm.appendChild(bookPages)
        bookForm.appendChild(submitBook)
        
        myLibrary.forEach(card => cardCreator(card))
        popUpForm(bookButton, bookForm);
        closeForm(hideForm, bookForm);
        addBookToLibrary(submitBook);

        
        
        
    }
    
    
}


    

popUpForm(bookButton,bookForm);
closeForm(hideForm,bookForm);
addBookToLibrary(submitBook);
