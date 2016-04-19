// console.log(process.argv);
// Access the node command line, returning an array with the arguments


// My solution
function sumArguments(arrayArg) {
  var sum = 0;
  for(var i = 2; i < arrayArg.length; i++) {
    sum += Number(arrayArg[i]);
  }  
  return sum;
}

console.log(sumArguments(process.argv));

// Official solution 
/*
var result = 0  

 for (var i = 2; i < process.argv.length; i++)  
 result += Number(process.argv[i])  
   
 console.log(result)  
*/
