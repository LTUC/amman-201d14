'use strict';

let audio = document.getElementById('audioTag');
let button = document.getElementById('randomizer');


button.addEventListener('click', function(){
    audio.volume = Math.random();
    console.log(audio.volume);
    audio.autoplay = true;
})

