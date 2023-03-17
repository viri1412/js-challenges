const factorial = (number) => {
 var factorialNumber = 1;
    for (let index = 1; index <= number; index++) {
          factorialNumber = factorialNumber * index;
     }
  return factorialNumber;
}

module.exports = factorial;
