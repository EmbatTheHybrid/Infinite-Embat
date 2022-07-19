const parent = document.getElementById("index_container")

let last = document.getElementById('last')
last.id = ""

window.onscroll = function() {
	let lastY = last.firstElementChild.getBoundingClientRect().y
	
	if (window.scrollY < lastY) {
		return
	}

	// Create image

	last = last.cloneNode(true)

	if (Math.floor(Math.random() * 100) <= 20) {
		// Easter egg
		last.firstElementChild.src = './images/EasterEgg/' + 
			Math.floor(Math.random() * 1000) <= 2 ? 'Shitstappen' : (Math.floor(Math.random() * 4) + 1) + 
			'.png'
	} else {
		last.firstElementChild.src = './images/' + (Math.floor(Math.random() * 13) + 1) + ".png"
	}

	parent.appendChild(last)
}