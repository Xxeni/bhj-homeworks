obj = document.querySelectorAll(".reveal")

function isVisible (el) {
    const { top, bottom } = el.getBoundingClientRect();

    if (bottom < 0) {
        return false;
    }

    if (top > window.innerHeight) {
        return false;
    }

    return true;
}


for (let item of obj) {
    setInterval(() => {
        if (isVisible(item)) {
            item.classList.add("reveal_active")
        } else item.classList.remove("reveal_active")
    }, 500) 

    
}