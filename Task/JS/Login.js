// switching from login to signup and v/c
function changeForm() {
  var element = document.getElementById("outer-div");
  if (element.classList.contains("active")) {
    element.classList.remove("active");
  } else {
    element.classList.add("active");
  }
}

//Name validation
function validateName() {
  var name = document.getElementById("name"); //name value
  var text = document.getElementsByClassName("error-text")[0]; // error text
  var icon = document.getElementsByClassName("showError")[0]; //exclamation icon
  var user_icon = document.getElementsByClassName("left-icon-signup")[0]; //user icon

  var regex = /[a-zA-Z\s]+$/;
  if (name.value.trim() == "") {
    text.innerHTML = "Name can't be blank";
    name.classList.add("error");
    text.classList.add("error");
    icon.classList.add("error");
    user_icon.classList.add("error");
  } else if (!regex.test(name.value)) {
    text.innerHTML = "Name can't have special characters or numbers";
    name.classList.add("error");
    text.classList.add("error");
    icon.classList.add("error");
    user_icon.classList.add("error");
  } else {
    text.innerHTML = "";
    name.classList.remove("error");
    text.classList.remove("error");
    icon.classList.remove("error");
    user_icon.classList.remove("error");
  }
}

//email validation
function validateEmail() {
  var email = document.getElementById("signup-email"); //email value
  var text = document.getElementsByClassName("error-text")[1]; // error text
  var icon = document.getElementsByClassName("showError")[1]; //exclamation icon
  var mail_icon = document.getElementsByClassName("left-icon-signup")[1]; //mail icon
  var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if(!regex.test(email.value)){
    text.innerHTML = "Please enter a valid email";
    email.classList.add("error");
    text.classList.add("error");
    icon.classList.add("error");
    mail_icon.classList.add("error");
  } else {
    text.innerHTML = "";
    email.classList.remove("error");
    text.classList.remove("error");
    icon.classList.remove("error");
    mail_icon.classList.remove("error");
  }
}

//password validation
function validatePassword() {
  var password = document.getElementsByClassName("signup-password")[0]; //password value
  var text = document.getElementsByClassName("error-text")[2]; // error text
  var icon = document.getElementsByClassName("showError")[2]; //exclamation icon
  var lock_icon = document.getElementsByClassName("left-icon-signup")[2]; //lock icon

  var regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\W).*$/;

  if (password.value.length < 8 || password.value.length > 12) {
    text.innerHTML = "Password must be between 8 to 12 character";
    password.classList.add("error");
    text.classList.add("error");
    icon.classList.add("error");
    lock_icon.classList.add("error");
  } else if (!regex.test(password.value)) {
    text.innerHTML =
      "Password must contain an uppercase, a lowercase, a number and a special character";
    password.classList.add("error");
    text.classList.add("error");
    icon.classList.add("error");
    lock_icon.classList.add("error");
  } else {
    text.innerHTML = "";
    password.classList.remove("error");
    text.classList.remove("error");
    icon.classList.remove("error");
    lock_icon.classList.remove("error");
  }
}

//confirm password validation
function validateConfirmPassword() {
  var password = document.getElementsByClassName("signup-password")[0];
  var confirm_password = document.getElementsByClassName("signup-password")[1]; //password value
  var text = document.getElementsByClassName("error-text")[3]; // error text
  var icon = document.getElementsByClassName("showError")[2]; //exclamation icon
  var password_lock_icon =
    document.getElementsByClassName("left-icon-signup")[2]; //lock icon
  var confirm_lock_icon =
    document.getElementsByClassName("left-icon-signup")[3]; //lock icon
  var eye_icon = document.getElementsByClassName("showHidePw")[1]; //eye icon

  if (password.value != confirm_password.value) {
    text.innerHTML = "Password and Confirm password are different";
    password.classList.add("error");
    confirm_password.classList.add("error");
    text.classList.add("error");
    icon.classList.add("error");
    password_lock_icon.classList.add("error");
    confirm_lock_icon.classList.add("error");
    eye_icon.classList.add("error");
  } else {
    text.innerHTML = "";
    password.classList.remove("error");
    confirm_password.classList.remove("error");
    text.classList.remove("error");
    icon.classList.remove("error");
    password_lock_icon.classList.remove("error");
    confirm_lock_icon.classList.remove("error");
    eye_icon.classList.remove("error");
  }
}
