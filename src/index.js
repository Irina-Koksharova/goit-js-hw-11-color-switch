import 'normalize.css';
import './styles.css';
import colors from './colors';

const refs = {
    buttonStart: document.querySelector('[data-action="start"]'),
    buttonStop: document.querySelector('[data-action="stop"]'),
}

refs.buttonStart.addEventListener('click', () => {
    timer.start();
});

refs.buttonStop.addEventListener('click', () => {
    timer.stop();
});

const timer = {
    randomColorId: null, 
    isActive: false,
    start() {
        if (this.isActive) {
            return
        }
        this.randomColorId = setInterval(() => {
            document.body.style.backgroundColor = `${colors[randomIntegerFromInterval(0, colors.length - 1)]}`;
        }, 1000);
        this.isActive = true;
        refs.buttonStart.classList.add('disabled');
            },
    stop() {
        clearInterval(this.randomColorId);
        this.isActive = false;
        refs.buttonStart.classList.remove('disabled');
       }
}

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

// let randomColorId = null;

// refs.buttonStart.addEventListener('click', () => {
//     randomColorId = setInterval(() => {
//         document.body.style.backgroundColor = `${colors[randomIntegerFromInterval(0, colors.length - 1)]}`;
//         }, 1000);
//     refs.buttonStart.setAttribute('disabled', 'disabled');
//     refs.buttonStart.classList.add('disabled'); 
//     });

// refs.buttonStop.addEventListener('click', () => {
//     clearInterval(randomColorId);
//     refs.buttonStart.removeAttribute('disabled');
//     refs.buttonStart.classList.remove('disabled');  
// });











