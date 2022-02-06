//Consider a character from the user input and show if it's a vowel or consonent.
var char=prompt("Enter the Character");
if(parseInt(char)) 
{
    alert("please enter a Character");
}
else if(char=='a' || char=='e' || char=='i' || char=='o' || char=='u'||char=='A' || char=='E'|| char=='I' ||char=='O'||char=='U')
{
    alert(" User input Character is Vowel");
}
else
{
    alert(" User input Character is Consonent");
}