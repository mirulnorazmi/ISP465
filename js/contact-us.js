const toastLiveExample = document.getElementById('liveToast');
const btnSumbitContact = document.getElementById('btnSumbitContact');
const toastBody = document.getElementById('toastContent');


// msgToast Toast from boostrap 5.2
function msgToast(message) {
  const toast = new bootstrap.Toast(toastLiveExample)
  toastBody.innerHTML = message;
  toast.show();
}

btnSumbitContact.addEventListener('click', () => {

  var pattern = /^[a-zA-Z0-9]+@gmail\.com$/;

  if (document.getElementById('name').value === "") {
    msgToast("Please enter your name...");
  } else if (document.getElementById('email').value === "") {
    msgToast("Please enter your email...");
  } else if (!pattern.test(document.getElementById('email').value)) {
    msgToast("Email address is not valid")
  } else if (document.getElementById('textarea').value === "") {
    msgToast("Please enter your message...");
  } else {
    msgToast("Your message has succesfully Sent!")

    document.getElementById('contactForm').reset();

  }
})

function blurUpperCase() {
  var x = document.getElementById("name");
  x.value = x.value.toUpperCase();
}
