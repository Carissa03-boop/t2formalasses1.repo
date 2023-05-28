addStudent = () => {
    let nameSurname = document.getElementById("nameSurname").value;
    let email = document.getElementById("email").value;
    let contactNumber = +document.getElementById("contactNumber").value;
    let subject = document.getElementById("subject").value;
    let defaultCheck1 = document.getElementById("defaultCheck1").value;

    if(document.getElementById(defaultCheck1).checked){
        alert("Welcome " + nameSurname + " ! Thank you for your interest in " + subject + "! We will contact you via the email provided: " + email +", or alternatively on the phone number:" + contactNumber + "."); 
    }else{
        alert("Well, well, well... why don't you want to sign up for our newsletter... you dont seem to be that interested " + nameSurname + " ! If you want to sign up, you better CHECK that newsletter box!");
    }
}