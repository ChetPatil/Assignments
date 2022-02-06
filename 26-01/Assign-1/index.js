// Take 3 numbers from the user and alert the minimum of those numbers
var number1=prompt("Enter 1st number");
var number2=prompt("Enter 2nd number");
var number3=prompt("Enter 3rd number");
n1=parseInt(number1);
n2=parseInt(number2);
n3=parseInt(number3);
if(number1<number2 && number1<number3)
{
    alert("Minimum number is " +number1);
}
else if(number2<number1 && number2<number3)
{
    alert("Minimum number is " +number2);
}
else
{
    alert("Minimum number is " +number3);
}