console.log("Hello World!");
// Create a JS class called Inventory with the following properties:
// - cpm - cost per mille
// - audeince - audience
class Inventory {
    constructor(cpm, audience) {
      this.cpm = cpm;
      this.audience = audience;
    }
}

// Function to calculate the total cost from an array of Inventory objects
function calculateCost(inventory) {
    return inventory.reduce((total, item) => {
      return total + (item.cpm * item.audience);
    }, 0);
}

// Create an array of Inventory objects
const inventory = [
    new Inventory(100, 1000),
    new Inventory(200, 2000),
    new Inventory(300, 3000),
    new Inventory(400, 4000),
];
  
// Calculate the total cost
function test() {
    alert(calculateCost(inventory));
}