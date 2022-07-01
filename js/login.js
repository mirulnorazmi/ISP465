const toastLiveExample = document.getElementById('liveToast');
const toastBody = document.getElementById('toastContent');

// msgToast Toast from boostrap 5.2
function msgToast(message) {
    const toast = new bootstrap.Toast(toastLiveExample)
    toastBody.innerHTML = message;
    toast.show();
}

function signInValidate() {

  var username = document.getElementById("user").value;
  var password = document.getElementById("pass").value;

  if (username == "") {
    msgToast("Please enter your username...");
    return false;
  }
  else if (password == "") {
    msgToast("Please enter a password...");
    return false;
  }
  else {
    msgToast("Successfully Login!");
  }

}

function signUpValidate() {

  var username = document.getElementById("upUser").value;
  var password = document.getElementById("upPass").value;
  var email = document.getElementById("email").value;
  var secondpassword = document.getElementById("pass2").value;

  console.log(username)
  if (username == "") {
    msgToast("Please enter your username...");
    return false;
  }
  else if (password == "") {
    msgToast("Please enter a password...");
    return false;
  }
  else if (password !== secondpassword) {
    msgToast("Password must be the same!");
    return false;
  }
  else if (email == "") {
    msgToast("Please enter an email...");
    return false;
  }
  else {
    msgToast("Successfully Signed Up!");
  }
}
