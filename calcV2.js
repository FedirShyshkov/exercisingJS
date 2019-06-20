function Calculator() {
  this.calculate = function(str) {
    var stringArray = str.split(" ");
    return this[stringArray[1]](
      parseFloat(stringArray[0]),
      parseFloat(stringArray[2])
    );
  };
  this["+"] = function(a, b) {
    return a + b;
  };
  this.addMethod = function(sign, func) {
    this[sign] = func;
  };
}

var calc = new Calculator();

console.log(calc.calculate("3 + 7")); // 10
var powerCalc = new Calculator();
powerCalc.addMethod("*", function(a, b) {
  return a * b;
});
powerCalc.addMethod("/", function(a, b) {
  return a / b;
});
powerCalc.addMethod("**", function(a, b) {
  return Math.pow(a, b);
});

var result = powerCalc.calculate("2 ** 3");
console.log(result); // 8
