let form = document.querySelector("form");
let input = document.querySelectorAll("input");
let firstName = document.querySelector(".first");
let lastName = document.querySelector(".last");
let email = document.querySelector(".email");
let password = document.querySelector(".password");
let span = document.querySelectorAll(".form-info span");
form.onsubmit = function (e) {
  e.preventDefault();
  validationForm();
  
};
function validationForm() {
  const firstValue = firstName.value.trim();
  const lastValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  //  First Name Validation
  if (firstValue === "") {
    setError(firstName, "First Name Cannot Be Empty");
    removeSuccess(firstName);
  } else if (firstValue.length <= 3) {
    setError(firstName, "First Name should be at least 3 characters");
  } else {
    success(firstName);
  }

  //  Last Name Validation
  if (lastValue === "") {
    setError(lastName, "Last Name Cannot Be Empty");
    removeSuccess(lastName);
  } else if (lastValue.length <= 3) {
    setError(lastName, "Last Name should be at least 3 characters");
  } else {
    success(lastName);
  }

  // Email validation

  if (emailValue === "") {
    setError(email, "Email Cannot Be Empty");
    removeSuccess(email);
  } else if (!vaildEmail(emailValue)) {
    setError(email, "Looks like this is not an Email");
  } else {
    success(email);
  }

  // Password Validation
  if (passwordValue === "") {
    setError(password, "Password Cannot Be Empty");
    removeSuccess(password);
  } else if (passwordValue.length <= 8) {
    setError(password, "password should be at least 8 characters");
  } else {
    success(password);
  }
}

function setError(input, message) {
  const formControl = input.parentElement;
  const span = formControl.querySelector("span");
  span.innerHTML = message;
  input.classList.add("error");
}
function success(input) {
  const formControl = input.parentElement;
  const span = formControl.querySelector("span");
  span.innerHTML = "";
  input.classList.add("success");
  input.classList.remove("error");
}
function removeSuccess(inp) {
  inp.classList.remove("success");
  inp.classList.add("error");
}
function vaildEmail(email) {
  const validRegex =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return validRegex.test(email);
}
