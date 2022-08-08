allRotatorText = document.querySelectorAll(".rotator__case")

console.log(allRotatorText)

let index = 1

function showRotator(n) {     
    for ( let i = 0; i < allRotatorText.length; i++) {
        allRotatorText[i].classList.remove("rotator__case_active");
    }
    allRotatorText[index].classList.add("rotator__case_active"); 
    index++;
    if (index > allRotatorText.length - 1) index = 0;
    
}
setInterval(() => {
    showRotator(index);
}, 1000)