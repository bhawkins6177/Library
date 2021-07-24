let myLibrary = [];
 
function book(Title,Author,Pages,Genre){
   this.Title = Title,
   this.Author = Author,
   this.Pages = Pages,
   this.Genre = Genre;
   /*this.about = function(){  //this does NOT work, come back later.....
       let descriptionDisplay = title + ' was written by ' +author + '. This book has ' + pages + ' pages and is in the genre of ' +genre+ '.';
       return descriptionDisplay;
   }*/
   //this.Read = Read;
}

let titleInput = document.querySelector('#titleInput');
let authorInput = document.querySelector('#authorInput');
let pagesInput = document.querySelector('#pagesInput');
let genreInput = document.querySelector('#genreInput');

let HarryPotter = new book('Harry Potter','JK',200,'fantasy', 'No')
myLibrary.push(HarryPotter)
function addBookToLibrary(){
 return myLibrary.push(new book(titleInput.value, authorInput.value, pagesInput.value,genreInput.value,'No'));
}
 
let newBookBtn = document.querySelector('#btn'); //querySelectors here
let libraryDisplay = document.querySelector('#display');
 
newBookBtn.addEventListener('click', function(){
   libraryDisplay.textContent = '';
   addBookToLibrary();
   myLibraryDisplay(myLibrary);
   titleInput.value = '';
   authorInput.value = '';
   genreInput.value = '';
   pagesInput.value = '';
})
 
function myLibraryDisplay(array){
   for (let i = 0; i<array.length; i++){
       let newDiv = document.createElement('div');
       let deleteButton = document.createElement('button')
       let readButton = document.createElement('button')
       readButton.classList.add('readButton');
       deleteButton.classList.add('DeleteButton');
       newDiv.classList.add('BookDiv');
       libraryDisplay.appendChild(newDiv);
       newDiv.appendChild(deleteButton);
       newDiv.appendChild(readButton);
       deleteButton.textContent ='Delete';
       readButton.textContent ='Read';
       deleteButton.addEventListener('click',function(){
           newDiv.remove();
           array.splice(i,1);
       })
       for (const prop in array[i]){
           let newDiv2 = document.createElement('div');
           newDiv.appendChild(newDiv2);
           newDiv2.textContent = prop +' : '+ array[i][prop];
       }
       readButton.addEventListener('click',function(){
           if (readButton.textContent === 'Read'){
               readButton.textContent = "Not Read"
           } else {
               readButton.textContent = "Read"
           }
           //newDiv.remove();
           //myLibraryDisplay(myLibrary);
          
       })
   }
}
 
myLibraryDisplay(myLibrary);
 
/*let newDiv = document.createElement('div');
libraryDisplay.appendChild(newDiv)
newDiv.textContent = array[i];
console.log(newDiv)
return newDiv;
*/
