const audios = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
const bottons = document.querySelectorAll('body div button');

bottons.forEach((button, index) => {
    button.addEventListener('click', () => {
        document.querySelectorAll('audio').forEach((audio) => {
            audio.pause();
            audio.currentTime = 0;
        })
        document.getElementById(audios[index]).play();
    })
})