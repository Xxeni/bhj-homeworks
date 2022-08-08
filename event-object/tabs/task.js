content = document.querySelectorAll(".tab__content");
tabNav = Array.from(document.querySelectorAll(".tab"));

console.log(content)
console.log(tabNav)

for (let item of tabNav) {
    item.onclick = () => {
        document.querySelector(".tab_active").classList.remove("tab_active");
        item.classList.add("tab_active")
        let index = tabNav.indexOf(item)

        document.querySelector(".tab__content_active").classList.remove("tab__content_active")
        content[index].classList.add("tab__content_active")
        }
}