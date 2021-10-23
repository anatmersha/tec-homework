// array operation_1
const books = [];
books.push({ Name: "the-first", Pages: 100 });
books.push({ Name: "the-second", Pages: 200 });
books.push({ Name: "the-third", Pages: 300 });
// console.log(books);
// array operation_2 
const fs = require("fs");
console.log(process.argv);
let bookName = process.argv[2];

// for (let i = 0; i < books.length; i++) {
//     if (books[i].Name == bookName) {
//         console.log(books[i].Pages);
//     } else {
//         console.log("book wasn`t found");
//     }
// }
// array operation_3 UPDATE
// for (let i = 0; i < books.length; i++) {
//     if (books[i].Name == bookName) {
//         console.log(books[i].Pages += 100);
//         console.log(books);
//     } else {
//         console.log("book wasn`t found");
//     }
// }
// array operation_4 REMOVE
// for (let i = 0; i < books.length; i++) {
//     if (books[i].Name == bookName) {
//         console.log(books.splice(i, 1));
//         console.log(books);
//     } else {
// console.log("book wasn`t found");
// }
// }
// array operation_5
const nums = [4, 6, 8, 10];
let inputNum = process.argv[2];
for (let i = 0; i < nums.length; i++) {
    if (nums[i] == inputNum) {
        nums[i] += 1;
        console.log(nums);
    }
}