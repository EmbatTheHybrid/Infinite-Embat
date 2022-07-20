const parent = document.getElementById("index_container")

let last = document.getElementById('last')
last.id = ""

let observer = new IntersectionObserver(function(entries) {
	if (entries[0].isIntersecting) {
		createImage()
	}
}, { threshold: [0]})

function createImage() {
	observer.unobserve(last)
	last = last.cloneNode(true)

	if (Math.floor(Math.random() * 100) <= 2) {
		// Easter egg
		let image = ""
		if (Math.floor(Math.random() * 1000) <= 5) {
			image = "Shitstappen"
		} else {
			image = (Math.floor(Math.random() * 4) + 1)
		}

		last.firstElementChild.src = './images/EasterEgg/' + image + '.png'
	} else {
		last.firstElementChild.src = './images/' + (Math.floor(Math.random() * 13) + 1) + ".png"
	}

	observer.observe(last)
	parent.appendChild(last)
}

observer.observe(last)

createImage()
createImage()

if (window.innerWidth < 160) {
	createImage()
}