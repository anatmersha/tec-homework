const fs = require("fs");
console.log(process.argv);
////// 1
// let fileName = process.argv[2];
// let text = process.argv[3];
// fs.writeFileSync(fileName, text, { flag: "w" });

////// 2
// let fileName = process.argv[2];
// let fileData = fs.readFile(fileName, "utf8", { flag: "w" });
// 3
// let fileName = process.argv[2];
// let text = process.argv[3];
// fs.writeFileSync(fileName, text, { flag: "a" });
//// 4
// let fileName = process.argv[2];
// const book = {
//     Name: "green book",
//     NumPages: 350
// };
// let bookJason = JSON.stringify(book);
// fs.writeFileSync(fileName, bookJason, { flag: "w" });
////5

// let bookJson = fs.readFileSync("./b.txt", "utf8")
// bookToObj = JSON.parse(bookJson);
// console.log(`Book name: ${bookToObj.Name}, Number of pages: ${bookToObj.NumPages}`);