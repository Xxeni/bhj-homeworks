const xhr = new XMLHttpRequest()
xhr.open("GET", "https://netology-slow-rest.herokuapp.com/")
xhr.send()

const loader = document.querySelector(".loader")
const itemsBlocks = document.getElementById("items")


xhr.addEventListener("readystatechange",  () => {
    if (xhr.readyState === xhr.DONE) {
        let text = JSON.parse(xhr.responseText) 
        let currency = Object.entries(text.response.Valute)
        loader.classList.remove("loader_active")
        
        currency.forEach((item) => {
            itemsBlocks.innerHTML += 
            `<div class="item">
            <div class="item__code">
            ${item[1].CharCode}
            </div>
            <div class="item__value">
            ${item[1].Value}
            </div>
            <div class="item__currency">
            руб.
            </div>
            </div>`})           
        }
    })    