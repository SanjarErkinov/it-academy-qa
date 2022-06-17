let arr = [1,3,4,5] 
 
function test(number) { 
    return arr.filter(num => number % num === 0) 
} 
console.log(test(5));
