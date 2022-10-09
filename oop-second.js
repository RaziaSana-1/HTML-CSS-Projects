var johnsscore = 89+ 120 +103/3;
var mikescore = 116 + 94 + 123/3;
console.log('  johnteam average '+johnsscore+ " ",'  miketeam average' +mikescore )
 if(johnsscore>mikescore){
  console.log('john team is winnner with the average'+johnsscore);
 }
 else{
 console.log ('mike team is winner with the average '+mikescore);
 }
 var johnsscore = 89+120+50/3;
 var mikescore = 120+89+50/3;
 console.log('  johnteam average '+johnsscore+ " ",'  miketeam average' +mikescore )
 
 if(johnsscore>mikescore){
  console.log('john team is winner');
  
 }
 else if (johnsscore==mikescore){
  console.log('it is draw both teams are winner');
 }
 else{
  console.log('mike team is winner');
 }

 var johnsscore = 89+ 120 +103/3;
 var mikescore = 116 + 94 + 123/3;
 var maryscore = 97 + 134 + 105/3;

   if(johnsscore>mikescore&&johnsscore>maryscore){
  console.log('john team is winner');
  
 }
 else if (mikescore>johnsscore&&mikescore>maryscore){
  console.log('mike is winner');
 }
 else if( maryscore>johnsscore&&maryscore>mikescore){
  console.log('mary is winner');

 }
 else{console.log('it is draw');} 
 function check(n){
  if(!(n >= -500 && n <=500)){
    throw new RangeError("the argument must be 100 - 500")

  }
 
 }
 try {
  check(2000);
 } catch(error){
  if (error instanceof RangeError){

  }
  
  }