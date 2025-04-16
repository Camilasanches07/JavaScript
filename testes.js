/* Add the equality operator to the indicated line so that the function will return the string Equal when val is equivalent to 12.

1. testEqual(10) should return the string Not Equal
2. testEqual(12) should return the string Equal
3. testEqual("12") should return the string Equal
4. You should use the == operator */

// Setup
function testEqual(val) {
  if (val == 12) { 
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);
console.log(testEqual(10))