module.exports = {
    findMinMax : function (A){
        var i;
        var min = A[0];
        var max = A[0]; 

        if ((typeof A !== 'object') || (typeof A[0] =="string") ) {      
            return ('invalid');          
        }
        
        for (i in A){
            if (A[i] >= max){
                max = A[i];
        }      
        
            if (A[i] <= min){ 
                min = A[i];
          }
          
        }
        if (min == max) {
            return ([min]);
        }      
        else{      
           return ([min,max]);
        }
    }
}