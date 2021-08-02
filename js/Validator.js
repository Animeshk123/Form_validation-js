export default class Validator {
    static noDataCheck(data) {
        let result = (data == "") ? false : true;
        return result;
    }
    static lengthCheck(value) {
        if (value.length <= 4) {
            return false;
        }
        else {
            return true;
        }
    }
    static isEmail(email) {
        if ((email.indexOf("@")) == -1) {
            return false;
        }
        else if ((email.lastIndexOf(".")) == -1) {
            return false;
        }
        else if ((email.lastIndexOf("com")) == -1) {
            return false;
        }
        else {
            return true;
        }
    }
    static isPhoneNumber(number) {
        if (number.length == 10) {
            return true;
        }
        else {
            return false;
        }
    }
    static isPassword(password) {
        if (password.length <= 5) {
            return 0;
        }
        else if (((password.indexOf("_")) == -1) || ((password.indexOf("@")) == -1)) {
            return -1;
        }
        else {
            return 1;
        }
    }
    static matchPassword(password, passwordTwo) {
        if (password == passwordTwo) {
            return true;
        }
        else {
            return false;
        }
    }
    // this method for this project 
    static successMesg(field){
        let successform = field.parentElement;
        successform.className = "form__items success"
    }
    static errorMesg(field,error){
        let formItems = field.parentElement;
        let span = formItems.querySelector("span");
        span.innerText = error;
        formItems.className = "form__items error";
    }

}