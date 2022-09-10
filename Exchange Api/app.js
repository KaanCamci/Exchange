const convertButton = document.getElementById("convertButton");
const amountElement = document.getElementById("amount");
let fromElement = document.getElementById("inputGroupSelect01");
let toElement = document.getElementById("inputGroupSelect02");
let resultElement = document.getElementById("result");

convertButton.addEventListener("click",function(){

    var from;
    var to;

    switch(fromElement.value){
        case "1":
            from = "TRY";
            break;
        case "2":
            from = "USD";
            break;
        case "3":
            from = "EUR";
            break;
    }
    switch(toElement.value){
        case "1":
            to = "TRY";
            break;
        case "2":
            to = "USD";
            break;
        case "3":
            to = "EUR";
            break;
    }

    var requestURL = `https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amountElement.value}`;
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function() {   
        var response = request.response;
        resultElement.innerHTML=response.result;
    }

});