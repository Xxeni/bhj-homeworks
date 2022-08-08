const image = document.getElementById('cookie');
let startClick = 0;


function clicker() {
	startClick = startClick + 1;
    document.getElementById('clicker__counter').innerHTML = startClick;
        
        if (startClick % 2 == 0) {
            image.width = 300;
        }
        else {
            image.width = 200;
        }
}

document.getElementById('cookie').onclick = function() {
    clicker();
}