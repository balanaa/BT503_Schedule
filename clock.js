
function realtimeClock() {

    var rtClock = new Date();	    
    var hours = rtClock.getHours();
    var minutes = rtClock.getMinutes();
    var seconds = rtClock.getSeconds();
    var amPm;

    if (hours > 12){
        amPm = "PM";
    } else if (hours < 12){
        amPm = "AM"
    }else{
        amPm = "NN";
    }

    if (hours > 12){
        hours = hours - 12;
    }

    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    document.getElementById('clock').innerHTML = 
        hours + "  :  " + minutes + "  :  " + seconds + " " + amPm;
        var t = setTimeout(realtimeClock, 500);
}
