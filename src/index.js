import 'normalize.css';
import './styles.css';
import colors from './colors';

const refs = {
    buttonStart: document.querySelector('[data-action="start"]'),
    buttonStop: document.querySelector('[data-action="stop"]')
}

let randomColor = null;

refs.buttonStart.addEventListener('click', () => {
    randomColor = setInterval(() => {
    document.body.style.backgroundColor = `${colors[randomIntegerFromInterval(0, colors.length - 1)]}`;
    }, 1000);
    });

refs.buttonStop.addEventListener('click', () => {
    clearInterval(randomColor);
});

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};








