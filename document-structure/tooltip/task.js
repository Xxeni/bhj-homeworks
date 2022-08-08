let hints = document.querySelectorAll(".has-tooltip")
hints.forEach(item => {
let div = document.createElement("div");
div.classList.add("tooltip");
item.after(div) 
})

for (let item of hints) {
item.onclick = () => {
    console.log(item.nextSibling)
    const position = item.getBoundingClientRect();
    let text = item.title;  
    item.nextSibling.textContent = text;
    item.nextSibling.setAttribute("data-position", "bottom")
    item.nextSibling.setAttribute("style", `left: ${position.left}px; top: ${position.top + 20}px;`)
    
    
    if (item.nextSibling.classList.contains("tooltip_active")) {
    item.nextSibling.classList.remove("tooltip_active");
    } else if (document.querySelector(".tooltip_active")){
    document.querySelector(".tooltip_active").classList.remove("tooltip_active");
    item.nextSibling.classList.add("tooltip_active");
    } else {
    item.nextSibling.classList.add("tooltip_active");
    }
    return false;
}  
}