lass Bug {
    constructor (name, phrase, power) {
        this.name = name
        this.phrase = phrase
        this.power = power
        this.species = "bug"
    }
    hide = () => console.log("You can't catch me now!")
    sayPhrase = () => console.log(this.phrase)
    attack = () => console.log(`I'm attacking with a power of ${this.power}!`)
}

class Robot {
    constructor (name, phrase, power) {
        this.name = name
        this.phrase = phrase
        this.power = power
        this.species = "robot"
    }
    transform = () => console.log("lets go!")
    sayPhrase = () => console.log(this.phrase)
    attack = () => console.log(`I'm attacking with a power of ${this.power}!`)
}

const bug1 = new Bug("Buggy", "You can not get me", 10)
const Robot1 = new Robot("Tito", "I can cook, swim and write", 15)

console.log(bug1.power) 
Robot1.attack() 



class Alien extends Enemy {
  constructor (name, phrase, power, speed) {
      super(name, phrase, power, speed)
      this.species = "alien"
  }
  fly = () => console.log("flyyy!!")
}


const alien1 = new Alien("Ali", "I'm Ali the alien!", 10, 50)


console.log(alien1.name) 
alien1.sayPhrase() 