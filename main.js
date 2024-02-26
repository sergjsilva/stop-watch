const currentTime=document.querySelector("#currentTime");
const parentBtn=document.querySelector(".btn-container");

let hours=0;
let minutes=0;
let seconds=0;
let centiseconds=0;
let timerId=0;

parentBtn.addEventListener("click", (event)=>{
    
    const selectedBtn=event.target.name;
    
    if(selectedBtn==="start" && timerId==0){
        timerId=setInterval(() => {
            centiseconds++;
            if(centiseconds>99){
                centiseconds=0;
                seconds++;
            }
            if(seconds>59){
                seconds=0;
                minutes++;
            }
            if(minutes>59){
                minutes=0;
                hours++;
            }
            currentTime.innerText=`${hours<10?`0${hours}`:hours}:${minutes<10?`0${minutes}`
            :minutes}:${seconds<10?`0${seconds}`:seconds}:${centiseconds<10?`0${centiseconds}`:centiseconds}`}, 10);
    }
    if(selectedBtn=="stop"){
        clearInterval(timerId);
        timerId=0;
    }
    if(selectedBtn=="reset"){
        clearInterval(timerId);
        hours=minutes=seconds=centiseconds=0;
        currentTime.innerText="00:00:00:00";
        timerId=0;
    }
        

})
