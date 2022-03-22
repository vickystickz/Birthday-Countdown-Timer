
var button = document.getElementById("button");
document.getElementById("countdown-0").style.display = "none";

// function to calculate and load in time countdown into html page 
button.onclick = function countdown(){


    document.getElementById("countdown-0").style.display = "inline";


    var date = document.getElementById("date").value;
    var name = document.getElementById("name");
    var result = document.getElementById("name-0");
    const daysTxt = document.getElementById("days")
    const hoursTxt = document.getElementById("hours")
    const minutesTxt = document.getElementById("minutes")
    const secTxt = document.getElementById("seconds");
    const form = document.getElementById("form");

    form.style.display = "none"



    if(date == "" || name.value == ""){
        return;
    } 
    else {

        result.innerHTML = name.value + " 's birthday is in" ;

        const birth_day = new Date(date);
        const currentDate = new Date();
    
    
        const totalSeconds = (birth_day - currentDate) / 1000;
    
        const days = Math.floor(totalSeconds / 3600 / 24); 
    
        const hrs = Math.floor(totalSeconds / 3600) % 24;
    
        const mins  = Math.floor(totalSeconds / 60) % 60;
    
        const secs = Math.floor(totalSeconds) % 60;
    
        daysTxt.innerHTML = days;
        hoursTxt.innerHTML = hrs;
        minutesTxt.innerHTML = mins;
        secTxt.innerHTML = secs;
    
        // document.write(result.innerHTML)
        setInterval(countdown, 1000);

        return false;

    }

}



