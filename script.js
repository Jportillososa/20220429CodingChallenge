// 
// //1 Convert the following function into an arrow function named "arrowMyFunction".
// const myFunction = function (num1, num2) {
//     return num1 + num2;
// };
// 

//ANSWER FOR PART 1
const arrowMyFunctions = (number1, number2) => number1 + number2;
console.log(arrowMyFunctions(24, 32));


//-------below this line is another way to do it---
// let numbers = [21, 22]
// const arrowMyFunction = numbers.reduce((total, numbers) => total + numbers, 0);
// console.log(arrowMyFunction)





//------2 Convert the following function into a one-lined arrow function without a return statement (the return is implicit) . Name the function arrowAdd100
// const add100 = function (money) {
//     return money + 100;
// };

//ANSWER FOR PART 2
const arrowAdd100 = (money = 1000) => money + 100;
console.log(arrowAdd100());




// //3 Create an arrow function that takes TWO arguments, a string and a single letter.  The function will count the number of times the specified letter occurs in the string. **Not case sensitive
// Examples:
// countLetters('Hello my name is John', 'i') returns 1
// countLetters('Hello my name is John', 'h') returns 2
// countLetters('We love this city a lot, sometimes', 'e') returns 4
//     * /


//ANSWER FOR PART 3
function char_count(str, letter) {
    var letter_Count = 0;
    for (var position = 0; position < str.length; position++) {
        if (str.charAt(position) == letter) {
            letter_Count += 1;
        }
    }
    return letter_Count;
}

console.log(char_count('Hello my name is John', 'i'));
console.log(char_count('Hello my name is John', 'h'));
console.log(char_count('We love this city a lot, sometimes', 'e'));






//jodis example before challnge

// for () {
//     if () {
//         log to console("fizz");
//     }
//     else if () {
//         log to console(buzz)
//     }
//     else if () {
//         log to console(buzz)
//     }
//     else {
//         log to console(i)
//     }
// } //to list numbers
// 
