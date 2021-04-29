let play = document.querySelector('.play');
let trailer = document.querySelector('.trailer');
let close = document.querySelector('.close');

play.addEventListener('click', () => {
    trailer.classList.add('active');
    video.currentTime = 0;
    video.pause();
})
close.addEventListener('click', () => {
    trailer.classList.remove('active');
})



