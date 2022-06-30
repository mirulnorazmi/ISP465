//Made by MUHAMMAD FARHAT NAZMI BIN MOHD RAZALI
function resetButton() {
    document.getElementById("box-form").reset();
  }

function submitButton(){
    var textname = document.getElementById("text-name");
    var textresponse = document.getElementById("text-response");

    var email = document.getElementById("email");
    var textemail =document.getElementById("text-email");

    var address = document.getElementById("address");

    var message = document.getElementById("textarea");

    var pattern=/^[a-zA-Z0-9]+@gmail\.com$/;
    
    var contact = document.getElementById("text-contact");
    var number = document.getElementById("text-number");

    var patternContact = /[0-9]{11}/;
    
    
    if(textname.value.length < 10){
      textresponse.textContent = "Username must be at least 10";
      textresponse.style.color = "#ff0000";
      textresponse.style.fontSize = "20px";
      textresponse.style.fontWeight = "900";
    }
    else if(textname.value.length >10){
      textresponse.textContent = "Username Valid";
      textresponse.style.color = "#00ff00";
      textresponse.style.fontSize = "20px";
      textresponse.style.fontWeight = "900";
    }

    if(pattern.test(email.value)){
      textemail.textContent = "Email address is valid";
      textemail.style.color = "#00ff00";
      textemail.style.fontSize = "20px";
      textemail.style.fontWeight = "900";
    }
    else {
      textemail.textContent = "Email address is not valid";
      textemail.style.color = "#ff0000";
      textemail.style.fontSize = "20px";
      textemail.style.fontWeight = "900";
    }

    if(patternContact.test(contact.value)){
      number.textContent = "Contact is valid";
      number.style.color = "#00ff00";
      number.style.fontSize = "20px";
      number.style.fontWeight = "900";
    }
    else {
      number.textContent = "Contact is not valid";
      number.style.color = "#ff0000";
      number.style.fontSize = "20px";
      number.style.fontWeight = "900";
    }

    if(textname.value.length > 10){
      if(pattern.test(email.value)){
        if(patternContact.test(contact.value)){
          if(address){
            if(message){
          alert("Name: " + textname.value + "\n" + "Email: " + email.value + "\n" + "Contact: "+ contact.value + "\n" + "Address: " + address.value + "\n" + "Message: " + message.value);
            }
          }
        }
      }
    }
  
}
var textname = document.getElementById("text-name");
textname.addEventListener('blur', submitButton, false);;

var email = document.getElementById("email");
email.addEventListener('blur', submitButton, false);;

var contact = document.getElementById("text-contact");
contact.addEventListener('blur', submitButton, false);;

document.getElementById("description").addEventListener("click", description);

function description() {
  document.getElementById("description").innerHTML = "We help thousands of people repair their devices every day. And every time you fix something, you help the planet by keeping e-waste from entering the landfill.";
}
