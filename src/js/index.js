document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("KV0yiy47LQLPpjxFF");

  const form = document.getElementById("form-container");
  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const messageError = document.getElementById("message-error");
  const submitError = document.getElementById("submit-error");

  function validateName() {
    const name = document.getElementById("contact-name").value;
    if (name.length >= 5) {
      nameError.innerHTML = `<i class="fa-solid fa-check"></i>`;
      return true;
    } else {
      nameError.innerHTML = "Please enter your name";
      return false;
    }
  }

  function validateEmail() {
    const email = document.getElementById("contact-email").value;
    if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
      emailError.innerHTML = `<i class="fa-solid fa-check"></i>`;
      return true;
    } else {
      emailError.innerHTML = "Please enter a valid email";
      return false;
    }
  }

  function validateMessage() {
    const message = document.getElementById("contact-message").value;
    if (message.length >= 15) {
      messageError.innerHTML = `<i class="fa-solid fa-check"></i>`;
      return true;
    } else {
      messageError.innerHTML = "Please enter your message";
      return false;
    }
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const isValid = validateName() && validateEmail() && validateMessage();

    if (!isValid) {
      submitError.style.display = "block";
      submitError.innerHTML = "There was an error in the form";
      setTimeout(() => {
        submitError.style.display = "none";
      }, 3000);
      return;
    }

    const templateParams = {
      name: document.getElementById("contact-name").value,
      email: document.getElementById("contact-email").value,
      message: document.getElementById("contact-message").value,
    };

    emailjs.send("service_nzd8rtm", "contact_form", templateParams).then(
      function (response) {
        submitError.style.display = "block";
        submitError.style.color = "green";
        submitError.innerHTML = "Message sent successfully!";

        console.log("SUCCESS", response.status, response.text);
        
      },
      function (error) {
        submitError.style.display = "block";
        submitError.style.color = "red";
        submitError.innerHTML = "Failed to send message.";

        console.log("FAILED", error);
      }
    );
  });
});
