const xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php")
xhr.send()

const title_poll = document.querySelector(".poll__title")
const answers = document.querySelector(".poll__answers")


xhr.addEventListener("readystatechange",  () => {
    if (xhr.readyState === xhr.DONE) {
        let text = JSON.parse(xhr.responseText) 
        
        let title = text.data.title
        title_poll.textContent = title;

        for (let i=0; i<text.data.answers.length; i++) {
            answers.innerHTML += 
            `<button class="poll__answer">
            ${text.data.answers[i]}
        </button>`
        }
    }
    const btn = document.querySelectorAll(".poll__answer")
    for (let item of btn) {
        item.onclick = () => {
            alert("Спасибо, ваш голос засчитан!");
            location.reload()
        }
    } 
})