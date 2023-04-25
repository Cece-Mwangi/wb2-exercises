// time= 72/interest rate
//variable
var interest = 6;
var principal = 1000;
//operation
var years = 72 / interest;
var worth = principal * 2;

//print
console.log("At a " +interest+ "% interest rate, your savings account will be worth $"+ worth.toFixed(2) +" in " +years.toFixed(1) + " years")