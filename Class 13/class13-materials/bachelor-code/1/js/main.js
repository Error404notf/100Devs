// document.querySelector('#finalRose').addEventListener('click', finalRose)

// function finalRose(){
// 	document.getElementById('claire').style.display ='none'
// 	document.getElementById('sharleen').style.display ='none'
// 	document.getElementById('addText').innerText ='Hurray, The Final Rose goes to Nikki'
// }

document.querySelector('#finalRose').onclick =  nikki

function nikki(){
	document.querySelector('#claire').style.display = 'none'
	document.querySelector('#sharleen').style.display = 'none'
	document.querySelector('body').style.backgroundColor = 'blue'
	document.querySelector('#addText').innerHTML = 'Nikki You fucking rock'
}
