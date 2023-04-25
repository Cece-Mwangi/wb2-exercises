//formula d = square root of (x2-x1)^2 + (y2-y1)^2
//d = square root of a^2 + b^2
// (2,4) (6,8)
var x1=2;
var y1=6;
var x2=4;
var y2=8;
var a= x2 - x1;
var b= y2 - y1;
var sqra = a * a
var sqrb = b * b
var d = Math.sqrt(sqra+sqrb)
//(x2-x1)=2 
console.log(d.toFixed(2))

