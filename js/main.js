import Validator from './Validator.js';


const form = document.querySelector(".main__form");
const usernameinput = document.querySelector("#username");
const emailinput = document.querySelector("#email");
const phoneinput = document.querySelector("#phone");
const passwordinput = document.querySelector("#password");
const cpasswordinput = document.querySelector("#cpassword");
const submit = document.querySelector("#submit");




form.addEventListener("submit", (e) => {
    e.preventDefault();
});


submit.addEventListener("click", () => {

    let username = usernameinput.value.trim();
    let email = emailinput.value.trim();
    let phone = phoneinput.value.trim();
    let password = passwordinput.value.trim();
    let cpassword = cpasswordinput.value.trim();


    //username validation
    if (!(Validator.noDataCheck(username))) {
        Validator.errorMesg(usernameinput, "username can't be blank");
    }
    else if (!(Validator.lengthCheck(username))) {
        Validator.errorMesg(usernameinput, "username is too small");
    }
    else {
        Validator.successMesg(usernameinput);
    }
    //email validation
    if (!(Validator.isEmail(email))) {
        Validator.errorMesg(emailinput, "email is invalid or please enter com");
    }
    else {
        Validator.successMesg(emailinput);
    }
    //phone validation
    if (!(Validator.isPhoneNumber(phone))) {
        Validator.errorMesg(phoneinput, "phone number is invalid");
    }
    else {
        Validator.successMesg(phoneinput);
    }
    //password validation
    if (!(Validator.noDataCheck(password))) {
        Validator.errorMesg(passwordinput, "password can't be blank");
    }
    else if ((Validator.isPassword(password)) == 0) {
        Validator.errorMesg(passwordinput, "password is too small ");
    }
    else if ((Validator.isPassword(password)) == -1) {
        Validator.errorMesg(passwordinput, "please use _ and @ sign ");
    }
    else {
        Validator.successMesg(passwordinput);
    }
    //confirm the password 
    if (!(Validator.noDataCheck(cpassword))) {
        Validator.errorMesg(cpasswordinput, "password not matched or can't be blank");
    }
    else if ((Validator.isPassword(password)) == 0) {
        Validator.errorMesg(cpasswordinput, " ");
    }
    else if ((Validator.isPassword(password)) == -1) {
        Validator.errorMesg(cpasswordinput, " ");
    }
    else if (!(Validator.matchPassword(password, cpassword))) {
        Validator.errorMesg(cpasswordinput, "password doesn't match");
    }
    else {
        Validator.successMesg(cpasswordinput);
    }
});