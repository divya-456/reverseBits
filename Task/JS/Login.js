// import { isLowerCase, isUpperCase, isNum, isSpecialChar } from "./utility.js";
// const utility = require('./utility.js')
function isUpperCase(character) {
  if (isAlpha(character)) {
    if (character == character.toUpperCase()) {
      return true;
    }
  }
  return false;
}

function isLowerCase(character) {
  if (isAlpha(character)) {
    if (character == character.toLowerCase()) {
      return true;
    }
  }
  return false;
}

function isAlpha(character) {
  var regex = /[a-z]/i;
  if (regex.test(character)) {
    return true;
  }
  return false;
}

function isNum(character) {
  var numstr = "0123456789";
  if (numstr.includes(character)) {
    return true;
  }
  return false;
}

function isSpecialChar(character) {
  var regex = /^[\W_]*$/;
  if (regex.test(character)) {
    return true;
  }
  return false;
}

// switching from login to signup and v/c
function change_Form() {
  var element = document.getElementById("outer-div");
  if (element.classList.contains("active")) {
    element.classList.remove("active");
  } else {
    element.classList.add("active");
  }
}

function changeForget() {
  var element = document.getElementById("outer-div");
  if (element.classList.contains("act")) {
    element.classList.remove("act");
  } else {
    element.classList.add("act");
  }
}

//Name validation
function validateName() {
  var name = document.getElementById("name"); //name value
  var text = document.getElementsByClassName("error-text")[3]; // error text
  var icon = document.getElementsByClassName("showError")[1]; //exclamation icon
  var user_icon = document.getElementsByClassName("left-icon-signup")[0]; //user icon

  var regex = /[a-zA-Z\s]+$/;
  if (name.value.trim() == "") {
    text.innerHTML = "Name can't be blank";
    name.classList.add("error");
    text.classList.add("error");
    icon.classList.add("error");
    user_icon.classList.add("error");
    return false;
  } else if (!regex.test(name.value)) {
    text.innerHTML = "Name can't have special characters or numbers";
    name.classList.add("error");
    text.classList.add("error");
    icon.classList.add("error");
    user_icon.classList.add("error");
    return false;
  } else {
    text.innerHTML = "";
    name.classList.remove("error");
    text.classList.remove("error");
    icon.classList.remove("error");
    user_icon.classList.remove("error");
    return true;
  }
}

function validateLoginEmail() {
  var email = document.getElementById("login-email"); //email value
  var text = document.getElementsByClassName("error-text")[0]; // error text
  var icon = document.getElementsByClassName("showError")[0]; //exclamation icon
  var mail_icon = document.getElementsByClassName("left-icon-login")[0]; //mail icon
  var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!regex.test(email.value)) {
    text.innerHTML = "Please enter a valid email";
    email.classList.add("error");
    text.classList.add("error");
    icon.classList.add("error");
    mail_icon.classList.add("error");
    return false;
  } else {
    text.innerHTML = "";
    email.classList.remove("error");
    text.classList.remove("error");
    icon.classList.remove("error");
    mail_icon.classList.remove("error");
    return true;
  }
}

//email validation
function validateEmail() {
  var email = document.getElementById("signup-email"); //email value
  var text = document.getElementsByClassName("error-text")[4]; // error text
  var icon = document.getElementsByClassName("showError")[2]; //exclamation icon
  var mail_icon = document.getElementsByClassName("left-icon-signup")[1]; //mail icon
  var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!regex.test(email.value)) {
    text.innerHTML = "Please enter a valid email";
    email.classList.add("error");
    text.classList.add("error");
    icon.classList.add("error");
    mail_icon.classList.add("error");
    return false;
  } else {
    text.innerHTML = "";
    email.classList.remove("error");
    text.classList.remove("error");
    icon.classList.remove("error");
    mail_icon.classList.remove("error");
    return true;
  }
}

function validateForgetEmail() {
  var email = document.getElementById("forget-email"); //email value
  var text = document.getElementsByClassName("error-text")[8]; // error text
  var icon = document.getElementsByClassName("showError")[4]; //exclamation icon
  var mail_icon = document.getElementsByClassName("left-icon-forget")[0]; //mail icon
  var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!regex.test(email.value)) {
    text.innerHTML = "Please enter a valid email";
    email.classList.add("error");
    text.classList.add("error");
    icon.classList.add("error");
    mail_icon.classList.add("error");
    return false;
  } else {
    text.innerHTML = "";
    email.classList.remove("error");
    text.classList.remove("error");
    icon.classList.remove("error");
    mail_icon.classList.remove("error");
    return true;
  }
}

