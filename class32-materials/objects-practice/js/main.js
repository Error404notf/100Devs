// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism 
class Soap{
  #ingredients 
  #price
  constructor(ingredients,price,name,sp){
    this.#ingredients = ingredients
    this.#price = price
    this._name = name
    this._sp = sp
  }
  get name(){
    return this._name;
  }
  get sp(){
    return this._sp;
  }
  get ingredients(){
    return this.#ingredients;
  }
  get price(){
    return this.#price;
  }
}
class Handwashing extends Soap{
  constructor(ingredients,price,name,sp,rating){
    super(ingredients,price,name,sp)
    this.rating = rating
  }
  showName(){
    super.name
    console.log(`The soap is ${this._name}`)
  }
  showSp(){
    super.sp
    console.log(`The selling price is ${this._sp} per litre`)
  }
}
class Jik extends Handwashing{
  constructor(ingredients,price,name,sp,rating,color){
    super(ingredients,price,name,sp,rating)
    this.color = color;
  }
  name(){
    super.showName()
  }
  sp(){
    super.showSp()
  }
}
class Harpic extends Jik{
  constructor(ingredients,price,name,sp,rating,color,packaging){
    super(ingredients,price,name,sp,rating,color)
    this.packaging = packaging
  }
  name(){
    super.showName()
  }
  sp(){
    super.showSp()
  }
}

const handwash = new Handwashing(7,230,'DETTOL',45,4.2)
const jik = new Jik(9,340,'JIK',60,4.5,'Colored')
const harpic = new Harpic(10,45,'HARPIC',65,4.32,'Blue','Plastic bottle')
console.log(handwash)
console.log(jik)
console.log(harpic)
const soap = [handwash,jik,harpic]
for(let s of soap){
  s.showSp()
  s.showName()
}
      




















// class Contractor {
//   constructor(name,price,role,languages){
//     this._name = name;
//     this.price = price;
//     this._role = role;
//     this.languages = languages
//   }
//   get role (){
//     return this._role;
//   }
//   startOff(){
//     console.log('Contract starts with 50% deposit')
//   }
// }
// class Frontend extends Contractor{
//   constructor(name,price,role,languages,duration){
//     super(name,price,role,languages)
//     this.duration = duration
//     super.startOff
//   }
  
// }
// class Backend extends Contractor{
//   constructor(name,price,role,languages,duration){
//     super(name,price,role,languages)
//     this.duration = duration
//     super.startOff
//   }
  
// }
// const frontend = new Frontend('Neon','90000ksh','JS,React.js,Next.js,TS','3 MONTHS')
// const backend = new Backend('Wanjiru','Backend','Project Manager','Asana,Atlassina',4)

// let agency = [frontend,backend]
// for(a of agency){
//   a.startOff()
// }























// class Contractor{
//     constructor(name,role){
//         this._name = name
//         this._role = role
//     }
//     get name(){
//         return this._name
//     }
//     get role(){
//         return this._role
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs!`)
//     }
// }
// class Front extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// class Back extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// let bob = new Contractor('Bob','Front-end')
// let simba = new Front('Simba','Front-end','React')
// let machi = new Back('The Machine','Back-end','Node')

// let agency = [bob,simba,machi]

// for(person of agency){
//     person.sayHello()
// }
