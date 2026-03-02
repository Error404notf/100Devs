//Create a pizza object that has four properties and three methods
let pizza = {}
pizza.price = '900ksh'
pizza.slices = '8'
pizza.size = 'medium'
pizza.flavor = 'chicken'
pizza.taste = function(){
  alert('amazing chicken pizza')
}
pizza.eat = function(){
  console.log('I eat 5 slices of pizza')
}
pizza.spicy = function(){
  alert('The pizza is mildy spicy')
}