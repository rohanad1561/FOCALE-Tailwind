const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const number = document.getElementById("number");

const namerr = document.getElementById("name-error");
const numbererr = document.getElementById("number-error");
const emailerr = document.getElementById("email-error");

fullname.addEventListener("keyup", fullnamechecker);
number.addEventListener("keyup", numberchecker);
email.addEventListener("keyup",emailchecker );

let isnameerror = false,
  isemailerror = false,
  isnumbererror = false;

function fullnamechecker() {
  let data = fullname.value;
  console.log(data);
  if (data.length < 5) {
    namerr.innerHTML = "Required at least 5 characters";
    isnameerror = true;
  } else if (data.length > 20) {
    namerr.innerHTML = "Name must be at most 20 characters";
    isnameerror = true;
  } else {
    namerr.innerHTML = "";
    isnameerror = false;
  }
}

function numberchecker() {
  let data = number.value;

  if (data.length < 10) {
    numbererr.innerHTML = "Please enter a valid 10-digit number";
    isnumbererror = true;
  } else if (data.length < 1) {
    numbererr.innerHTML = "Required field";
    isnumbererror = true;
  } else {
    numbererr.innerHTML = "";
    isnumbererror = false;
  }
}

function emailchecker() {
  let data = email.value;
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(data)) {
    email.style.borderColor = "red";
    emailerr.innerHTML = "Invalid email";
  } else {
    email.style.borderColor = "green";
    emailerr.innerHTML = "";
  }
}
