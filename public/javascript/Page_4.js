var counter = 0;

function main() {
    setTimeout(showbox, 6000);
    document.getElementById("transaction-number").innerHTML= "رقم الحوالة: "+getRandomInt(1000000, 9999999);
    
}
function showbox() {
    if (counter == 0)
    {
        document.getElementById("shwo-message").innerHTML = "تم الاتصال بالبنك";
        counter++;
        //test fun
        const api_url = 
        setTimeout(showbox, 6000);
    }
        
    else if (counter == 1)
    {
        document.getElementById("shwo-message").innerHTML = "جاري تحويل المبلغ";
        counter++;
        setTimeout(showbox, 6000);
    }
        
    else if (counter == 2)
    {
        var array = [{"error": 9425,"massage":"يجب على الحساب ان يكون حساب تميز"},{"error": 9103,"massage":"الحساب لا يملك رصيد كافي"},{"error": 9041,"massage":"الحساب لايملك سداد الشهر الاول من القرض"}];
        document.getElementById("shwo-message").innerHTML = "خطأ في النظام";
        document.getElementById("loading-img").src = "image/png/sign-red-error.png";
        document.getElementById("error-block").style.display="block";
        const randomElement= array[Math.floor(Math.random() * array.length)];
        console.log(randomElement);
        document.getElementById("error-number").innerHTML = "خطأ رقم: "+randomElement.error; 
        document.getElementById("error-text").innerHTML = "السبب: "+randomElement.massage;
    }
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}