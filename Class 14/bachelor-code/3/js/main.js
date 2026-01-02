const contestants = document.querySelectorAll('.contestant')

Array.from(contestants).forEach(element => element.addEventListener('click', checkForRose))

function checkForRose(click){
	if(click.target.classList.contains('rose')){
		document.querySelector('#nikki').classList.toggle('hidden')
	}else{
		alert('Wrong')
	}
}

// document.querySelector('.contestant').onclick = claire

// document.querySelector('.rose').addEventListener('click', nikki)

// function claire(){
// 	alert('Wrong!')
// }

// function nikki(){
// 	document.querySelector('#nikki').classList.toggle('hidden')
// }

