const form = document.querySelector(".form");
const input = document.querySelector(".input");
const listBooks = document.querySelector("#list-books");
const checkRead = document.querySelector("#check-read");

form.addEventListener("click", (e) => {
    if(e.target.classList.contains("submit") && input.value.trim() == ""){
        alert("You cannot add an empty text.");
    } else if(e.target.classList.contains("submit")){
        const book = document.createElement("article");
        book.classList.add("book");
        book.innerHTML = `
            <h3>${input.value}</h3>
            <div class="book-button">
              <button id="read"><i class="bi bi-book" style="color: green;" id="read"></i></button>
              <button id="delete"><i class="bi bi-trash-fill" style="color: red;" id="delete"></i></button>
        </div>
        `
        listBooks.append(book);
    }
});

listBooks.addEventListener("click", (e) => {
    if(e.target.id === "read"){
        const bookTitle = e.target.parentElement.parentElement.previousElementSibling;
        
        if(!bookTitle.classList.contains("read")){
            bookTitle.classList.add("read");
        } else {
            bookTitle.classList.remove("read");
        }
    } else if(e.target.id === "delete"){
        const book = e.target.parentElement.parentElement.parentElement;
        book.remove();
    }
});

checkRead.addEventListener("change", (e) => {
    const books = document.querySelectorAll(".book");

    if(e.target.checked){
        books.forEach((book) => {
            if(book.firstElementChild.classList.contains("read")){
                book.style.display = "none";
            }
        });
    } else {
        books.forEach((book) => {
            book.style.display = "flex";
        });
    }
});

/*
<article class="book">
    <h3>The book's title</h3>
    <div class="book-button">
        <button id="read"><i class="bi bi-book" style="color: green;"></i></button>
        <button id="delete"><i class="bi bi-trash-fill" style="color: red;"></i></button>
    </div>
</article>
*/