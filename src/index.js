import 'normalize.css';
import './styles.css';
import colors from './colors';

const refs = {
    buttonStart: document.querySelector('[data-action="start"]'),
    buttonStop: document.querySelector('[data-action="stop"]'),
    buttonText: document.querySelector('.button-text')
}

let randomColor = null;

refs.buttonStart.addEventListener('click', () => {
        randomColor = setInterval(() => {
        document.body.style.backgroundColor = `${colors[randomIntegerFromInterval(0, colors.length - 1)]}`;
        }, 1000);
    refs.buttonStart.setAttribute('disabled', 'disabled');
    refs.buttonStart.classList.add('disabled-border');
    refs.buttonText.classList.add('disabled-text')   
    });

refs.buttonStop.addEventListener('click', () => {
    clearInterval(randomColor);
    refs.buttonStart.removeAttribute('disabled');
    refs.buttonStart.classList.remove('disabled-border');
    refs.buttonText.classList.remove('disabled-text')   
});

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};









