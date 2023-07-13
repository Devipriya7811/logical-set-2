//1.Write a JavaScript program to find the sum 
//of all the numbers in an array.
var number = [1,2,3,4,5,6];
var sum = 0;

for(i=0;i<number.length;i++){
    sum += number[i]
}
console.log('your sum is' + ' ' + sum);

//2. Write a JavaScript program to find 
// the largest and smallest elements in an array.
const numArr = [34,6,57,23,5,7,8,93];

const largest = (Math.max(...numArr));
const smallest = (Math.min(...numArr));

console.log("largest num:" + largest);
console.log("smallest num:" + smallest);

// 3.Write a JavaScript program to check if a given number is positive, negative, or
// zero.
const value = 36;

if(value > 0){
    console.log("The value is positive");
} else if (value == 0){
    console.log("The value is zero");
}else{
    console.log("The value is negative");
}

//4.Write a JavaScript program to check if a given string, is a palindrome.
// var string = prompt("Please enter a string");
// var len = string.length;
// var msg = 'It is a palindrome';

// for(var i = 0; i < len/2; i++){
//     if(string[i] != string[len -1 -i]){
//         msg = 'It is not a palindrome';
//     }
// }
// console.log(`${string}:${msg}`);

// 5. Write a JavaScript program to reverse a string without using the built-in reverse ()
// method.
function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
reverseString('hello');

//6.Write a JavaScript conditional statement to find the sign of the product of three
// numbers. Display an alert box with the specified sign.
var x=-7;
var y=3;
var z=2;
if (x>0 && y>0 && z>0)
{
    alert("The sign is +");
}
else if (x<0 && y<0 && z<0)
        {
        console.log("The sign is -");
        }
        else if (x>0 && y<0 && z<0)
        {
        console.log("The sign is +");
        }
        else if (x<0 && y>0 && z<0)
        {
        console.log("The sign is +");
        }
        else
        {
        console.log("The sign is -");
        }
//8.Write a JavaScript conditional statement to sort three numbers. Display an alert
// box to show the results.

var num1 = parseInt(prompt("Enter the first number:"));
var num2 = parseInt(prompt("Enter the second number:"));
var num3 = parseInt(prompt("Enter the third number:"));

var sortedNumbers;
if (num1 >= num2 && num1 >= num3) {
if (num2 >= num3) {
sortedNumbers = num1 + ", " + num2 + ", " + num3;
} else {
sortedNumbers = num1 + ", " + num3 + ", " + num2;
}
} else if (num2 >= num1 && num2 >= num3) {
if (num1 >= num3) {
sortedNumbers = num2 + ", " + num1 + ", " + num3;
} else {
sortedNumbers = num2 + ", " + num3 + ", " + num1;
}
} else {
if (num1 >= num2) {
sortedNumbers = num3 + ", " + num1 + ", " + num2;
} else {
sortedNumbers = num3 + ", " + num2 + ", " + num1;
}
}
alert("Sorted numbers: " + sortedNumbers);

// 9. Write a JavaScript function that returns a string that has letters in alphabetical
// order.

function sortStringAlphabetically(inputString) {
    var characters = inputString.split('');
    var sortedCharacters = characters.sort();
    var sortedString = sortedCharacters.join('');
    return sortedString;
}
var input = 'airline';
var sorted = sortStringAlphabetically(input);
console.log(sorted);

//10.Write a JavaScript program that adds a keydown event listener to a text input to
// detect when the &quot;Enter key&quot; is pressed.

const key = document.getElementById('key');
key.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        console.log('Enter key pressed!');

}
});

//7. Write a JavaScript program to remove items from a drop-down list.
function removeColor(){
    var x = document.getElementById("colorSelect");
    x.remove (x.selectedIndex);
}

