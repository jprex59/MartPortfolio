// recuperer les elements
let descriptionOffset = document.getElementById("descriptionOffsetTop");
let navbar = document.querySelector(".navbar");
let ColorItem = document.querySelector(".nav_title span");

/*****/
let descriptionOffsetTop = descriptionOffset.offsetTop;

// faire la fonction
/*****Plus tard mettre dans un tableau*****/
function Section() {
	console.log(window.pageYOffset);
	if (window.pageYOffset < descriptionOffsetTop) {
		navbar.classList.add("is-black");
		navbar.classList.remove("is-offset");
	} else if (window.pageYOffset > descriptionOffsetTop) {
		navbar.classList.remove("is-black");
		navbar.classList.add("is-offset");
	}
}

window.onscroll = function () {
	Section();
};
