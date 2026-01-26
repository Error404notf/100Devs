//Create a mouse object that has four properties and three methods
// let mouse = {
//   name: 'Jerry',
//   color: 'orange',
//   tail: '4cm',
//   favFood: 'cheese',
//   enemy: function(animal){
//     console.log('if you see' + animal +  "run")
//   },
//   walk: function(movement){
//     console.log('the mouse walked' + movement + 'times')
//   },
//   sleep: function(habitat){
//     alert('sleeps at' + habitat)
//   }
// }

let mouse = {
  color: 'blue',
  brand: 'hp',
  make: 'z-45',
  name: 'Logitech',
  dclick: function(){
    console.log('click click')
  },
  slide: () => {
    console.log('slide, slide, slide')
  },
  rclick: () => {
    console.log('right click')
  }
}