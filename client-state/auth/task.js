const signin = document.querySelector('#signin');
const userId = document.querySelector('#user_id');
const welcome = document.querySelector('#welcome');

let id = localStorage.getItem('userId');
if(id){
    welcomeFunc(id);
}

function welcomeFunc(id) {
    signin.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
    userId.textContent = id;
}

document.forms.formAuth.addEventListener("submit", (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest()
    let formData = new FormData(document.forms.formAuth)
    
    xhr.open ("POST", "https://netology-slow-rest.herokuapp.com/auth.php")
    xhr.send(formData)
    xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState === xhr.DONE) {
        const parse = JSON.parse(xhr.responseText);
        console.log(parse)

        if(parse.success){
            welcomeFunc(id);
            userId.textContent = parse.user_id;
            localStorage.setItem('userId', userId.textContent);
        } else{                
            alert('Не верный логин или пароль');
        }
    }
})
})