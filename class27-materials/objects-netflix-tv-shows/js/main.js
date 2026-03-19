//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods
class Friends{
   constructor(genre,characters,rating,numberOfSeasons){
    this.genre = genre
    this.xters = characters
    this.rate = rating
    this.numOfSeasons = numberOfSeasons
  }
  themeSong(){
    alert("I'll be there for yout")
  }
  joeyfamousWord(){
    console.log('whatchu doinnnn!!')
  }
  phoebeWords(){
    alert('Smellyy cat! ')
  }
}
let friends = new Friends('comedy',6, '4.6', 13)
