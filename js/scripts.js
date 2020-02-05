var add = function(number1, number2) {
	return number1 + number2;
};

var sub = function(number1, number2) {
  return number1 - number2;
};

var mult = function(number1, number2) {
  return number1 * number2;
};

var div = function(number1, number2) {
  return number1 / number2;
};

var rem = function(number1, number2) {
  return number1 % number2;
};


var number1 = parseFloat(prompt("Enter first number:"));
var number2 = parseFloat(prompt("Enter second number:"))

var result = rem(number1, number2)
alert("The solution is " + result);