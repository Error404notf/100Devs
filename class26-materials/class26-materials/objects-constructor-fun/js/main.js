//Create a constructor with 4 properties and 3 methods
function Pizza(price,slices,toppings,flavour){
  this.pizzaPrice = price
  this.pizzaSlices= slices
  this.pizzaToppings = toppings
  this.pizzaFlavor = flavour

  this.deliveryTime = function(){
    console.log("...Waiting")
  }
  this.burnedmouth = function(){
    console.log('hellla tastyyyy')
  }
  this.eat = function(){
    alert('Yeeeeeet this is amazing!')
  }
}
let pizza = new Pizza('950ksh', 4, 'cheese', 'chicken')