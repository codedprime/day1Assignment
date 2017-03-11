function aritGeo(A){
  var i = A.length;
if ((typeof A !== 'object') || (typeof A[0] =="string") ) {
    return ('invalid');
        }
  
if (i===0)
{
  return 0;
}
 else if ((A[i-1] - A[i-2]) == (A[i-2] - A[i-3]))
 {
   return 'Arithmetic'
 }
 else if (Math.abs((A[i-1] / A[i-2])) == Math.abs((A[i-2] / A[i-3])))
 {
   return 'Geometric'
 }
 
 else
 {
   return -1
 }
}