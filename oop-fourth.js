var john={
    fullname: 'john',
    mass:92,
    hight:1.95,
   BMI:function(hight,mass){
     this.bmi=this.mass/(this.hight*this.hight)
     return this.bmi;
    }
 
  }
  var Mark={
    fullname: 'Mark',
    mass:78,
    hight:1.69,
    BMI:function(hight,mass){
     this.bmi=this.mass/(this.hight*this.hight)
     return this.bmi;
    }
 
  }
  john.BMI()
  Mark.BMI()
  console.log(john,Mark)
 
 
 
 
 var john=['john', 'smith', 1999, 'designer', 'false', 'blue']
 for(var i=5; i>=0;i--){
 if(typeof john[i] !== 'string') continue;
 console.log(john[i]);
 }
 var john=['john', 'smith', 1999, 'designer', 'false', 'blue']
 for(var i=5; i>=0;i--){
 if(typeof john[i] !== 'string') break;
 console.log(john[i]);
 }