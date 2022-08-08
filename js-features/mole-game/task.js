let missclick=0;
let killclick=0;
let massHole=[]
let myHole = document.getElementsByClassName('hole')

for (let i =1; i<=  myHole.length ; i++) {
massHole.push(document.getElementById(`hole${[i]}`))
}

massHole.forEach(element => element.onclick=function(){

	if (this.className != 'hole hole_has-mole') {
		console.log(missclick)
		missclick++;
		document.getElementById('lost').innerHTML= missclick;
		
		if (missclick === 5) {
		
		alert('Поражение!');
	
		document.getElementById('lost').innerHTML= 0;
    	document.getElementById('dead').innerHTML= 0;
    	missclick = 0;
		killclick= 0; 
		}
	}

	else {
		killclick++;	
document.getElementById('dead').innerHTML= killclick;
		
		if (killclick === 10) {
		alert('Победа!');

		document.getElementById('dead').innerHTML = 0;
		document.getElementById('lost').innerHTML = 0;
		killclick = 0;
		missclick = 0;
		}
	}
})