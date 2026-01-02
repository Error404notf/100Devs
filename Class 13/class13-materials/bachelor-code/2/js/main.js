document.querySelector('#andiNext').onclick = andi 
document.querySelector('#claireNext').onclick = claire 
document.querySelector('#sharleenNext').onclick = sharleen

function andi(){
	document.querySelector('#andi').classList.toggle('hidden')
	document.querySelector('#claire').classList.add('hidden')
	document.getElementById('sharleen').classList.add('hidden')
}

function claire(){
	document.querySelector('#claire').classList.toggle('hidden')
	document.querySelector('#andi').classList.add('hidden')
	document.getElementById('sharleen').classList.add('hidden')
}

function sharleen(){
	document.querySelector('#sharleen').classList.toggle('hidden')
	document.querySelector('#andi').classList.add('hidden')
	
}