function validateLoginPassword() {
  var password = document.getElementsByClassName("login-password")[0]; //password value
  var text = document.getElementsByClassName("error-text")[1]; // error text
  var lock_icon = document.getElementsByClassName("left-icon-login")[1]; //lock icon
  var eye_icon = document.getElementsByClassName("showHidePw")[0];
  var upperCaseFlag = 0;
  var lowerCaseFlag = 0;
  var numFlag = 0;
  var specialFlag = 0;

  if (password.value.length < 8 || password.value.length > 12) {
    text.innerHTML = "Password must be between 8 to 12 character";
    password.classList.add("error");
    text.classList.add("error");
    lock_icon.classList.add("error");
    eye_icon.classList.add("error");
    return false;
  } else {
    for (const character of password.value) {
      if (isUpperCase(character)) {
        upperCaseFlag = 1;
      }
      if (isLowerCase(character)) {
        lowerCaseFlag = 1;
      }
      if (isNum(character)) {
        numFlag = 1;
      }
      if (isSpecialChar(character)) {
        specialFlag = 1;
      }
    }
    text.innerHTML = "Password must contain\n";
    if (upperCaseFlag == 0) {
      text.innerHTML += "<li>An uppercase letter\n</li>";
    }
    if (lowerCaseFlag == 0) {
      text.innerHTML += "<li>A lowercase letter\n</li>";
    }
    if (numFlag == 0) {
      text.innerHTML += "<li>A numeric value\n</li>";
    }
    if (specialFlag == 0) {
      text.innerHTML += "<li>A special character\n</li>";
    }
    if (
      upperCaseFlag == 0 ||
      lowerCaseFlag == 0 ||
      numFlag == 0 ||
      specialFlag == 0
    ) {
      password.classList.add("error");
      text.classList.add("error");
      lock_icon.classList.add("error");
      eye_icon.classList.add("error");
      return false;
    } else {
      text.innerHTML = "";
      password.classList.remove("error");
      text.classList.remove("error");
      lock_icon.classList.remove("error");
      eye_icon.classList.remove("error");
      return true;
    }
  }
}

//password validation
function validatePassword() {
  var password = document.getElementsByClassName("signup-password")[0]; //password value
  var text = document.getElementsByClassName("error-text")[5]; // error text
  var icon = document.getElementsByClassName("showError")[3]; //exclamation icon
  var lock_icon = document.getElementsByClassName("left-icon-signup")[2]; //lock icon
  var upperCaseFlag = 0;
  var lowerCaseFlag = 0;
  var numFlag = 0;
  var specialFlag = 0;

  if (password.value.length < 8 || password.value.length > 12) {
    text.innerHTML = "Password must be between 8 to 12 character";
    password.classList.add("error");
    text.classList.add("error");
    icon.classList.add("error");
    lock_icon.classList.add("error");
    return false;
  } else {
    for (const character of password.value) {
      if (isUpperCase(character)) {
        upperCaseFlag = 1;
      }
      if (isLowerCase(character)) {
        lowerCaseFlag = 1;
      }
      if (isNum(character)) {
        numFlag = 1;
      }
      if (isSpecialChar(character)) {
        specialFlag = 1;
      }
    }
    text.innerHTML = "Password must contain\n";
    if (upperCaseFlag == 0) {
      text.innerHTML += "<li>An uppercase letter\n</li>";
    }
    if (lowerCaseFlag == 0) {
      text.innerHTML += "<li>A lowercase letter\n</li>";
    }
    if (numFlag == 0) {
      text.innerHTML += "<li>A numeric value\n</li>";
    }
    if (specialFlag == 0) {
      text.innerHTML += "<li>A special character\n</li>";
    }
    if (
      upperCaseFlag == 0 ||
      lowerCaseFlag == 0 ||
      numFlag == 0 ||
      specialFlag == 0
    ) {
      password.classList.add("error");
      text.classList.add("error");
      icon.classList.add("error");
      lock_icon.classList.add("error");
      return false;
    } else {
      text.innerHTML = "";
      password.classList.remove("error");
      text.classList.remove("error");
      icon.classList.remove("error");
      lock_icon.classList.remove("error");
      return true;
    }
  }
}

