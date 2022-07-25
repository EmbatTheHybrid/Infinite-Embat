const parent = document.getElementById("index_container")

let last = document.getElementById('last')
last.id = ""

let observer = new IntersectionObserver(function(entries) {
	if (entries[0].isIntersecting) {
		createImage()
	}
}, { threshold: [0]})

let cache = {
	"EasterEgg": {},
	"Images": {}
}

function createImage() {
	observer.unobserve(last)
	
	let imgDir = ""
	let foundCache = undefined

	let image = ""
	let place = ""

	if (Math.floor(Math.random() * 100) <= 2) {
		// Easter egg
		
		if (Math.floor(Math.random() * 1000) <= 5) {
			image = "Shitstappen"
		} else {
			image = (Math.floor(Math.random() * 4) + 1)
		}

		image = image + ".png"

		foundCache = cache["EasterEgg"][image]
		place = "EasterEgg"

		imgDir = './images/EasterEgg/' + image
	} else {
		image = (Math.floor(Math.random() * 13) + 1) + ".png"

		foundCache = cache["Images"][image]
		place = "Images"

		imgDir = './images/' + image
	}
	
	last = foundCache !== undefined ? foundCache.cloneNode(true) : last.cloneNode(true)

	if (foundCache === undefined) {
		last.style.backgroundImage = `url(${imgDir})`
		cache[place][image] = last
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