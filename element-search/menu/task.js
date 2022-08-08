allLink = document.querySelectorAll(".menu__link")

for (let item of allLink) {
item.onclick = () => {
    let par = item.closest(".menu__item");
    let menu = par.querySelector(".menu_sub");
    if (document.querySelector(".menu_active")) document.querySelector(".menu_active").classList.remove("menu_active");

    if (par.querySelector(".menu_sub") !== null) {
        menu.className += " menu_active";
        return false
    }   
}

}