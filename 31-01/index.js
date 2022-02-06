//Consider Array of students and their marks. List out the students with the passing marks given by user. 
var number=prompt("Enter the passing marks for student");
number=parseInt(number);
var obj = {
    "students" : [
        {
            "name":"chet",
            "marks":66
        },
        {
            "name":"sid",
            "marks":10
        },
        {            
            "name":"shashank",
            "marks":60
        },
        {            
            "name":"saurav",
            "marks":85
        },
        {             
            "name":"Sri",
            "marks":69
        },
        {             
            "name":"ketan",
            "marks":76
        },
        {             
            "name":"jim",
            "marks":30
        },
        ],

};
for(var i=0;i<obj.students.length;i++)
{
    if(obj.students[i].marks>=number)
    {
        console.log(obj.students[i].name);
    }
}