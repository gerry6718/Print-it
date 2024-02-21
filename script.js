const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}	
]

const slide = document.getElementById("slide");
const arrow_right = document.querySelector(".arrow_right");
const arrow_left = document.querySelector(".arrow_left");
/*const dots = document.querySelectorAll(".dot");
const dot = document.querySelector(".dot");*/

let index = 0;

function changeSlide(sens) {
	index = index + sens;
	if (index > slides.length - 1)
	index = 0;
	if (index < 0)
	index = slides.length - 1;
	document.getElementById("slide").src = "./assets/images/slideshow/" + slides[index].image;

	tagLine = slides[index].tagLine;
	document.querySelector("p").innerHTML = tagLine;
};

/*function selectedDot(sens) {
	dots.forEach((dot, i) => {
		if (i === sens) {
			dot.classList.add("dot_selected");
		} else {
			dot.classList.remove("dot_selected");
		}
	});
}*/

arrow_right.addEventListener("click", () => {
	changeSlide(index);
		console.log("slide suivante")
});

arrow_left.addEventListener("click", () => {
	changeSlide(index);
		console.log("slide precedente")
});

/*dot.addEventListener("click", () => {
	selectedDot(index)
		console.log("change dot")
});*/

//setInterval("changerSlide(1)", 4000);