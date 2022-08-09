// Problem 1

// Write a JavaScript program to calculate the factorial of a number
function factorial(n) {
    if (n == 0) {
        // base case
        return 1;
    } else {
        // recursive case
        return n * factorial(n - 1);
    }
}

console.log(`factorial(5) = ${factorial(5)}`);






// Problem 2

// Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
function gcd(a, b) {
    console.log(`gcd(${a}, ${b}) => `);
    if (a == b) {
        // base case 1
        return a;
    } else if (a == 0) {
        // base case 2
        return b;
    } else if (b == 0) {
        // base case 3
        return a;
    }

    if (a > b) {
        // recursive case 1
        let remainder = a % b;
        console.log(`gcd(${b}, ${remainder}) => `);
        return gcd(b, remainder);
    } else if (b > a) {
        // recursive case 2
        let remainder = b % a;
        console.log(`gcd(${a}, ${remainder}) => `);
        return gcd(a, remainder);
    }

}

console.log(`gcd(88, 33) = ${gcd(88, 11)}`);








// Problem 3

// Write a JavaScript program to get the integers in range (x, y) exclusive

//////////////// ATTEMPT NUMBER 1 /////////////////////////////
// function range(a, b) {
//     let arr = [];


//     function pushValues(start, end) {
//         if (start == end) {
//             // base case
//             return arr;
//         } else {
//             // recursive case
//             arr.push(start);
//             return pushValues(start + 1, end);
//         }
//     }

//     pushValues(a + 1, b);

//     return arr;
// }
/////////////////////////////////////////////////////////////

function range(a, b) {
    if (b - a < 2) {
        // base case 1
        return [];
    } else if (b - a === 2) {
        // base case 2
        return [a]
    } else {
        // recursive case
        let list = range(a, b - 1);
        list.push(b - 1);
        return list;
    }

}

console.log(range(2, 9));









// Problem 4

// Write a JavaScript program to compute tehe sum of an array of integers

//////////////// ATTEMPT NUMBER 1 /////////////////////////////
// function sumArray(array) {
//     let total = 0;

//     function addFromArray(array) {
//         if (array.length == 1) {
//             // base case
//             total += array[0];
//         } else {
//             // recursive case
//             total += array[0];
//             return addFromArray(array.slice(1));
//         }
//     }

//     addFromArray(array);

//     return total;
// }
//////////////////////////////////////////////////////////////

function sumArray(array) {
    if (array.length == 1) {
        return array[0];
    } else {
        return array[0] + sumArray(array.slice(1));
    }
}

let testArray = [1, 2, 3, 4, 5, 6];
console.log(sumArray(testArray));









// Problem 5

// Write a JavaScript program to compute the exponent of a number
function exponent(a, n) {

    if (n == 0) {
        // base case
        return 1;
    } else {
        // recursive case
        return a * exponent(a, n - 1);
    }

}

console.log(exponent(8, 2));







// Problem 6

// Write a JavaScript function to get the first Fibonacci numbers
function fibNums(n) {
    if (n == 1) {
        return 0;
    } else if (n == 2) {
        return 1;
    } else {
        return fibNums(n - 1) + fibNums(n - 2);
    }
}

console.log(fibNums(10));





// Problem 7

// Write a JavaScript function to check whether a number is even or not
function isEven(n) {
    if (n == 1) {
        // base case 1
        return false;
    } else if (n == 2) {
        // base case 2
        return true;
    } else {
        // recursive case
        return isEven(n - 2);
    }
}

console.log(isEven(35));






// Problem 8

// Write a JavaScript program for binary search






// Problem 9

// Write a JavaScript program for merge sort