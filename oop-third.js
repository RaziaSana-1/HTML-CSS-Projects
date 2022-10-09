function tipcalculator(bill){
    var percantage;
    if(bill<50){
      percantage=.2;
    }
    else if(bill>=50&&bill<200){
      percantage=.15
    }
    else{
      percantage=.1;
    }
    return percantage*bill;
  
    
  }
  var bills=[124, 48, 268]
  var tips=[tipcalculator (bills[0]),
             tipcalculator(bills[1]),
             tipcalculator(bills[2])
  
  ]
  var finalvalue=[bills[0]+tips[0],
                  bills[1]+tips[1],
                  bills[2]+tips[2]
  
  ]
  console.log(tips,finalvalue);
  
  



