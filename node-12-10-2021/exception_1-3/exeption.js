//exeption_1
// let e = true;
// 1 2 4 5
// let e = false;
// 1 2 3 5
// console.log(1);
// try {
//     console.log(2);
//     if (e) {
//         throw "some error";
//     }
//     console.log(3);
// } catch (error) {
//     console.log(4);
// }
// console.log(5);
//exeption_2
// let e = true;
// 1 2 4 clean up 5
// let e = false;
// 1 2 3 clean up 5

// console.log(1);
// try {
//     console.log(2);
//     if (e) {
//         throw "some error";
//     }
//     console.log(3);
// } catch (error) {
//     console.log(4);
// } finally {
//     console.log("clean up");
// }
// console.log(5);
//exeption_3
// try {
//     // test statements - block of code to try.
//     // throw - allows to creat custom error handler.
// } catch (error) {
//     // block of code to handle errors from - try block.
// } finally {
//     // always run! 
//     // regardless of the try/catch result !
// }

function safeDiv(num1, num2) {
    try {
        if (num2 == 0) {
            throw 'Denominator is zero';
        } else {
            return num1 / num2;
        }
    } catch (error) {
        return error;
    }
}
// console.log(safeDiv(10, 2));