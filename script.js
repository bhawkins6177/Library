let myLibrary = [];

function book(title,author,pages,genre,haveRead){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.genre = genre;
    this.description = function(){
        let descriptionDisplay = this.title + ' was written by ' +this.author + '. This book has ' + this.pages + ' pages and is in the genre of ' +this.genre+ '.';
        return descriptionDisplay;
    }
    this.haveRead = haveRead;
}
let HarryPotter = new book('Harry Potter','JK',200,'fantasy', 'No')
myLibrary.push(HarryPotter)
function addBookToLibrary(){
  return myLibrary.push(new book(prompt('What is the title?'),prompt('Who is the author?'),prompt('How many pages?'),prompt('What genre is this book in?')));
}

let newBookBtn = document.querySelector('#btn');
newBookBtn.addEventListener('click', function(){
    addBookToLibrary();
})