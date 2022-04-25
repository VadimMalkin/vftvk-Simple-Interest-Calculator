function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);
    

    // amount is positive validation
    var n = Number(principal)
    if (n<=0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    } else {
        var result = document.getElementById("result");
        result.innerHTML='<br><br>If you deposit <mark>'+(principal)+'</mark><br> at an interest rate of <mark>'+(rate)+'</mark><br>You will receive an amount of <mark>'+(interest)+'</mark><br>in the year <mark>'+(year)+'</mark>';
    }
}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
        