
//global variable
let initialSecond = 0;
let initialMinute = 0;
let initialHour = 0;
//variable to the timerIntervals 
let secondInterval;
let minuteInterval;
let hourInterval; 

//create funtions that will increment each items individually 
function incrementHour(){
   hourInterval= setInterval(function(){
        if(initialHour == 24){
            initialHour = 0;
        }else{
        initialHour++;}
        updateHours();
    }, 3600000);
}

function incrementMinute(){
    minuteInterval= setInterval(function(){
    if(initialMinute == 59){
        initialMinute = 0;
    }else{
    initialMinute++;}
    updateMinutes();
}, 60000);
}

//increment the seconds every seconds, if it is equal to 59, then set it to initial value (0)
function incrementSecond(){
secondInterval = setInterval(function(){
    if(initialSecond == 59){
        initialSecond = 0;
    }else{
    initialSecond++;}
    updateSeconds();
}, 1000);
}

//funtion to update the textfield after each seconds
function updateSeconds(){
    document.getElementById("seconds").value = initialSecond;

}
function updateMinutes(){
    document.getElementById("minutes").value = initialMinute;
}

function updateHours(){
    document.getElementById("hours").value = initialHour;
}


function startTimer(){
    document.getElementById("seconds").value = initialSecond;
    document.getElementById("minutes").value = initialMinute;
    document.getElementById("hours").value = initialHour;

    incrementSecond();
    incrementMinute();
    incrementHour();

}

//function to clear the intervals 
function clearIntervalValue(){
    clearInterval(secondInterval);
    clearInterval(minuteInterval);
    clearInterval(hourInterval);
    initialHour = 0;
    initialMinute= 0;
    initialSecond = 0 ; 

}


function stopTimer(){

var seconds = document.getElementById("seconds").value;
var minutes = document.getElementById("minutes").value;
var hours = document.getElementById("hours").value;
var time = hours + ":"+minutes+":"+seconds
var elapseTime = document.getElementById("elapsetime"); 
var newElapseTime = document.createElement("li");
var textNode = document.createTextNode(time);
newElapseTime.appendChild(textNode);
elapseTime.appendChild(newElapseTime);


clearIntervalValue();
startTimer();

}
function resetTimer(){

    clearIntervalValue();
    document.getElementById("seconds").value = ""; 
document.getElementById("minutes").value = "";
document.getElementById("hours").value = "";

}

