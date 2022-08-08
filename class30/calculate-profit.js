// PROCEDURAL CODE: calculate profit when working with a client

let hourlyRate = 250
let hours = 160
let taxRate = .35

function calculateProfit(rate, numOfHours, taxes){
  return rate * numOfHours * (1 - taxes)
}

function holdForTaxes(profitMade){
  return hourlyRate * hours - profitMade
}

let profit = calculateProfit(hourlyRate, hours, taxRate)

let taxesHeld = holdForTaxes(profit)

console.log(profit)

console.log(taxesHeld)

// OOP

// this would be in a Class...
let seriousBusinessPerson = {
  hourlyRate: 250,
  hours: 160,
  taxRate: .35,
  calculateProfit: function() {
    return this.hourlyRate * this.hours * (1 - this.taxRate)
  }
}

// Better
function AgencyContractor(hourlyRate, hours, taxRate){
  this.hours = hours
  this.taxRate = taxRate
  let rate = hourlyRate
  let calculateProfit = function() {
    return rate * this.hours * (1 - this.taxRate)
  }
  this.invoiceClient = function(){
    return `Your invoice total is ${rate * this.hours}`
  }
}

let leon = new AgencyContractor(250,160,.35)
console.log( leon.invoiceClient() ) //40000
console.log( leon.hourlyRate ) //undefined
console.log( leon.calculateProfit() )
//Uncaught TypeError: leon.calculateProfit is not a function