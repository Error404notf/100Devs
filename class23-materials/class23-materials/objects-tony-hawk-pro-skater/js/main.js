//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods
function TonySkater(name,venue,color,price){
  this.name = name
  this.venue = venue
  this.color = color
  this.price = price
  this.skate = function(){
    console.log('skating')
  }
  this.wheels = function(){
    console.log("the wheels functions well")
  }
  this.distance = function(){
    console.log(`The ${this.name} made 40km`)
  }
}
let person1 = new TonySkater('Paris','The rink','white','35000ksh')