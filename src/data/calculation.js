function sum(number1, number2) {
    return number1 + number2;
}

function sub(number1, number2) {
    return number1 - number2;
}

function mul(number1, number2) {
    return number1 * number2;
}

// The result of 1 and 2 = 3

// The result of 4 and 2 = 2

// The result of 4 and 2 = 28
// let number1 = 10, number2 = 20;

// function sumResultPrint () {
//     console.log( `The result of ${number1} and ${number2} = ${sum(number1, number2)}`)
// }

// function mulResultPrint () {
//     console.log( `The result of ${number1} and ${number2} = ${mul(number1, number2)}`)
// }

function calculateOperation(operation) { // operation = function
    return function(number1, number2) {
        return `The result of ${number1} and ${number2} = ${operation(number1, number2)}`;
    }
}

// sumResultPrint();
// mulResultPrint();

const sumResult = calculateOperation(sum);
const mulResult = calculateOperation(mul);

console.log(sumResult(10, 20));
console.log(mulResult(10, 20));
console.log(calculateOperation(sub)(10, 5));

function formatCurrency(currencySymbol, decimalSeparator) {
    return function (value) {
      const wholePart = Math.trunc(value / 100);
      let fractionalPart = value % 100;
      if (fractionalPart < 10) {
        fractionalPart = "0" + fractionalPart;
      }
      return `${currencySymbol}${wholePart}${decimalSeparator}${fractionalPart}`;
    };
  };

  const currencyDollar = formatCurrency('$', '.');
  const currencyBDT = formatCurrency('BDT', '.');
  console.log(currencyDollar(200)); // 200cent
  console.log(currencyBDT(40));