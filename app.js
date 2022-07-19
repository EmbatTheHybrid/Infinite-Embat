const parent = document.getElementById("index_container")

let last = document.getElementById('last')
last.id = ""

window.onscroll = function() {
	let lastY = last.firstElementChild.getBoundingClientRect().y
	
	if (window.scrollY < lastY) {
		return
	}

	last = last.cloneNode(true)
	last.firstElementChild.src = './images/' + (Math.floor(Math.random() * 8) + 1) + ".png"
	parent.appendChild(last)
}