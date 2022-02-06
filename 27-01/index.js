//Consider an user input from the user, has to be dynamic.It can be 3 numbers or 30 numbers. It should give the maximum of all.Considering Array as the underlying data structure.
var ArraySize = prompt("Enter Array Size");
var Arr = [];
var i = 0;
while(i<ArraySize){
    var value= prompt("Enter Value");
    Arr.push(value);
    i++;
 }
  console.log(Arr);
 var maximum = Arr[0];
 var i = 0;
 while(i<ArraySize){
    if (Arr[i]>maximum) {
        maximum = Arr[i];
    }
    i++;
 }
 alert("Maximum number is "+ maximum);
 console.log(maximum);