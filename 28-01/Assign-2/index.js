//Print n numbers of a Fibonacci series.Taking input from user.
var n=prompt("Enter the size of Fibonacci series");
n=parseInt(n);
var num1=0;
var num2=1;
console.log(num1);
console.log(num2);
for(var i=2; i<n; i++) 
{
    var num3=num1+num2;
    num1=num2;
    num2=num3;
    console.log(num3);
}