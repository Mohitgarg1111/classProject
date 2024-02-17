const dark = document.getElementById("darkmode")
const navbar= document.getElementById("navbar")
const container= document.getElementById("container")
const time=document.querySelector(".time")

window.onload = function(){
    dark.click();
};

dark.addEventListener('click',function(){
    this.classList.toggle('bi-moon-fill');
    navbar.classList.toggle("dark-theme");
    container.classList.toggle("dark-theme");
    time.classList.toggle("dark-theme");
    document.querySelector("body").classList.toggle("dark-theme");
    document.getElementById("upper").classList.toggle("dark-theme");
})

const popup=document.querySelector(".popup");
const settimer=document.getElementById("settimer");
const cancle=document.getElementById("cancle");
const edit=document.getElementById("edit");

edit.addEventListener('click',function(){
    popup.style.display="block";
    // body.classList.toggle("blur")
})
cancle.addEventListener('click',function(){
    popup.style.display="none";
})


// show time
const hours = document.getElementById("hour");
const minutes = document.getElementById("min");
const seconds = document.getElementById("sec");

let total_seconds = 0;
let start;
let paused = false;

settimer.addEventListener('click',function(){
    popup.style.display="none";
    const hour_input = parseInt(document.getElementById("set-hour").value);
    const minutes_input = parseInt(document.getElementById("set-min").value);
    const seconds_input = parseInt(document.getElementById("set-sec").value);
    total_seconds = hour_input*3600 + minutes_input * 60 + seconds_input;

    hours.innerHTML= pad(hour_input);
    minutes.innerHTML= pad(minutes_input);
    seconds.innerHTML= pad(seconds_input);
})


function start_timer() {
    pause_button.style.display="inline-block";
    start_button.style.display="none";

    start = setInterval(function() {

        const h = Math.floor(total_seconds / 3600);
        const m = Math.floor((total_seconds % 3600) / 60);
        const s = total_seconds % 60;

        hours.innerHTML= pad(h);
        minutes.innerHTML= pad(m);
        seconds.innerHTML= pad(s);
    
        total_seconds--;
    
        if(total_seconds<0){
            pause_timer();
            reset_countdown();
        }
    },1000);
}

function pause_timer() {
    clearInterval(start);
    start_button.style.display="inline-block";
    pause_button.style.display="none";
    paused=true;
}


function reset_countdown() {
    clearInterval(start);
    hours.innerHTML= pad(00);
    minutes.innerHTML= pad(00);
    seconds.innerHTML= pad(00);
    paused=false;
    total_seconds=0;
}

function pad(num) {
    return (num < 10) ? "0" + num : num;
}

const start_button = document.getElementById("start");
const reset_button = document.getElementById("reset");
const pause_button = document.getElementById("stop");

start_button.addEventListener('click', start_timer);
reset_button.addEventListener('click',reset_countdown);
pause_button.addEventListener('click',pause_timer);

function setcustom(num){
    total_seconds = num;

    const h = Math.floor(total_seconds / 3600);
    const m = Math.floor((total_seconds % 3600) / 60);
    const s = total_seconds % 60;

    hours.innerHTML= pad(h);
    minutes.innerHTML= pad(m);
    seconds.innerHTML= pad(s);
};