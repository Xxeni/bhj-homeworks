let images = document.querySelectorAll(".slider__item");
let prevBth = document.querySelector(".slider__arrow_prev");
let nextBth = document.querySelector(".slider__arrow_next");

prevBth.onclick = () => { 
    showSlides(slideIndex -= 1);  
};
nextBth.onclick = () => {
    showSlides(slideIndex += 1);
};

let slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {   
    let slides = document.querySelectorAll(".slider__item");
    
    if (n > slides.length) {
    slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for ( let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("slider__item_active");
    }
    slides[slideIndex - 1].className += " slider__item_active";     
}




function currentSlide(n) {
    showSlides(slideIndex = n);
}