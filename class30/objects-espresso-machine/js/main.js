//Create an espresso machine class that makes machines with 4 properties and 3 methods

class ExpressoMachine {     // note: no parenthesis here
  // Constructor
  constructor(make, model, color, price) {
    // Properties
    this.make = make;
    this.model = model;
    this.color = color;
    this.price = price;
  }

  // Method
  turnOn() {
    console.log('Good day, I am now on!');
  }

  steam() {
    console.log('Did it just get hot in here?');
  }

  brew() {
    console.log('Good stuff coming your way.');
  }
}

let gaggia = new ExpressoMachine('red','Gaggia','Classic Pro','400')