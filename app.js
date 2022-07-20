const parent = document.getElementById("index_container")

let last = document.getElementById('last')
last.id = ""

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) * 1.35  &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function createImage() {
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

	parent.appendChild(last)
}

window.onscroll = function() {
	if (!isInViewport(last)) {
		return
	}

	// Create image

	createImage()
}

if (window.innerWidth < 160) {
	createImage()
}