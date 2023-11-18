import { generateJoke } from './generateJoke.js';
import { v4 as uuidv4 } from 'uuid';
import './styles/main.scss';
import cat from './assets/cat.svg'; 

const catImg = document.getElementById('catImg');
catImg.src = cat;

const jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click', generateJoke);

generateJoke();

console.log(`Useless random ID - ${uuidv4()}`);
