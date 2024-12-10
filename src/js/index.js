
var div = document.querySelector(".open-close")
var display = 0;

function  hideShow()
{
     if(display == 1) 
    {
    div.style.display = "block";
    display = 0;
     }
    else
    {
     div.style.display = "none";
     display = 1;

    }
}

hideShow()

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");
const submitError = document.getElementById("submit-error");


// Contact form

function validateName() {
    const name = document.getElementById("contact-name");

    if(name.length > 5) {
        nameError.innerHTML =  `<i class="fa-solid fa-check">`;
        return true;
    } else {
        nameError.innerHTML = "Please enter your name";

    }
}

function validateEmail() {
    const email = document.getElementById("contact-email");

    if(!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/))  {
        emailError.innerHTML = "Please enter your email"
        return false;
    } else {
        emailError.innerHTML = `<i class="fa-solid fa-check">`;
        return true;
    }
}

function validateMessage() {
    const subject = document.getElementById("contact-message").value;

    if(subject.length > 15) {
        messageError.innerHTML = "Please enter your subject";
        return false;
    } else{
        messageError.innerHTML = `<i class="fa-solid fa-check">`;
        return true;
    }
}

function validateForm(event) {
    event.preventDefault();

    if(!validateName() || !validateEmail() || !validateMessage()) {
      submitError.style.display = "block";
      submitError.innerHTML = "There was an error in the form";
      setTimeout(function () {
          submitError.style.display = "none";
      }, 3000);
    } else {

        event.target.submit();
    }
}

const form = document.querySelector(".form-comtainer");
form.addEventListener("Submit", validateForm);
