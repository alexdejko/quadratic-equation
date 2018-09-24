module.exports = function solveEquation(equation) {
  // your implementation
let q = equation
let a = q.split(" ")[0] , 
b = q.split(" ")[3] + q.split(" ")[4] , 
c =q.split(" ")[7] +  q.split(" ")[8] ,
d = Math.pow(b,2) - 4*a*c ,
x1  = (-b-Math.sqrt(d))/(2*a) ,
x2  = (-b+Math.sqrt(d))/(2*a) ,
s=[Math.round(x1),Math.round(x2)]

return s.sort(function (a, b) {
    return a - b;
});

}
