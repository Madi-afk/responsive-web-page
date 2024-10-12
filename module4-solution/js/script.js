// 1. Define a function to greet the user
function greetUser(name) {
  console.log("Hello, " + name + "!");
}

// 2. Create a Dog constructor function
function Dog(name) {
  this.name = name;
}

// 3. Add a bark method to Dog's prototype
Dog.prototype.bark = function() {
  console.log(this.name + " likes barking! Bark!");
};

// 4. Create an instance of Dog
var myDog = new Dog("Max");

// 5. Immediately Invoked Function Expression (IIFE) to avoid polluting global scope
(function(window) {
  var obj = {}; // Create an object to hold methods

  // Method to show a message
  obj.dreamOn = function() {
      console.log("I want to see the global scope! Let me out!");
  };

  // Expose the object to the global scope
  window.doer = obj;
})(window); // Pass the global window object

// 6. Event listener to greet the user when a button is clicked
document.getElementById("greetButton").addEventListener("click", function() {
  greetUser("Yaakov"); // Replace "Yaakov" with user input if necessary
});

// 7. Output the dog's bark to the console
myDog.bark(); // Outputs: "Max likes barking! Bark!"

// 8. Call the dreamOn method
doer.dreamOn(); // Outputs: "I want to see the global scope! Let me out!"

// 9. Update DOM with a message
function updateOutput(message) {
  document.getElementById("output").innerText = message;
}

// Call to update the output
updateOutput("Welcome to the JavaScript Course!");