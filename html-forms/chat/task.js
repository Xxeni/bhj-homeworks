const chatWidget = document.querySelector(".chat-widget")
const inputs = document.querySelector(".chat-widget__input")
const messages = document.querySelector(".chat-widget__messages");

let data;
let time;
let i;
let robotMss = ["Вы не купили ни одного товара, что с вами разговаривать",
                "Кто тут!?",
                "Добрый день, до свидания!",
                "К сожалению все операторы заняты",
                "Ты кто?",]



chatWidget.addEventListener("click", () => {
    chatWidget.classList.add("chat-widget_active")
})



inputs.addEventListener("change", () => {
data = new Date()
time = data.getHours() + ":" + data.getMinutes()
let text = inputs.value;
  i = Math.floor(Math.random() * robotMss.length)
    messages.innerHTML += `
    <div class="message  message_client">
    <div class="message__time">${time}</div>
    <div class="message__text">
        ${text}
    </div>
    </div>
    `;    
    inputs.value = "";
    
    messages.innerHTML += `
    <div class="message">
    <div class="message__time">${time}</div>
    <div class="message__text">
        ${robotMss[i]}
    </div>
    </div>
    `;       
})