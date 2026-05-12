//Create an espresso machine class constructor that makes machines with 4 properties and 3 methods
class Espresso{
  constructor(color,brand,material,price){
    this.color = color;
    this.brand = brand;
    this.material = material;
    this.price = price; 
  }
  whisk = function(){
    console.log('whiskiiing')
  }
  speed = function(){
    console.log('whiplash')
  }
  running = function(){
    console.log('running')
  }
 
}
const espresso = new Espresso('red','mika','aluminum','450ksh')
console.log(espresso)