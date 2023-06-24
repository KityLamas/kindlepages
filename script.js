

let sliderMain = document.getElementById("slider-main");

let muestra = sliderMain.getElementsByClassName("muestra");

function next(){

	sliderMain.append(muestra[0]);

	muestra.classList.toggle("trans");
}

function prev(){
	sliderMain.prepend(muestra[muestra.length - 1]);
}