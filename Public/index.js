const stopwatchTime = document.getElementById('stopwatch-time');

var hour = 0;
var minute = 0;
var second = 0;
var stoptimer = true;



timerCycle = () => {

    if(stoptimer == false){

        second = parseInt(second);
        minute = parseInt(minute);
        hour = parseInt(hour);

        second++;

        second == 60 && minute++ && (second = 0)
        minute == 60 && hour++ && (minute = 0)

        if(second < 10 || second == 0){
            second = `0${second}`;
        }

        if (minute < 10 || minute == 0) {
            minute = `0${minute}`;
        }

        if (hour < 10 || hour == 0) {
            hour = `0${hour}`;
        }

        stopwatchTime.innerHTML = `${hour}:${minute}:${second}`
        setTimeout("timerCycle()", 1000);
    } 

}

startTimer =()=>{
    if (stoptimer == true) {
        stoptimer = false;
        timerCycle();
    }
}

pauseTimer =()=>{
    if (stoptimer == false) {
    stoptimer = true;
  }
}

resetTimer =()=>{
    hour = 0;
    minute = 0;
    second = 0;
    stoptimer = true;
    stopwatchTime.innerHTML = "00:00:00"
}

