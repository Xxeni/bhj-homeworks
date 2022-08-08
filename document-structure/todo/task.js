const inputToDo = document.querySelector(".tasks__input")
const taskList = document.querySelector(".tasks__list")
const taskBtn = document.querySelector(".tasks__add")
let removeTask = document.querySelectorAll(".task__remove");


function Add () {
    let text = inputToDo.value.trim();
    console.log(text)
    if (text.length > 0) {
        const task = document.createElement("div")
        task.classList.add("task")
        taskList.appendChild(task);
    task.innerHTML += `
        <div class="task__title">
        ${text}
        </div>
        <a href="#" class="task__remove">&times;</a>
    </div>`
    
    let removeItem = task.querySelector(".task__remove")
    removeItem.addEventListener("click", (e) => {
        e.target.closest(".task").remove();
    })



        inputToDo.value = ""
        
}
return false
}

taskBtn.onclick = Add
inputToDo.change = Add