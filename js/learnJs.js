/** @format */

const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

const size = fruits.length;
const string = fruits.toString();

const element = fruits.at(3);
console.log(
  `This is my array ${fruits},This is the number of element in my array ${size},This is my array in string ${string},This is the last element ${element}`,
);

const numbers =[ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
console.log(numbers.length)
const addElement = numbers.push(16)
numbers.pop()

numbers.unshift(car={name:"Toyota",price:50000,createdAt:new Date})
// numbers.shift()
console.log(numbers)


const room = []

room[3]="Gedeon"
room[1]="Manzi"
room[2]="Cloude"
room[5]="Joyeuse"
room[4] ="Bikora"
room[0] = "Justin"

console.log(room)


const items = ['banana','apple','orange']
items.unshift('cassava','avocado','mango')
console.log(items)

const word =['s','n','a','c','k','s']
const popResult=word.pop()
word.push('e','s')
const findLetter = word[2]

console.log( findLetter)
console.log(word.toString())

const newWord = word.join("")
console.log(newWord)

const array = ['H', 'e', 'l', 'l', 'o', '  ', 'w', 'o', 'r', 'd', '!']
array.pop()
console.log(array.join(""))