function validateForgetPassword() {
  var password = document.getElementsByClassName("forget-password")[0]; //password value
  var text = document.getElementsByClassName("error-text")[9]; // error text
  var icon = document.getElementsByClassName("showError")[5]; //exclamation icon
  var lock_icon = document.getElementsByClassName("left-icon-forget")[1]; //lock icon
  var upperCaseFlag = 0;
  var lowerCaseFlag = 0;
  var numFlag = 0;
  var specialFlag = 0;

  if (password.value.length < 8 || password.value.length > 12) {
    text.innerHTML = "Password must be between 8 to 12 character";
    password.classList.add("error");
    text.classList.add("error");
    icon.classList.add("error");
    lock_icon.classList.add("error");
    return false;
  } else {
    for (const character of password.value) {
      if (isUpperCase(character)) {
        upperCaseFlag = 1;
      }
      if (isLowerCase(character)) {
        lowerCaseFlag = 1;
      }
      if (isNum(character)) {
        numFlag = 1;
      }
      if (isSpecialChar(character)) {
        specialFlag = 1;
      }
    }
    text.innerHTML = "Password must contain\n";
    if (upperCaseFlag == 0) {
      text.innerHTML += "<li>An uppercase letter\n</li>";
    }
    if (lowerCaseFlag == 0) {
      text.innerHTML += "<li>A lowercase letter\n</li>";
    }
    if (numFlag == 0) {
      text.innerHTML += "<li>A numeric value\n</li>";
    }
    if (specialFlag == 0) {
      text.innerHTML += "<li>A special character\n</li>";
    }
    if (
      upperCaseFlag == 0 ||
      lowerCaseFlag == 0 ||
      numFlag == 0 ||
      specialFlag == 0
    ) {
      password.classList.add("error");
      text.classList.add("error");
      icon.classList.add("error");
      lock_icon.classList.add("error");
      return false;
    } else {
      text.innerHTML = "";
      password.classList.remove("error");
      text.classList.remove("error");
      icon.classList.remove("error");
      lock_icon.classList.remove("error");
      return true;
    }
  }
}

//confirm password validation
function validateConfirmPassword() {
  var password = document.getElementsByClassName("signup-password")[0];
  var confirm_password = document.getElementsByClassName("signup-password")[1]; //password value
  var text = document.getElementsByClassName("error-text")[6]; // error text
  var icon = document.getElementsByClassName("showError")[3]; //exclamation icon
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
    return false;
  } else {
    text.innerHTML = "";
    password.classList.remove("error");
    confirm_password.classList.remove("error");
    text.classList.remove("error");
    icon.classList.remove("error");
    password_lock_icon.classList.remove("error");
    confirm_lock_icon.classList.remove("error");
    eye_icon.classList.remove("error");
    return true;
  }
}

function validateForgetConfirmPassword() {
  var password = document.getElementsByClassName("forget-password")[0];
  var confirm_password = document.getElementsByClassName("forget-password")[1]; //password value
  var text = document.getElementsByClassName("error-text")[10]; // error text
  var icon = document.getElementsByClassName("showError")[5]; //exclamation icon
  var password_lock_icon =
    document.getElementsByClassName("left-icon-forget")[1]; //lock icon
  var confirm_lock_icon =
    document.getElementsByClassName("left-icon-forget")[2]; //lock icon
  var eye_icon = document.getElementsByClassName("showHidePw")[2]; //eye icon

  if (password.value != confirm_password.value) {
    text.innerHTML = "Password and Confirm password are different";
    password.classList.add("error");
    confirm_password.classList.add("error");
    text.classList.add("error");
    icon.classList.add("error");
    password_lock_icon.classList.add("error");
    confirm_lock_icon.classList.add("error");
    eye_icon.classList.add("error");
    return false;
  } else {
    text.innerHTML = "";
    password.classList.remove("error");
    confirm_password.classList.remove("error");
    text.classList.remove("error");
    icon.classList.remove("error");
    password_lock_icon.classList.remove("error");
    confirm_lock_icon.classList.remove("error");
    eye_icon.classList.remove("error");
    return true;
  }
}

function showSignupPassword() {
  eye_icon = document.getElementsByClassName("showHidePw")[1];
  signupPass = document.getElementsByClassName("signup-password")[1];
  if (eye_icon.classList.contains("uil-eye-slash")) {
    eye_icon.classList.remove("uil-eye-slash");
    eye_icon.classList.add("uil-eye");
    signupPass.setAttribute("type", "text");
  } else {
    eye_icon.classList.add("uil-eye-slash");
    eye_icon.classList.remove("uil-eye");
    signupPass.setAttribute("type", "password");
  }
}

