

function Sumation() {
  const x = 5;
  const y = 10;
  const z = x + y; 
  const average = z/2
  return average;
}
console.log(Sumation())


function hello() {
    return 'Hello guys'
}
console.log(hello())


function greetUser(){
  const personalName = 'Gedeon'

  function getName(){
     return personalName
  }
  
   const sentence = `Hello ${getName()}! Welcome to JavaScript`
  return sentence
}
console.log(greetUser())



function multiply1() {
  const a = 4
  const b = 5
  return a * b;
}
console.log(multiply1())



function multiply(a, b,c) {
  return a * b/c;
}
console.log(multiply(4, 5,2))


function userData(name,email,phone,id){
  const user={
    Names:name,
    Email:email,
    PhoneNumber:phone,
    ID:id
  }
  return user

}

console.log(userData("Twizerimana Gedeon","gedeontwizerimana6@gmail.com","0783801966",9123))
console.log(userData("Rushema Cloude","cloude@gmail.com","54356247889",1234))


function calculateAverage(){
  const a= 2
  const b = 5
  const c= 10

  function sumOfNumber(){
    const sum = a+b+c
    return sum
  }
  
  const summationResult = sumOfNumber()

  const avg = summationResult/3
  return avg
}
console.log(calculateAverage())


function calculateTotal(price){
   
  function calculateTax(){
     const tax = price*10/100
     return tax
  }

  return price + calculateTax()
}

console.log(calculateTotal(100))


function checkGrade(mark){
   
  function getGrade(){
     if(mark>=80){
      return 'A'
     }else if(mark>=70 && mark <=79){
      return 'B'
     }else if(mark>=60 && mark <=69){
      return 'C'
     }else if(mark<60){
      return 'D'
     }
  }

  return getGrade()
}

console.log(checkGrade(90))
console.log(checkGrade(20))
console.log(checkGrade(65))
console.log(checkGrade(32))


function checkNumber(number){
   if(number > 0){
    return "Positive number"
   }else if(number < 0){
    return "Negative number"
   }else{
    return "Zoro"
   }
}
console.log(checkNumber(5))
console.log(checkNumber(-2))
console.log(checkNumber(0))


function checkVotingAge(age){
   if(age >= 18){
    return "You are eligible to vote."
   }else{
    return "You are not eligible to vote."
   }
}

console.log(checkVotingAge(18))
console.log(checkVotingAge(19))
console.log(checkVotingAge(16))

function checkResult(mark){
  if( mark >= 50){
    return "You passed."
  }else{
    return "You failed."
  }
}

console.log(checkResult())

