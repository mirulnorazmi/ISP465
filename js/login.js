function signInValidate() {

    var username = document.getElementById("user").value;
    var password = document.getElementById("pass").value;

    if(username == ""){
        alert("Please enter your username");
        return false;
    }
    else if(password == ""){
        alert ("Please enter a password"); 
        return false;
    }
    else{
        alert("Successfully Login!");
    }
}

function signUpValidate() {

    var username = document.getElementById("upUser").value;
    var password = document.getElementById("upPass").value;
    var email = document.getElementById("email").value;
    var secondpassword = document.getElementById("pass2").value;
    
    console.log(username)
    if(username == ""){
        alert("Please enter your username");
        return false;
    }
    else if(password == ""){
        alert ("Please enter a password"); 
        return false;
    }
    else if(password!==secondpassword){
        alert("Password must be the same!");
        return false;
    }
    else if(email == ""){
        alert ("Please enter an email"); 
        return false;
    }
    else{
        alert("Successfully Signed Up!");
    }

  
}
