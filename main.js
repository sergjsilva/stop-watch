const currentTime=document.querySelector("#currentTime");
const parentBtn=document.querySelector(".btn-container");

let hours=0;
let minutes=59;
let seconds=45;
let timerId=0;

parentBtn.addEventListener("click", (event)=>{
    
    const selectedBtn=event.target.name;
    
    if(selectedBtn==="start" && timerId==0){
        timerId=setInterval(() => {
            seconds++;
            if(seconds>59){
                seconds=0;
                minutes++;
            }
            if(minutes>59){
                minutes=0;
                hours++;
            }
            currentTime.innerText=`${hours<10?`0${hours}`:hours}:${minutes<10?`0${minutes}`:minutes}:${seconds<10?`0${seconds}`:seconds}`;   
        }, 500);
    }
    if(selectedBtn=="stop"){
        clearInterval(timerId);
        timerId=0;
    }
    if(selectedBtn=="reset"){
        clearInterval(timerId);
        hours=minutes=seconds=0;
        currentTime.innerText="00:00:00";
        timerId=0;
    }
        

})