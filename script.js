//this is examole of reverse string 

function reversestring(strings) {
    return strings.split("").reverse().join('');
}
console.log(reversestring('hello'));

//This is another one

let str='hello';
let reversed=str.split('').reverse().join('');
console.log(reversed);

//question 2 odd even check 

let num = 7;

function checkEvenOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log(checkEvenOdd(num));

/// one more 

const oddeven=num => num % 2 === 0 ? 'Even' : 'Odd';
console.log(oddeven(num));


///  Question 3  largest number 

let arr = [1, 2, 3, 4, 5];

function findLargest(array) {
    return Math.max(...array);
}

console.log(findLargest(arr));

// question 4 

let array=[1,2,3,4,5];

function findsmallest(array) {
    return Math.min(...array);
}
console.log(findsmallest(array));

// Question no 5 find average 
let numbers=[1,2,3,4,5];

function findAverage(array) {
    const sum = array.reduce((total, num) => total + num, 0);
    return sum / array.length;
}
console.log(findAverage(numbers));

//Question no 6 Find median

let arr=[1,2,3,4,5,6,7,8,9,10];

function findmedian(array){
    let median=Math.floor(array.length/2);
    return array[median];
}
console.log(findmedian(arr));