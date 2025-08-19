// Section 1
// Exercise 1
var firstName = "Elrohi"
let lastName = "filmon"
const pi = 3.14;

console.log(firstName,lastName,pi)

// Variable Scope
function scopeDemo(){
    var scopedvar = 10;
    let scopedlet = 50;
    if(scopedlet < 10){
        let scopedlet = 10;
    }else{
        console.log(scopedlet);
    }
    console.log(scopedlet);
    console.log(scopedvar);
}
// console.log(scopedlet);
// console.log(scopedvar);
scopeDemo()

// Statements and Operator 
for(let i = 1;i<=5;i++){
    i%2==0?console.log('even'):console.log("odd")
}

// Section 2: Functions and object 
// exercise 4 fn declaration and arrow functions 

function square(x){
    return x*x;
}
// let  square = function(x){
//     return x*x;
// }
// let square = (x)=>{
//     return x*x;
// }

console.log(square(2))
console.log(square(4))
console.log(square(8))

// exercise 5 

let createGreeting=(name,greeting)=>{
    this.name = name;
    this.sayHi=()=>{console.log(`Hi there ${this.name}`)}
}
// exercise 5 

// let user = {
//   name:"Elrohi",
//   sayHi:()=>{return `Hey there ${this.name}`}
// }

let user=function(name){
    this.name = name;
    this.sayHi=()=>{return `Hi there ${this.name}`}
}

let us = new user("Elrohi");
console.log(us.sayHi())

// Exercise 7: Objects and Returning Objects
let createStudent = (name,grades)=>{
    this.name = name;
    this.grades = grades;
}




// 1. Even or Odd
function evenOrOdd(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}
console.log(evenOrOdd(3)); // Odd
console.log(evenOrOdd(4)); // Even

// 2. Reverse a Word
function reverseWord(word) {
  return word.split('').reverse().join('');
}
console.log(reverseWord("elrohi")); // ihorle

// 3. Find the Largest Number
function findLargest(arr) {
  return Math.max(...arr);
}
console.log(findLargest([1, 5, 2, 9, 3])); // 9

// 4. Count Vowels
function countVowels(str) {
  let count = 0;
  const vowels = "aeiouAEIOU";
  for (let char of str) {
    if (vowels.includes(char)) count++;
  }
  return count;
}
console.log(countVowels("elrohi")); // 3

// 5. Multiplication Table
function multiplicationTable(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}
multiplicationTable(5);

// 6. Remove Duplicates
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 3, 4, 1, 2])); // [1,2,3,4]

// 7. Sum of Digits
function sumOfDigits(num) {
  return num.toString().split('').reduce((sum, digit) => sum + Number(digit), 0);
}
console.log(sumOfDigits(1234)); // 10

// 8. Palindrome Checker
function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("elrohi")); // false

// 9. Longest Word in a Sentence
function longestWord(sentence) {
  const words = sentence.split(' ');
  return words.reduce((longest, current) => current.length > longest.length ? current : longest, "");
}
console.log(longestWord("The quick brown fox jumps over the lazy dog")); // jumps

// 10. Frequency Counter
function frequencyCounter(str) {
  const freq = {};
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  return freq;
}
console.log(frequencyCounter("elrohi")); // { e: 1, l: 1, r: 1, o: 1, h: 1, i: 1 }
