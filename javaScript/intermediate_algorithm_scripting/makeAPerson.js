document.getElementById('unitTitle').innerHTML = "Intermediate Algorithm Scripting";
document.getElementById('pageTitle').innerHTML = "Make A Person";

// Challenge
// Fill in the object constructor with the following methods below:

// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)

// Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.


// My Solution
var Person = function (firstAndLast) {
    let arr = firstAndLast.split(" ");
    
    this.setFirstName = function (arg) {
        arr[0] = arg;
    }
    this.getFirstName = function () {
        return arr[0];
    }
    this.setLastName = function (arg) {
        arr[1] = arg;
    }
    this.getLastName = function () {
        return arr[1];
    }
    this.setFullName = function (arg) {
        arr = arg.split(" ");
    }
    this.getFullName = function () {
        return arr[0] + " " + arr[1];
    };
    return firstAndLast;
};

// Their Solution
// var Person = function(firstAndLast) {
//     var fullName = firstAndLast;
  
//     this.getFirstName = function() {
//       return fullName.split(" ")[0];
//     };
  
//     this.getLastName = function() {
//       return fullName.split(" ")[1];
//     };
  
//     this.getFullName = function() {
//       return fullName;
//     };
  
//     this.setFirstName = function(name) {
//       fullName = name + " " + fullName.split(" ")[1];
//     };
  
//     this.setLastName = function(name) {
//       fullName = fullName.split(" ")[0] + " " + name;
//     };
  
//     this.setFullName = function(name) {
//       fullName = name;
//     };
//   };


// Testing
var bob = new Person('Bob Ross');
bob.getFullName();
// console.log(bob.getFullName());
console.log(Object.keys(bob));
console.log("1. " + Object.keys(bob).length); // 6
console.log("2. " + (bob instanceof Person)); // true
console.log("3. " + bob.firstName); // undefined
console.log("4. " + bob.lastName); // undefined
console.log("5. " + bob.getFirstName()); // "Bob"
console.log("6. " + bob.getLastName()); // "Ross"
console.log("7. " + bob.getFullName()); // "Bob Ross"
bob.setFirstName("Haskell");
console.log("8. " + bob.getFullName()); // "Haskell Ross"
bob.setLastName("Curry");
console.log("9. " + bob.getFullName()); // "Haskell Curry"
bob.setFullName("Haskell Curry");
console.log("10. " + bob.getFirstName()); // "Haskell"
console.log("11. " + bob.getLastName()); // "Curry"

