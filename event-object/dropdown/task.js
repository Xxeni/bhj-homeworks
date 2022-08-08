dropList = document.querySelectorAll(".dropdown__item")
btn = document.querySelector(".dropdown__value")


console.log(dropList)

btn.onclick = () => {
    if (document.querySelector(".dropdown__list_active") == null) {
    document.querySelector(".dropdown__list").className += " dropdown__list_active";
    } else document.querySelector(".dropdown__list").classList.remove("dropdown__list_active");
} 

for (let item of dropList) {
    item.onclick = () => {
        document.querySelector(".dropdown__list").classList.remove("dropdown__list_active");
        let p = item.querySelector(".dropdown__link").innerHTML;
        btn.innerHTML = p
    return false
    }
}