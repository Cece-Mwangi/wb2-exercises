//formula fedtaxes = salary * .23
// variables
var fedtaxes = 23;
var taxPctAsDecimal = fedtaxes / 100;
var salary = 100000;
//operation

var taxwitheld = salary * taxPctAsDecimal

//print
console.log(taxwitheld.toFixed(2))
