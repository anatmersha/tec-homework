const fs = require('fs');
const process = require('process');
console.log(process.argv);
const library = [
    { Name: "Aroof", Autor: "alibaba", Pages: 100 },
    { Name: "Bsea", Autor: "barbara", Pages: 200 },
    { Name: "Cgreen", Autor: "cordero", Pages: 300 },
    { Name: "Dlong", Autor: "diego", Pages: 400 },
];
const fileName = './booksLibrary.txt';
const libraryJson = JSON.stringify(library);
const libraryObj = JSON.parse(fs.readFileSync(fileName, 'utf8'));
fs.writeFileSync(fileName, libraryJson);
const enterAction = process.argv[2];
const enterName = process.argv[3];
const enterAutor = process.argv[4];
const enterPages = Number(process.argv[5]);
// const libraryObj = JSON.parse(libraryJson);

// ***find a book

const result = libraryObj.find((book) => {
    return book.Name == enterName;
})

// ******* adding a book

function addBook() {
    if (result == undefined) {
        libraryObj.push({ Name: enterName, Autor: enterAutor, Pages: enterPages });
        console.log(libraryObj);
    } else {
        console.log('book already inside');
    }
}
// if (enterAction == 'add') { addBook(); }

// ********* delete a book
// result = index

function deleteBook() {
    if (result == -1) {
        console.log('book already inside');
    } else {
        libraryObj.splice(result, 1);
        console.log(libraryObj);
    }
}
if (enterAction == 'delete') { deleteBook(); }

// update a book

// function updateBook() {}

function updateBook() {
    if (result == enterName) {
        console.log('book was not found');
    } else {
        result.Autor = enterAutor;
        result.Pages = enterPages;
        console.log(libraryObj);
    }
}

// if (enterAction == 'update') { updateBook(); }

// ***** search a book

function searchBook() {
    if (result == enterName) {
        console.log('book already inside');
    } else {
        console.log(result);
    }
}
// if (enterAction == 'search') { searchBook();}


// ********* show all books

function showAllBooks() {
    console.log(libraryObj);
}
// if (enterAction == 'getAll') {showAllBooks();}