function showLoginPassword() {
  eye_icon = document.getElementsByClassName("showHidePw")[0];
  signupPass = document.getElementsByClassName("login-password")[0];
  if (eye_icon.classList.contains("uil-eye-slash")) {
    eye_icon.classList.remove("uil-eye-slash");
    eye_icon.classList.add("uil-eye");
    signupPass.setAttribute("type", "text");
  } else {
    eye_icon.classList.add("uil-eye-slash");
    eye_icon.classList.remove("uil-eye");
    signupPass.setAttribute("type", "password");
  }
}

function showForgetPassword() {
  eye_icon = document.getElementsByClassName("showHidePw")[2];
  signupPass = document.getElementsByClassName("forget-password")[1];
  if (eye_icon.classList.contains("uil-eye-slash")) {
    eye_icon.classList.remove("uil-eye-slash");
    eye_icon.classList.add("uil-eye");
    signupPass.setAttribute("type", "text");
  } else {
    eye_icon.classList.add("uil-eye-slash");
    eye_icon.classList.remove("uil-eye");
    signupPass.setAttribute("type", "password");
  }
}

var registerUsers = [];

function onSubmit() {
  var container = document.getElementById("outer-div");
  if (container.classList.contains("active")) {
    validateName();
      validateEmail();
      validatePassword();
      validateConfirmPassword();
    if (
      validateName() &&
      validateEmail() &&
      validatePassword() &&
      validateConfirmPassword()
    ) {
      if (document.getElementById('termCon').checked) {
        
        var name = document.getElementById("name"); //name value
        var email = document.getElementById("signup-email"); //email value
        var password = document.getElementsByClassName("signup-password")[0]; //password value
        var confirm_password =
          document.getElementsByClassName("signup-password")[1]; //password value
        var successText = document.getElementsByClassName("success-text")[1]; // success text
        var registeredUserFlag = 0;
        for (const user of registerUsers) {
          if (user["email"] == email.value) {
            registeredUserFlag = 1;
          }
        }
        if (registeredUserFlag == 1) {
          alert("Email already taken");
        } else {
          registerUsers.push({
            'name': name.value,
            'email': email.value,
            'password': password.value,
          });
          name.value = "";
          email.value = "";
          password.value = "";
          confirm_password.value = "";
          alert("Registered Successfully");
          successText.classList.add("success");
        }
        console.log(registerUsers);
      } else {
        alert('Please accept the terms and conditions')
      }
    }
  } else if (container.classList.contains("act")) {
    if (
      validateForgetEmail() &&
      validateForgetPassword() &&
      validateForgetConfirmPassword()
    ) {
      var email = document.getElementById("forget-email");
      var password = document.getElementsByClassName("forget-password")[0];
      var errorText = document.getElementsByClassName("error-text")[10];
      var successText = document.getElementsByClassName("success-text")[2];
      var existFlag = 0;
      for (const user of registerUsers) {
        if (user["email"] == email.value) {
          existFlag = 1;
          user["password"] = password.value;
          console.log(registerUsers);
        }
      }
      if (existFlag == 0) {
        errorText.innerHTML = "Email id does not exist";
        errorText.classList.add("error");
        successText.classList.remove("success");
      } else {
        alert("Password changed successfully");
        errorText.innerHTML = "";
        successText.classList.add("success");
        errorText.classList.remove("error");
      }
    }
  } else {
    if (validateLoginEmail() && validateLoginPassword()) {
      if (document.getElementById('logCheck').checked) {
        
        var email = document.getElementById("login-email"); //email value
        var password = document.getElementsByClassName("login-password")[0]; //password value
        var errorText = document.getElementsByClassName("error-text")[2]; // error text
        var successText = document.getElementsByClassName("success-text")[0]; // success text
        var existFlag = 0;
        for (const user of registerUsers) {
          if (user["email"] == email.value) {
            existFlag = 1;
            if (user["password"] == password.value) {
              existFlag = 2;
              console.log("Login sucessful1");
            }
            break;
          }
        }
        if (existFlag == 0) {
          errorText.innerHTML = "Email id does not exist";
          errorText.classList.add("error");
          successText.classList.remove("success");
        } else if (existFlag == 1) {
          errorText.innerHTML = "Password is incorrect!";
          errorText.classList.add("error");
          successText.classList.remove("success");
        } else {
          alert("Login Successful");
          errorText.innerHTML = "";
          successText.innerHTML = "";
          successText.classList.add("success");
          errorText.classList.remove("error");
        }
      } else {
        alert('Please select remember me')
      }
    }
  }
}
