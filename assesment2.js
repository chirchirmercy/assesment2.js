//const books = [
//{ title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
//isAvailable: true },
//{ title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
//isAvailable: false },
//{ title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
//1866, isAvailable: true },
//{ title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
//isAvailable: false },
//{ title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
//];

//Write a JavaScript program that performs the following tasks:
//1. Create a function called getAvailableBooks that returns an array of all available
//books.

function getAvailableBooks(book){
let available=books
    let array=[]
    for(i=0;i<books.length;i++){
      const book=books[i]
      let available=""
      if(books=="available"){
        array.push(books.book)
      }
    }
    return array
  }
  const books = [
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
    isAvailable: true },
    { title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
    isAvailable: false },
    { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
    1866, isAvailable: true },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
    isAvailable: false },
    { title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
    ];

  const array=getAvailableBooks(books)
  console.log(getAvailableBooks(books))
  


//2. Create a function getBooksByAuthor that takes an author's name as an argument and
//returns an array of all books by that author.

function getBooksByAuthor(names){
  let array=[]
 return names.filter(name=>names.books,name=>names.author).push(names)
 console.log(getBooksByAuthor) 
}
const bookss = [
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
    isAvailable: true },
    { title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
    isAvailable: false },
    { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
    1866, isAvailable: true },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
    isAvailable: false },
    { title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
    ];

getBooksByAuthor()


//3. Create a function addNewBook that takes a book object as an argument and adds it
//to the library, ensuring that the new book has all required properties (title, author,
//publicationYear, and isAvailable).

function addNewBook(){

}


//4. Create a function checkoutBook that takes a book title as an argument and changes
//the book's isAvailable property to false. If the book is not found in the library, the
//function should return a message indicating that the book is not available.

function chan




