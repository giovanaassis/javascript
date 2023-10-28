'use strict';

const sounds = {
    'B': 'boom.wav',
    'C': 'clap.wav',
    'H': 'hihat.wav',
    'K': 'kick.wav',
    'O': 'openhat.wav',
    'R': 'ride.wav',
    'S': 'snare.wav',
    'I': 'tink.wav',
    'T': 'tom.wav'
}

const createDiv = (text) => {
    const div = document.createElement('div');
    div.classList.add('key');
    div.textContent = text;
    div.id = text;
    document.querySelector('.container').appendChild(div);
}

const bringSound = (sounds) => Object.keys(sounds).forEach(createDiv)
bringSound(sounds);

const playSound = (reference) => {
    const audio = new Audio(`sounds/${sounds[reference]}`);
    audio.play();
}


const addEffect = (letter) => document.getElementById(letter).classList.add('active');

const removeEffect = (letter) => {
    const div = document.getElementById(letter);
    const removeActive = () => div.classList.remove('active');
    div.addEventListener('transitionend', removeActive);
}

document.querySelector('.container').addEventListener('click', (event) => {
    const letter = event.target.textContent;
    const letterPermitted = sounds.hasOwnProperty(letter);
    if (letterPermitted) {
        addEffect(letter);
        playSound(letter);
        removeEffect(letter);
    }
})