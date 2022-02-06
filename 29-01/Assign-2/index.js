//Consider User input number,check if the number is prime or Not.
var number=prompt("Enter a number");
number=parseInt(number);
var count=0;
if(isNaN(number)) 
{
    alert("Please enter valid number");
}
if(number<=0) 
{
    alert("please enter valid number");
}
for(var i=2;i<number;i++) {
    if(number%i==0) {
        count++;
    }
}
if(count==0) 
{
    alert("The number is Prime");
}
else 
{
    alert("The number is Not Prime");
}