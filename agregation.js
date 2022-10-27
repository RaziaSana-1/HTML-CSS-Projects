class student {
    constructor(name) {
      this.name = name;
    }
    eat() {
        
    }
  }
  class Author extends student {
    constructor(name, genre) {
      super(name);
      this.genre = genre;
    }
    eat() {
      super.eat();
    }
    read() {
      console.log(`${super.name} is reading `)
    }
  }