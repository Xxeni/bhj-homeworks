let timer; 
let elementTimer = document.getElementById("timer");
let x = +elementTimer.textContent;
setTimeout(countdown, 1000); 
function countdown(){  
x--; 
if (x<0){
    clearTimeout(timer); 
    alert("Вы победили в конкурсе!");
}
else {
    elementTimer.textContent = x;
    elementTimer.textContent = elementTimer.textContent.padStart(2, "0");
    timer = setTimeout(countdown, 1000);
}
}