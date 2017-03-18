module.exports = {
    fizzBuzz: function (A) {   
        var answer = '';
        if ((typeof A =='string') || (A===0))  {
            return ('invalid');
        }

        if (A%3 === 0 ){            
            answer=  'Fizz';
        }
        if(A%5 === 0 ){            
            answer += 'Buzz'          
        }            
        if  ((A%3 !==0) && (A%5 !==0)){            
            return (A)
        } 
        else if  ((A%3 ===0) || (A%5 ===0)){            
           return (answer)
        }            
        else{
          return (A)
        }   
    }
}        


