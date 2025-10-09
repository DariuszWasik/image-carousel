// src/index.js
import './styles.css';
import { greeting } from './greeting.js';

console.log(greeting);

// src/index.js
import odinImage from './odin.png';

const image = document.createElement('img');
image.src = odinImage;

document.body.appendChild(image);
