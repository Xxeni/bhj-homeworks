let fontsSize = document.querySelectorAll(".font-size");
let bookContent = document. querySelector(".book");
let colorControlFont = document.querySelector(".book__control_color").children
let colorControlBg = document.querySelector(".book__control_background").children


for (let item of fontsSize) {
    item.onclick = () => {
    document.querySelector(".font-size_active").classList.remove("font-size_active")
        item.classList.add("font-size_active");
        let attributeFs = item.getAttribute("data-size");
    
    if (attributeFs === "big") {
        bookContent.classList.remove("book_fs-small");
        bookContent.classList.add("book_fs-big");
    }

    if (attributeFs === "small") {
        bookContent.classList.remove("book_fs-big");
        bookContent.classList.add("book_fs-small");
    }

    if (attributeFs === null) {
        bookContent.classList.remove("book_fs-big");
        bookContent.classList.remove("book_fs-small");
    }
    
        return false;
    }
}
for (let item of colorControlFont) {
    item.onclick = () => {
        document.querySelector(".color_active").classList.remove("color_active");
        item.classList.add("color_active")
        let attributeFs = item.getAttribute("data-text-color");

        if (attributeFs === "black") {
            bookContent.classList.remove("book_color-gray");
            bookContent.classList.remove("book_color-whitesmoke");
            bookContent.classList.add("book_color-black");
        }
    
        if (attributeFs === "gray") {
            bookContent.classList.add("book_color-gray");
            bookContent.classList.remove("book_color-whitesmoke");
            bookContent.classList.remove("book_color-black");
        }
    
        if (attributeFs === "whitesmoke") {
            bookContent.classList.remove("book_color-gray");
            bookContent.classList.add("book_color-whitesmoke");
            bookContent.classList.remove("book_color-black");
        }
                
            return false;

    }
}

for (let item of colorControlBg ) {
    item.onclick = () => {
        document.querySelector(".color_active").classList.remove("color_active");
        item.classList.add("color_active")
        let attributeFs = item.getAttribute("data-bg-color");

        if (attributeFs === "black") {
            bookContent.classList.remove("book_bg-gray");
            bookContent.classList.add("book_bg-black");
            bookContent.classList.remove("book_bg-white");
        }
    
        if (attributeFs === "gray") {
            bookContent.classList.add("book_bg-gray");
            bookContent.classList.remove("book_bg-black");
            bookContent.classList.remove("book_bg-white");
        }
    
        if (attributeFs === "white") {
            bookContent.classList.remove("book_bg-gray");
            bookContent.classList.remove("book_bg-black");
            bookContent.classList.add("book_bg-white");
        }
                
            return false;

    }
}