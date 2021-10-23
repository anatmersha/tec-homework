const fs = require('fs');
const fileName = 'text1.txt';
// encoding_1
// fs.writeFileSync(fileName, 'Node is great');
// const fileContant = fs.readFileSync(fileName, 'utf8');
// console.log(fileContant);
// encoding_2
// fs.writeFileSync(fileName, 'שלום עולם', 'utf8');
// const fileContant = fs.readFileSync(fileName);
// console.log(fileContant);

//*לא התקבלה מחרוזת תקינה, צריך להוסיףencodingכדי לקבלת מחרוזת תקינה.
// encoding_3
fs.writeFile(fileName, 'שלום עולם', (err, data) => {
    if (err) { console.log(err); }
});
fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
        console.log(err);

    } else {
        console.log(data);
    }
});