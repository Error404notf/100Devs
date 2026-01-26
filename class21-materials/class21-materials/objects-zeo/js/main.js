//Create a stopwatch object that has four properties and three methods
const stopwatch = {
  name: 'stoppie',
  color:'blue',
  brand: 'watchie',
  text:'red',
  watch: function(w){
    console.log('the time is:' + this.brand)
  },
  colour: function(c){
    console.log('The color of this watch is:'+ this.color)
  },
  owner: function(o){
    console.log('My watch is' + this.name)
  }
}