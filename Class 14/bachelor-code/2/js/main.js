document.querySelector('h1').addEventListener('click', run)


function run(){
	document.querySelector('body').style.backgroundColor = 'blue'
}

const andi = document.querySelector('#andiNext')
const claire = document.querySelector('#claireNext')
const sharleen = document.querySelector('#sharleenNext')


andi.onclick = andiNext
claire.onclick = claireNext
sharleen.onclick = sharleenNext

function andiNext(){
	document.querySelector('#claire').classList.add('hidden')
	document.querySelector('#sharleen').classList.add('hidden')
	document.querySelector('#andi').classList.toggle('hidden')
	document.querySelector('body').style.backgroundColor = 'red'
}

function claireNext(){
	document.querySelector('#sharleen').classList.add('hidden')
	document.querySelector('#andi').classList.add('hidden')
	document.querySelector('#claire').classList.toggle('hidden')
	document.querySelector('body').style.backgroundColor = 'purple'
}

function sharleenNext(){
	document.querySelector('#andi').classList.add('hiddden')
	document.querySelector('#claire').classList.add('hidden')
	document.querySelector('#sharleen').classList.toggle('hidden')
	document.querySelector('body').style.backgroundColor= 'green'
}