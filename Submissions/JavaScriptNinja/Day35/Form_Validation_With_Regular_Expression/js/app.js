const name = document.querySelector("#name");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const generatePassword = document.querySelector("#generatePassword");
const copyPassword = document.querySelector("#copyPassword");
const profileLink = document.querySelector("#profileLink");
const formInput = document.querySelector("#form-input");
const submitForm = document.querySelector("#input-form");
const submitBtn = document.querySelector("#submit-btn");



const alertName = document.querySelector("#alertName");
const alertUsername = document.querySelector("#alertUsername");
const alertEmail = document.querySelector("#alertEmail");
const alertGeneratedPassword = document.querySelector("#alertGeneratedPassword");
const alertPassword = document.querySelector("#alertPassword");
const alertConfirmPassword = document.querySelector("#alertConfirmPassword");
const alertProfileLink = document.querySelector("#alertProfileLink");


let nameValue = "";
let usernameValue = "";
let emailValue = "";
let passwordValue = "";
let confirmPasswordValue = "";
let profileValue = "";


//Regex Pattern
const namePattern = /^[a-zA-Z]+$/;
const userNamePattern = /^[a-zA-Z0-9]{5}.$/;
const emailPatten = /\S+@\S+\.\S+/;
const phonePattern =  /(^(\+8801|8801|01|008801))[1|3-9]{1}(\d){8}$/;
const passwordPattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
const websitePattern = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;


//Alert Message
const alertMessage = {
    Name : "Name must have more than 5 characters and must not contain any special characters/number",
    Username: "Username must have 5 characters",
    "Email Address": "Must be valid email address with domain such as gmail, yahoo",
    Password : "Must contain lowercase letters, uppercase letters, numbers, symbols and have length greater than 7",
    "Confirm Password" : "Password not matched",
    "Profile Link" : "Invalid website url"
};



let validateInName = (name) => {
    return namePattern.test(name);
}

let validateInUserName = (username) => {
    return userNamePattern.test(username);
}

let validateInEmail = (email) => {
    return emailPatten.test(email);
}

let validateInPassword = (password) => {
    return passwordPattern.test(password);
}

let validateProfileLink = (link) => {
    return websitePattern.test(link);
}


let validation = (event, inputValue, validationFunction, showAlertMessage) => {
    if(inputValue === "") {
        event.textContent = "";
    } else if(!validationFunction(inputValue)) {
        event.textContent = showAlertMessage;
    } else {
        event.textContent = "";
    }
}

let nameValidation = (name) => {
    validation(alertName, name, validateInName, alertMessage.Name);
}

let userNameValidation = (username) => {
    validation(alertUsername, username, validateInUserName, alertMessage.Username);
}

let emailValidation = (email) => {
    validation(alertEmail, email, validateInEmail, alertMessage["Email Address"]);
}

let passwordValidation = (password) => {
    validation(alertPassword, password, validateInPassword, alertMessage.Password);
}

let profileLinkValidation = (link) => {
    validation(alertProfileLink, link, validateProfileLink, alertMessage["Profile Link"]);
}

let confirmPasswordValidation = (passwordValue, confirmPasswordValue) => {
    
    if(confirmPasswordValue === "") {
        alertConfirmPassword.textContent = "";
    } else if(passwordValue !== confirmPasswordValue) {
        alertConfirmPassword.textContent = alertMessage["Confirm Password"];
    } else {
        alertConfirmPassword.textContent = "";
    }
}


let showGeneratedPassword = () => {
    generatePassword.value = getGeneratedPassword();
    alertGeneratedPassword.textContent = `Save this password: ${generatePassword.value}`;
    password.value = generatePassword.value;
    confirmPassword.value = generatePassword.value;
}


let getGeneratedPassword = () => {
    return Array(25).fill("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()~").map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
}

let checkIfInputNotEmpty = (values) => {
    values.forEach(item => {
        
        if(item === "") {
            return false;
        } else {
            return true;
        }
    });
}

let checkAllValidation = (nameValue, usernameValue, emailValue, passwordValue, confirmPasswordValue, profileValue) => {
    nameValidation(nameValue);
    userNameValidation(usernameValue);
    emailValidation(emailValue);
    passwordValidation(passwordValue);
    confirmPasswordValidation(passwordValue, confirmPasswordValue);
    profileLinkValidation(profileValue);
}

let copyThePassword = () => {
    password.select();
    password.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(password.value);

    alert("Copied the Password");
}

formInput.addEventListener("keyup", (event) => {
    nameValue = name.value;
    usernameValue = username.value;
    emailValue = email.value;
    passwordValue = password.value;
    confirmPasswordValue = confirmPassword.value;
    profileValue = profileLink.value;

    checkAllValidation(nameValue, usernameValue, emailValue, passwordValue, confirmPasswordValue, profileValue);  
})


submitForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let formCondition = checkIfInputNotEmpty([nameValue, usernameValue, emailValue, passwordValue, confirmPasswordValue, profileValue]);
    console.log(formCondition)
    if(formCondition === true) {
        submitBtn.style.backgroundColor = "Green";
    }
})

