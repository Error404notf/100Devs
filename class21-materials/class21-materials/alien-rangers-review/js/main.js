//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let tvshows = ['Friends','Desperate HouseWives', 'The Sopranos']
for(let tvshow of tvshows){
  console.log(tvshow);
}
//Create and array of numbers
let newarr = [1,2,3,5,6]
//Return a new array of numbers that includes every even number from the previous Arrays
function array(){
  let arr = newarr.filter(n => n % 2 == 0)
  console.log(arr);
}
array()
//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
function arrayNum(){
    let num = newarr.sort((a,b)=> a - b)
    alert(num[1] + num[num.length-2])
}
arrayNum()