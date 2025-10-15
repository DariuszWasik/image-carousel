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

let arrayObj = [];
imgArray.forEach((el, index) => {
	arrayObj.push({
		src: el,
		id: `choice${index}`,
		num: +`choice${index}`.replace(/\D/g, ''),
	});
	// console.log(el, index);
});
console.log(arrayObj);

const copyInOrder = JSON.parse(JSON.stringify(arrayObj));

console.log('moja copia', copyInOrder);

// const imgAllwaysSameOrder = [a1, a2, a3, a4, a5, a6, a7, a8];
const dotsContainer = document.querySelector('.dots');
dotsContainer.innerHTML = '';

for (let i = 0; i < arrayObj.length; i++) {
	const choice = document.createElement('input');
	choice.type = 'radio';
	choice.name = 'currentImage';
	choice.id = arrayObj[i].id;
	choice.num = arrayObj[i].num;
	choice.style.width = '1rem';
	dotsContainer.append(choice);
	console.log(choice);
}

console.log(dotsContainer);

// const myDots = [];
// dotsContainer.forEach((el) => myDots.push(el));
// console.log(myDots);
const myDots = Array.from(dotsContainer.querySelectorAll('input'));
// console.log(myDots);

function render() {
	const mainIMG = document.createElement('img');
	mainIMG.src = arrayObj[0].src;
	const currentSlide = document.querySelector('.current-slide');
	currentSlide.style.backgroundImage = `url(${arrayObj[0].src})`;
	currentSlide.style.backgroundSize = 'cover';
	currentSlide.style.backgroundPosition = 'center';

	const nextIMG = document.createElement('img');
	nextIMG.src = arrayObj[1].src;
	const nextSlide = document.querySelector('.slide-next');
	nextSlide.style.backgroundSize = 'cover';
	nextSlide.style.backgroundImage = `url(${arrayObj[1].src})`;
	nextSlide.style.backgroundPosition = 'center';

	const prevIMG = document.createElement('img');
	prevIMG.src = arrayObj[arrayObj.length - 1].src;
	const prevSlide = document.querySelector('.slide-prev');
	prevSlide.style.backgroundSize = 'cover';
	prevSlide.style.backgroundImage = `url(${arrayObj[arrayObj.length - 1].src})`;
	prevSlide.style.backgroundPosition = 'center';

	setDot();
}

render();
let startCarousel = setInterval(nextBtnFunc, 3000);
// startCarousel();
function stop() {
	clearInterval(startCarousel);
}

function buttonsFunctionality() {
	const nextBtn = document.querySelector('.next');

	nextBtn.addEventListener('click', () => {
		// clearInterval(startCarousel);
		stop();
		const el = arrayObj.shift();
		arrayObj.push(el);
		render();

		startCarousel = setInterval(nextBtnFunc, 3000);
	});

	const prevBtn = document.querySelector('.prev');

	prevBtn.addEventListener('click', () => {
		stop();
		const el = arrayObj.pop();
		arrayObj.unshift(el);
		render();
		startCarousel = setInterval(nextBtnFunc, 3000);
		// startCarousel();
	});
}

buttonsFunctionality();

// dots...

// myDots[3].checked = true;

function setDot() {
	// console.log(arrayObj[0].id);
	// const id = arrayObj[0].id;
	// const num = +id.replace(/\D/g, '');
	// console.log(num);
	myDots[arrayObj[0].num].checked = true;
}

function nextBtnFunc() {
	const el = arrayObj.shift();
	arrayObj.push(el);
	render();
}

// myDots[2].addEventListener('click', () => {
// 	console.log('youve clicked me');
// 	console.log(myDots, '-myDots', myDots[2].num);
// 	const position = arrayObj.map((e) => e.num).indexOf(myDots[2].num);
// 	console.log(position, 'position');
// 	// console.log(copyInOrder.splice(0, 3));
// 	// console.log(copyInOrder);
// 	const copyOfCopyInOrder = JSON.parse(JSON.stringify(copyInOrder));
// 	const beforeMyDot = copyOfCopyInOrder.splice(0, 2);
// 	console.log(beforeMyDot, copyOfCopyInOrder);
// 	const newArray = copyOfCopyInOrder.concat(beforeMyDot);
// 	console.log(newArray);
// 	arrayObj = newArray;
// 	render();
// });

myDots.forEach((e) => {
	e.addEventListener('click', () => {
		const copyOfCopyInOrder = JSON.parse(JSON.stringify(copyInOrder));
		const beforeMyDot = copyOfCopyInOrder.splice(0, e.num);
		console.log(beforeMyDot, copyOfCopyInOrder);
		const newArray = copyOfCopyInOrder.concat(beforeMyDot);
		console.log(newArray);
		arrayObj = newArray;
		render();
	});
});
