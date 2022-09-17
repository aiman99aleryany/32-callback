// starting from the exercise n. 31, we want to print the "hello" "name" strings after one second. in order to achieve this, we can use the settimeout() javascript function. this function takes in two parameters: the first one is a function, the second one is the delay time.

function sayHelloName(func, delayTime) {
  setTimeout(func, delayTime);
  console.log("Hello");
}

function printName(name) {
  // name will be undefined here :)
  console.log(name);
}

sayHelloName(printName, 1000);
