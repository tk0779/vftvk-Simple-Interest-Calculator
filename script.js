function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    if (principal <=0)
    {
        alert ("Enter a positive number");
        return 0;
    }
    document.getElementById("result").innerHTML = "If you deposit: <mark>"+principal+"</mark><br>At an interest rate of :<mark>"+rate+"</mark><br>You will receive an amount of :<mark>"+interest+"</mark>,<br>In the year :<mark>"+year+"</mark><br>";
}

    function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
   
    

        