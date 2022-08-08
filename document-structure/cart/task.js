const minus = document.querySelectorAll(".product__quantity-control_dec")
const plus = document.querySelectorAll(".product__quantity-control_inc")
const productAdd = document.querySelectorAll(".product__add")
const cart = document.querySelector(".cart__products")
const productList = document.querySelectorAll(".product")

for (let item of minus) {
    item.onclick = () => {
        let valueItem = item.nextElementSibling
        let value = +valueItem.textContent 
        value--
        (value < 1) ? value = 1 : valueItem.textContent = value     
    }
}

for (let item of plus) {
    item.onclick = () => {
        let valueItem = item.previousElementSibling
        let value = +valueItem.textContent 
        value++
        valueItem.textContent = value     
    }
}


for (let item of productAdd) {
    item.onclick = () => {
        let obj = item.previousElementSibling.querySelector(".product__quantity-value")
        let value = +obj.textContent
        let id = item.closest(".product").getAttributeNode("data-id").value
        let srcImg = item.closest(".product").querySelector(".product__image").getAttributeNode("src").value

        const div = document.createElement("div")
                
            div.classList.add("cart__product")
            div.setAttribute("id", id)
            div.innerHTML += `
            <img class="cart__product-image" src=${srcImg}>
            <div class="cart__product-count">${value}</div>`

            
            
            if (document.getElementById(id)) {                
                const renderProduct = document.getElementById(id);
                renderProduct.querySelector(".cart__product-count").textContent = +renderProduct.querySelector(".cart__product-count").textContent + value;                   
                
        }  else {  
            cart.appendChild(div)};
    
}
}