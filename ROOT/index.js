addStudent = () => {
    let first = document.getElementById("first").value;
    let last = document.getElementById("last").value;
    let age = +document.getElementById("age").value;
    let subject = document.getElementById("subject").value;

    if(age >= 18){
        alert("Student:  " + first + " " + last + " has been added to " + subject); 
    }else{
        alert("The student " + first + " " + last + " is to young to enroll!");
    }
}