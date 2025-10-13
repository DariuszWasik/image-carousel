// src/index.js
import './modernReset.css';
import './styles.css';
import a1 from '/assets/a1.jpg';
import a2 from '/assets/a2.jpg';
import a3 from '/assets/a3.jpg';
import a4 from '/assets/a4.jpg';
import a5 from '/assets/a5.jpg';
import a6 from '/assets/a6.jpg';
import a7 from '/assets/a7.jpg';
import a8 from '/assets/a8.jpg';

const imgArray = [a1, a2, a3, a4, a5, a6, a7, a8];

function render() {
	const mainIMG = document.createElement('img');
	mainIMG.src = imgArray[0];
	const currentSlide = document.querySelector('.current-slide');
	currentSlide.style.backgroundImage = `url(${imgArray[0]})`;
	currentSlide.style.backgroundSize = 'cover';
	currentSlide.style.backgroundPosition = 'center';

	const nextIMG = document.createElement('img');
	nextIMG.src = imgArray[1];
	const nextSlide = document.querySelector('.slide-next');
	nextSlide.style.backgroundSize = 'cover';
	nextSlide.style.backgroundImage = `url(${imgArray[1]})`;
	nextSlide.style.backgroundPosition = 'center';

	const prevIMG = document.createElement('img');
	prevIMG.src = imgArray[imgArray.length - 1];
	const prevSlide = document.querySelector('.slide-prev');
	prevSlide.style.backgroundSize = 'cover';
	prevSlide.style.backgroundImage = `url(${imgArray[imgArray.length - 1]})`;
	prevSlide.style.backgroundPosition = 'center';
}

render();

function buttonsFunctionality() {
	const nextBtn = document.querySelector('.next');

	nextBtn.addEventListener('click', () => {
		const el = imgArray.shift();
		imgArray.push(el);
		render();
		console.log(imgArray);
	});

	const prevBtn = document.querySelector('.prev');

	prevBtn.addEventListener('click', () => {
		console.log(imgArray);
		const el = imgArray.pop();
		imgArray.unshift(el);
		render();
	});
}

buttonsFunctionality();
