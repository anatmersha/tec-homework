console.log(process.argv);
const number = process.argv[2];
const numbers = [5, 7, 9, 6, 4];
// cmd_ 1

function isInside(num) {
    return num == number;
}
const result = numbers.find(isInside);
if (result == undefined) {
    console.log("doesnt exist");
} else {
    console.log(numbers.indexOf(result));
    console.log("exist");
}
// cmd_ 2
function findMaxNum(array) {
    let max = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}
// console.log(findMaxNum(numbers));


function findMinNum(array) {
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}
// console.log(findMinNum(numbers));

function sumUp(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
// console.log(sumUp(numbers));

function average(array) {
    let sum = 0;
    let avg;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        avg = sum / array.length;
    }
    return avg;
}
// console.log(average(numbers));
// cmd_ 2
if (number == "max") { console.log("Max: ", findMaxNum(numbers)); }
if (number == "max") { console.log("Min: ", findMinNum(numbers)); }
if (number == "max") { console.log("Sum: ", sumUp(numbers)); }
if (number == "max") { console.log("Avg: ", average(numbers)); } else { console.log("Not found"); }
// cmd_ 3
switch (number) {
    case 'max':
        console.log("Max: ", findMaxNum(numbers));
        break;
    case 'min':
        console.log("Min: ", findMinNum(numbers));
        break;
    case 'sum':
        console.log("Sum: ", sumUp(numbers));
        break;
    case 'avg':
        console.log("Avg: ", average(numbers));
        break;
    default:
        console.log("not found");
        break;
}