/** @format */

// /** @format */

// const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

// const size = fruits.length;
// const string = fruits.toString();

// const element = fruits.at(3);
// console.log(
//   `This is my array ${fruits},This is the number of element in my array ${size},This is my array in string ${string},This is the last element ${element}`,
// );

// const numbers =[ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(numbers.length)
// const addElement = numbers.push(16)
// numbers.pop()

// numbers.unshift(car={name:"Toyota",price:50000,createdAt:new Date})
// // numbers.shift()
// console.log(numbers)

// const room = []

// room[3]="Gedeon"
// room[1]="Manzi"
// room[2]="Cloude"
// room[5]="Joyeuse"
// room[4] ="Bikora"
// room[0] = "Justin"

// console.log(room)

// const items = ['banana','apple','orange']
// items.unshift('cassava','avocado','mango')
// console.log(items)

// const word =['s','n','a','c','k','s']
// const popResult=word.pop()
// word.push('e','s')
// const findLetter = word[2]

// console.log( findLetter)
// console.log(word.toString())

// const newWord = word.join("")
// console.log(newWord)

// const array = ['H', 'e', 'l', 'l', 'o', '  ', 'w', 'o', 'r', 'd', '!']
// array.pop()
// console.log(array.join(""))

// //  15/07 / 2026

// const today = new Date
// console.log(today)

// console.log(Array.isArray(fruits))

// delete fruits[2]

// console.log(typeof fruits, fruits)

// const boys = ["Manzi","Kenedi","Mpano"]
// const girls = ["Alice","Diane","Divine","Joyeuse","Mutoni"]
// const men = ["Sibomana","Kamana","Kamali"]

// const firtNumber = [5,89,60,73,20,10,3,2,8,61]

// const chlidren = [["Manzi","Kenedi","Mpano"],["Sibomana","Kamana","Kamali"]]
// console.log(chlidren.flat())

// girls.copyWithin(1,3);
// console.log(girls)

// // copyWithin(x, y, z)

// // x is where to past you data copied
// // y is where you start to copy your data
// // z is where to stop copy

// const fruits = ["Apple","Banana","Orange"]
// const vegetables = ["Carrot", "Potato"];
// const snacks = [["Chips", "Popcorn"], ["Cookies"]]

// console.log(Array.isArray(fruits));
// delete fruits[1]
// console.log(fruits)
// const food = fruits.concat(vegetables)
// console.log(food)

// const newFood = food.concat(snacks)
// console.log(newFood)

// const oneLevelArrray = snacks.flat()
// console.log(oneLevelArrray)

// const finalArray = food.concat(oneLevelArrray)
// console.log(finalArray)

const sentance = ['Tugendane', ' ', 'nuriya', ' ', 'muntu', '?'];
sentance.pop();
sentance.push('.');
console.log(sentance.join(''));

const array1 = ['one', 'two', 'three'];
array1.shift();
const array2 = ['one', 2, 3];
const finalArray = array2.concat(array1);
console.log(finalArray);

const set1 = [
  ['pen', 'ruler', 'gome'],
  ['book', 'notbook'],
];
const removeSubSet = set1.flat();
const set2 = ['shoes', 'shirt'];

const unionSet = removeSubSet.concat(set2);
console.log(unionSet);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.pop();
numbers.shift();
console.log(numbers);

const people = {
  student: 'Habimana',
  farmer: 'Gakire',
  entrepreneur: 'Kamali',
  leader: 'Mupenzi',
};
console.log(
  `We eat because of production of ${people.farmer} 
  and our security comes from the efforts of our leader,
  ${people.leader}`,
);
