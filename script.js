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

const arrowAdd100 = (money = 1000) => money + 100;
console.log(arrowAdd100());

// //3 Create an arrow function that takes TWO arguments, a string and a single letter.  The function will count the number of times the specified letter occurs in the string. **Not case sensitive
// Examples:
// countLetters('Hello my name is John', 'i') returns 1
// countLetters('Hello my name is John', 'h') returns 2
// countLetters('We love this city a lot, sometimes', 'e') returns 4
//     * /

// const countLetters = ("Hello my name is John", "i")
// for (let i = 0; i < countLetters.length; i++) { //for loop like example used above
//     if (countLetters[i] == 1) {     //if statement
//         letterI.push(countLetters[i]);
//     }
// }
// console.log(countLetters);

// const countLetters2 = ("Hello my name is John", "h")
// for (let i = 0; i < countLetters2.length; i++) { //for loop like example used above
//     if (countLetters2[i] == 1) {     //if statement
//         letterI.push(countLetters2[i]);
//     }
// }
// console.log(countLetters2);

const letterI = string =>
    string.split('').reduce((freqDict, char) => {
        freqDict[char] = (freqDict[char] || 0) + 1;
        return freqDict;
    }, {})

console.log(letterI("Hello my name is John", "i"));

// const countLetterI = countLetterI(string(countLetters) == "i"  => 1);

// console.log(countLetterI);

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
