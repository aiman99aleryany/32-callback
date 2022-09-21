// starting from the exercise n. 31, we want to print the "hello" "name" strings after one second. 
//in order to achieve this, we can use the settimeout() javascript function. this function takes in two parameters: the first one is a function, 
//the second one is the delay time.

function sayHelloName(func, delayTime) {
  let name = "Aiman"
  setTimeout(() => func(name), delayTime); // we use arrow function here which contains the call for the "printName" function, because I can't pass the callback function with an argument to the setTimeout function
  console.log("Hello");
}

function printName(name) {
  console.log(name);
}

sayHelloName(printName, 1000);
