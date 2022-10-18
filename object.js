const Ali = {
    name: "Ali",
    species: "human",
    phrase: () => console.log("I am Ali"),
    talk: () => console.log("khan!!")
  }
  const khan2 = {
    name: "khan2",
    species: "human",
    sayPhrase: () => console.log("Run for your goals!"),
    talk: () => console.log("khan!!")
  }
  const bug = {
    name: "Buggy",
    species: "bug",
    sayPhrase: () => console.log("it is not good!"),
    hide: () => console.log("You can not catch it")
  }
  const bug2 = {
    name: "Erik",
    species: "bug",
    sayPhrase: () => console.log("I drink decaf!"),
    hide: () => console.log("You can't catch me now!")
  }
  const Amani = {
    name: "Amani",
    species: "human",
    sayPhrase: () => console.log("I can cook, write and code!"),
    transform: () => console.log("good!")
  }
  const Shagofa = {
    name: "shagofa",
    species: "human",
    sayPhrase: () => console.log("I am shagofa"),
    transform: () => console.log("talk")
  }
  //accessing methods
  console.log(Ali.name) 
  console.log(bug2.species) 
  Amani.sayPhrase() 
  Shagofa.transform()