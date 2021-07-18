let myLibrary = [];

function book(Title,Author,Pages,Genre,Read){
    this.Title = Title,
    this.Author = Author,
    this.Pages = Pages,
    this.Genre = Genre;
    /*this.about = function(){  //this does NOT work, come back later.....
        let descriptionDisplay = title + ' was written by ' +author + '. This book has ' + pages + ' pages and is in the genre of ' +genre+ '.';
        return descriptionDisplay;
    }*/
    this.Read = Read;
}
let HarryPotter = new book('Harry Potter','JK',200,'fantasy', 'No')
myLibrary.push(HarryPotter)
function addBookToLibrary(){
  return myLibrary.push(new book(prompt('What is the title?'),prompt('Who is the author?'),prompt('How many pages?'),prompt('What genre is this book in?'),prompt('have you read this book?')));
}

let newBookBtn = document.querySelector('#btn'); //querySelectors here
let libraryDisplay = document.querySelector('#display');

newBookBtn.addEventListener('click', function(){
    libraryDisplay.textContent = '';
    addBookToLibrary();
    myLibraryDisplay(myLibrary);
})

function myLibraryDisplay(array){
    for (let i = 0; i<array.length; i++){
        let newDiv = document.createElement('div');
        libraryDisplay.appendChild(newDiv);
        for (const prop in array[i]){
            let newDiv2 = document.createElement('div');
            newDiv.appendChild(newDiv2);
            newDiv2.textContent = prop +' : '+ array[i][prop];
        }
    }
}

myLibraryDisplay(myLibrary);

/*let newDiv = document.createElement('div');
libraryDisplay.appendChild(newDiv)
newDiv.textContent = array[i];
console.log(newDiv)
return newDiv;
*/