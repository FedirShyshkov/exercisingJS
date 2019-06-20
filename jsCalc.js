var calculator = {
  a: 0,
  b: 0,
  read: function() {
    a = parseFloat(prompt("please input number a", "0"));
    b = parseFloat(prompt("please input number b", "0"));
  },
  sum: function() {
    return a + b;
  },
  mul: function() {
    return a * b;
  }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
