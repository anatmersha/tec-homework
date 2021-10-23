const fs = require('fs');
// object_persistence_1

const books = [
    { Name: "First", Description: "123456", Pages: 100 },
    { Name: "Second", Description: "7891011", Pages: 200 }
];
const booksJson = JSON.stringify(books);
const fileName = 'text2.txt';
fs.writeFile(fileName, booksJson, (err, data) => {
    if (err) {
        console.log(err);
    }
});
// object_persistence_2

const fileContant = fs.readFile(fileName, 'utf8', (err, data) => {
    const booksObj = JSON.parse(data);
    const shortest = booksObj[0].Pages;
    booksObj.forEach(element => {
        if (element.Pages < shortest) {
            shortest = element.Pages;
        }
    });
    console.log(shortest);
});