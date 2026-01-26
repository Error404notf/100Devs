// //Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
// function MakeStreetFighter(streetfighterName,streetfigherXP,streetfighterweakneses,streetfighterstrengh){
//   this.fighterName = streetfighterName
//   this.fighterXP = streetfigherXP
//   this.fighterweakness = streetfighterweakneses
//   this.fighterstrength = streetfighterstrengh
//   this.win = function(){
//     alert('you will see the wrath of ${this.fighterName}')
//   }
//   this.speak = function(){
//     alert("let's fight")
//   }
//   this.notallowed = function(){
//     alert('Do not feed me ${this.fighterweakness}')
//   }
// }
// let sfname1 = new MakeStreetFighter('Nakamoto','500XP','Onions', 'Meat')

function MakeStreetFighter(streetfighername,streetfighterstrength,streetfighterxp,streetfighterweakness){
  this.fightername = streetfighername
  this.fighterstrength = streetfighterstrength
  this.fighterxp = streetfighterxp
  this.fighterweakness = streetfighterweakness
  this.win = function (){
    alert('${this.fightername} has won the game')
  }
  this.notallowed = function(){
    alert('${this.fighterweakness} is not allowed ' )
  }
  this.fight = function(){
    alert('feel the wrath of ${this.strength}')
  }
}
let sfcha1 = new MakeStreetFighter('Nakamoto','500XP','Onions', 'kick')
console.log(sfcha1)