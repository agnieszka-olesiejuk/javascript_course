.//
function getFirstValue(arr) {
	return arr[0];
}

------------------------------------------------
function addition(a, b) {
	var addition = (a + b);
    
    }
    
  return[addition];
------------------------------------------------
    function addition(num) {
	return ++num;
}
-------------------------------------------------
ffunction lessThanOrEqualToZero(num) {
if (num <= 0) { 
	return true;
} else {
		return false;
	}
}
lessThanOrEqualToZero(-5);

-----------------------------------------------
    function isEvenOrOdd(num) {
  if (num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
----------------------------------------------------------
function wordCount (str){
    return str.split(" ").length;
}
console.log(worldCount("policz slowa"));
-----------------------------------------------------------
   function findSmallestNum(arr) {

return arr.reduce(function(a, b){
    return Math.min(a, b);
  })
}

findSmallestNum([34, 15, 88, 2]);
findSmallestNum([34, -345, -1, 100]);
findSmallestNum([-76, 1.345, 1, 0]);
findSmallestNum([0.4356, 0.8795, 0.5435, -0.9999]);
findSmallestNum([7, 7, 7]);

---------------------------------------------
//