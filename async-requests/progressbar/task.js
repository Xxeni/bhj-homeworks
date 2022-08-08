const progressLoading = document.getElementById('progress');
progressLoading.value = 0;  

function loadProcess(a, b){   
    if(progressLoading.value < +(a / b)) {
        progressLoading.value = +(a / b);
    }
}

let form = document.getElementById('form'); 

form.addEventListener('submit', function(e) { 
    e.preventDefault();
    let xhr = new XMLHttpRequest(); 
    formData = new FormData(this); 

    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php'); 
    
        const idInterval = setInterval(() => {
            if (!xhr.upload.onprogress) {
                if (progressLoading.value < 0.85) {
                    progressLoading.value = 0.005 +  progressLoading.value
                }
            }
        }, 200)

    
    if(xhr.upload){
        xhr.upload.addEventListener("progress", function (e) { 
            clearInterval(idInterval);
            if (e.lengthComputable) {
                loadProcess (e.loaded, e.total);
            }
        }, false);

    xhr.send(formData);
    }
})