/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window / Global Object Binding
* 2. Implicit Binding
* 3. New Binding
* 4. Explicit Binding
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function thisWindow(window){
  console.log(this);
  return window
};
 thisWindow();

// Principle 2

// code example for Implicit Binding

const greeting ={
  greet: "hello",
  speak: function(myName){
    return `${this.greet}, my name ${myName}`
  }
};

greeting.speak("tatyana");

// Principle 3

// code example for New Binding

function painting(painter){
  this.process = "Happy Trees";
  this.painter = painter;
  this.speak = function (){
    if (painter === "Bob Ross")
    {return ` ${this.painter} likes using ${this.process}`;
    }else {return `${this.painter} does not paint ${this.process}`}

  };
}

const bob = new painting("Bob Ross");


bob.speak();



// Principle 4

// code example for Explicit Binding

  const ross = {
    "name": "Bob Ross",
    "style": "realism"
  }

   const modrian = {
    "name": "Modrian",
    "style": "Abstract"
  }

  function speak (artist){
    this.process = "Happy Trees";
    if (this.name === "Bob Ross")
    {return ` ${this.name} likes using ${this.process}`;
    }else {return `${this.name} does not paint ${this.process}`}

  };


console.log(speak.call(ross))
console.log(speak.call(modrian))
