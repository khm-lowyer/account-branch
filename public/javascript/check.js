function get() {
    var par = document.getElementById("text").value;
    CheckNumber(par);
    CheckPhone(par);
    CheckName(par);
    console.log(validateEmail(par));
    detectCardType(par)

    var validate = require('cc-validate');
    var result = validate.isValid(par);
    console.log(result);
}
//function to check if the input number
function CheckNumber(number) {
    if (!isNaN(number)) {
        number = Number(number);
        if (typeof number === 'number') {
            console.log("this is number")
            return true
        }
    }
    console.log("not a number")
    return false;
}

//function to check if the input is a phone number
function CheckPhone(number) {
    if (number.length == 10) {
        console.log("this maybe phonr number");
        if (number.slice(0, 2) == "05") {
            //send a massage
            return true;
        }
    }
    else if (number.length > 10 && number.length > 15) {
        if (number.slice(0, 3) == "966") {
            console.log("this sure phonr number");
            return true;
        }
    }
    return false;
}

//function to check the name is real
function CheckName(name) {
    if (!CheckNumber(name)) {
        if (name.length > 4 && name.length < 15) {
            if (!(/^(.)\1+$/.test(name))) {
                console.log("true name");
                return true;
            }
        }
    }
    return false;
}

//check the emial if a true email
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(email).toLowerCase())) {
        if (/@yahoo.com\s*$/.test(email)) {
            console.log("it ends in @yahoo");
            return true;
        }
        else if (/@gmail.com\s*$/.test(email)) {
            console.log("it ends in @gmail");
            return true;
        }
        else if (/@hotmail.com\s*$/.test(email)) {
            console.log("it ends in @hotmail");
            return true;
        }
        else if (/@live.com\s*$/.test(email)) {
            console.log("it ends in @live");
            return true;
        }
        else if (/@kau.edu.sa.com\s*$/.test(email)) {
            console.log("it ends in @kau.edu.sa.com");
            return true;
        }
        else if (/@icloud.com\s*$/.test(email)) {
            console.log("it ends in @icloud");
            return true;
        }
        else if (/@rb.moe.gov.sa\s*$/.test(email)) {
            console.log("it ends in @rb.moe.gov.sa");
            return true;
        }
    }
    else false;
}

//check the creadit card type
function detectCardType(number) {
    var re = {
        electron: /^(4026|417500|4405|4508|4844|4913|4917)\d+$/,
        maestro: /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d+$/,
        dankort: /^(5019)\d+$/,
        interpayment: /^(636)\d+$/,
        unionpay: /^(62|88)\d+$/,
        visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
        mastercard: /^5[1-5][0-9]{14}$/,
        amex: /^3[47][0-9]{13}$/,
        diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
        discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
        jcb: /^(?:2131|1800|35\d{3})\d{11}$/
    }

    for (var key in re) {
        if (re[key].test(number)) {
            console.log(key);
            return key
        }
    }
}