document.addEventListener("DOMContentLoaded", () => {
  emailjs.init("KV0yiy47LQLPpjxFF");

  let submitted = false;

  const form = document.getElementById("form-container");
  if (!form) return;

  const nameInput = document.getElementById("contact-name");
  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const messageError = document.getElementById("message-error");
  const submitMessage = document.getElementById("submit-error");

  function validateName() {
    const name = nameInput.value.trim();
    if (name.length >= 2) {
      nameError.innerHTML = `<i class="fa-solid fa-check"></i>`;
      return true;
    }
    if (submitted) {
      nameError.textContent = "Please enter your name";
    } else {
      nameError.textContent = "";
    }

    return false;
  }

  function validateEmail() {
    const email = document.getElementById("contact-email").value.trim();
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailError.innerHTML = `<i class="fa-solid fa-check"></i>`;
      return true;
    }
    if (submitted) {
      emailError.textContent = "Please enter a valid email";
    } else {
      nameError.textContent = "";
    }
    return false;
  }

  function validateMessage() {
    const subject = document.getElementById("contact-message").value.trim();
    if (subject.length > 3) {
      messageError.innerHTML = `<i class="fa-solid fa-check"></i>`;
      return true;
    }
    if (submitted) {
      messageError.textContent = "Message must contain at least 3 characters";
    } else {
      messageError.textContent = "";
    }
    return false;
  }

  nameInput.addEventListener("input", validateName);

  document
    .getElementById("contact-email")
    .addEventListener("input", validateEmail);

  document
    .getElementById("contact-message")
    .addEventListener("input", validateMessage);

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!validateName() || !validateEmail() || !validateMessage()) {
      submitMessage.style.display = "block";
      submitMessage.style.color = "red";
      submitMessage.innerHTML = "There was an error in the form";

      setTimeout(() => {
        submitMessage.style.display = "none";
      }, 3000);
      return;
    }

    const templateParams = {
      name: document.getElementById("contact-name").value,
      email: document.getElementById("contact-email").value,
      message: document.getElementById("contact-message").value,
    };

    emailjs.send("service_nzd8rtm", "contact_form", templateParams).then(
      function () {
        submitMessage.style.display = "block";
        submitMessage.style.color = "green";
        submitMessage.innerHTML = "Message sent successfully!";

        form.reset();
        nameError.innerHTML = "";
        emailError.innerHTML = "";
        messageError.innerHTML = "";

        setTimeout(() => {
          submitMessage.style.display = "none";
        }, 4000);
      },
      function (error) {
        submitMessage.style.display = "block";
        submitMessage.style.color = "red";
        submitMessage.innerHTML = "Failed to send message.";
        console.log("FAILED", error);
      }
    );
  });
});
