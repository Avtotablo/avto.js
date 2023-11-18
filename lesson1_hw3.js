//Andrii Shvets. Homework 3 (JavaScript. Lesson 1)
/* Task - 1
Create a variable with the name of our planet.  */
let planet;
planet = 'Earth';
console.log(planet);

/* Task - 2
Create a variable to store the name of the current site visitor.*/
var visitors = 'visitor';
visitors = 'Andrii';
console.log(visitors);

/* Task - 3
Create "var" variable named myAge and set its value equal to 30 */
var myAge;
myAge = 30
console.log('My Age is: ' + myAge + ' years old');

/* Task - 4
Create "let" variable named myName and set its value equal to any name */
let myName;
myName = 'Anykey';
console.log('Any name: ' + myName);

/* Task - 5
Create "const" variable named myBool and set its value equal to false */
const myBool = false;
console.log(myBool)

/* Task - 6
Display the sum of 15 + 30, using two variables: x and y. */
var x;
var y;
x = 15;
y = 30;
var res = x + y;
console.log('Amount via new variable res: ' + res);
console.log('Amount without variable: ' + (x+y));

/* Task - 7
Create variable named myUndefined and set its value equal to undefined */
var myUndefined
myUndefined = undefined;
console.log('Variable myUndefined: ' + myUndefined);

/* Task - 8
Create variable named dividedNumber and set its value equal myAge divided by 2
 * NOTE: you should use myAge variable here */
var myAge = 47;
var dividedNumber;
dividedNumber = myAge / 2;
console.log('My Age divided by 2 is: ' + dividedNumber);

/* Task - 9
Create variable named multipleNumber and set its value equal myAge multiply by 2 */
var myAge = 47;
var multipleNumber = myAge * 2;
console.log('My age multiplied by 2: ' + multipleNumber);

/* Task - 10
Create variable named mySentence and set its value to be myName, then goes space and word is, then space and myAge
NOTE: Result should be something like "Michael is 30"  */
var mySentence = myName;
var myName = 'Anrey';
var myAge = 47;
mySentence = myName + ' is ' + myAge;
console.log(mySentence);

/* Task - 11
Create variable named myUndefined2 and set its value equal to undefined without "undefined" word usage */
var myUndefined;
console.log(myUndefined);

/* Task - 12
Declare two variables: admin and name. Assign the value "Bill Gates" to the variable name. Copy the value from the variable name to admin.
Print the value of the admin variable. */
var admin;
var name = 'Bill Gates';
admin = name;
console.log('Admin is: ' + admin);
//Post factum