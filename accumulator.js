function Accumulator(startingValue) {
  this.value = parseFloat(startingValue);

  this.read = () => {
    this.value += parseFloat(
      prompt("Please input next value for accumulation", "0")
    );
  };
}

var accumulator = new Accumulator(1); // начальное значение 1
accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению
alert(accumulator.value); // выведет текущее значение

function accumulator(startingValue) {
  var f = {};

  f.value = startingValue;
  f.read = function() {
    this.value += parseFloat(
      prompt("Please input next value for accumulation", "0")
    );
  };

  return f;
}

var accumulator1 = accumulator(1); // начальное значение 1
accumulator1.read(); // прибавит ввод prompt к текущему значению
accumulator1.read(); // прибавит ввод prompt к текущему значению
alert(accumulator1.value); // выведет текущее значение

var accumulator2 = accumulator(2); // начальное значение 2
accumulator2.read(); // прибавит ввод prompt к текущему значению
accumulator2.read(); // прибавит ввод prompt к текущему значению
alert(accumulator2.value); // выведет текущее значение

function accumulator2(startingValue) {
  return {
    value: startingValue,
    read: function() {
      this.value += parseFloat(
        prompt("Please input next value for accumulation", "0")
      );
    }
  };
}
var accumulator1 = accumulator2(2); // начальное значение 2
accumulator1.read(); // прибавит ввод prompt к текущему значению
accumulator1.read(); // прибавит ввод prompt к текущему значению
alert(accumulator1.value); // выведет текущее значение
