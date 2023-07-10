const audioPlayer = document.getElementById('audio-player');
let isPlaying = false; // Variable para controlar si la música está reproduciéndose

audioPlayer.addEventListener('ended', () => {
    audioPlayer.currentTime = 0; // Reinicia la reproducción al inicio de la canción
    if (isPlaying) {
        audioPlayer.play();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    audioPlayer.volume = 0.3;
    audioPlayer.play();
    isPlaying = true; // Establece el estado inicial como reproduciendo
});

const musicButton = document.querySelector('.music-button');

musicButton.addEventListener('click', () => {
    if (isPlaying) {
        audioPlayer.pause();
    } else {
        audioPlayer.play();
    }
    
    isPlaying = !isPlaying; // Invierte el valor de isPlaying
});


const backgroundVideo = document.getElementById('background-video');

document.addEventListener('DOMContentLoaded', () => {
  backgroundVideo.play();
});
