function run() {
  var otp = document.getElementById("otp_code").value;
  if (otp != "" && otp.length == 4 && CheckNumber(otp)) {
    document.getElementById("otp_code").style.borderColor = "green";
    return true;
  }
  else {
    document.getElementById("otp_code").style.borderColor = "red";
    return false;
  }
}

function CheckNumber(number) {
  if (!isNaN(number)) {
    number = Number(number);
    if (typeof number === 'number') {
      return true
    }
  }
  return false;
}
