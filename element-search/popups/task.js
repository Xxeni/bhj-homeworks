let active = document.getElementById("modal_main");
active.className += " modal_active";

let closeBth = document.getElementsByClassName("modal__close");

let bthSuccess = document.querySelector(".show-success");
console.log(bthSuccess)
bthSuccess.addEventListener("click", () =>  {
    document.getElementById("modal_success").className += " modal_active";

})

for (let item of closeBth) {
item.onclick = () => {
    if (item.parentElement.parentElement.classList.contains("modal_active") && item.classList.contains("modal__close_times")) {
        item.parentElement.parentElement.classList.remove("modal_active");
        active.classList.remove("modal_active");
    } 
    
}
} 