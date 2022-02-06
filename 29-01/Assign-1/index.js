// Consider a user input string.WAP Return the count of vowels.
var GivenString=prompt("Enter the string");
var count=0;
for(var i=0;i<GivenString.length;i++) {
    if(GivenString[i]=='a' || GivenString[i]=='e' || GivenString[i]=='i' || GivenString[i]=='o' || GivenString[i]=='u' || GivenString[i]=='A' || GivenString[i]=='E' || GivenString[i]=='I' || GivenString[i]=='O' || GivenString[i]=='U') {
        count++;
    }
}
alert(count);
console.log(GivenString);
console.log(count);
