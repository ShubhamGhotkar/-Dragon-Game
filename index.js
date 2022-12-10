const button = document.getElementById('startbutton');
const warrrier = document.getElementById('Warrior');
const dragon = document.getElementById('dragon');
const score = document.getElementById('score');
const gameOver = document.getElementById('gameover');
const audio_start = document.getElementById('audio_start');
const audio_stop = document.getElementById('audio_stop');
const audio_jump = document.getElementById('audio_jump');
let left_Distance = 0;
let crossing_Check = true;
let score_count = 0;



const startGame = () => {
    score.innerText = 'SCORE :' + score_count;
    button.classList = 'display-none'
    score.classList.remove('display-none')
    warrrier.classList.remove('display-none')
    dragon.classList.remove('display-none')
    warrrier.classList = 'applyAnimination';
    // audio_start.play()
}


// add event Listener in Arrow Function
window.addEventListener('keydown', (key) => {

    if (key.keyCode == 37 && left_Distance >= 10) {
        dragon.style.left = (left_Distance - 10) + 'vw'
        left_Distance -= 10

    }
    // key code 38 is for up arrow key
    if (key.keyCode == 38) {
        // audio_jump.play()
        dragon.style.top = -15 + 'vh'
        setTimeout(() => {
            dragon.style.top = 15 + 'vh'
        }, 400);
    }
    // key code 39 is for right arrow key
    if (key.keyCode == 39 && left_Distance <= 70) {
        dragon.style.left = (left_Distance += 18) + 'vw'

    }
    // key code 37 is use for left arrow key

    document.removeEventListener('keydown', () => { })
})



setInterval(() => {

    // parse int give me result in number
    let dx = parseInt(window.getComputedStyle(dragon, null).getPropertyValue('left'));
    let dy = parseInt(window.getComputedStyle(dragon, null).getPropertyValue('top'));

    let ox = parseInt(window.getComputedStyle(warrrier, null).getPropertyValue('left'));
    let oy = parseInt(window.getComputedStyle(warrrier, null).getPropertyValue('top'));

    let offsetX = Math.abs((dx - ox));
    let offsetY = Math.abs(dy - oy);

    // to check distance between warrier and dragon.
    if (offsetX < 170 && offsetY < 61) {
        // audio_stop.play()
        let check = false
        warrrier.classList.remove('applyAnimination');
        // audio_start.pause()
        setTimeout(() => {
            warrrier.classList = 'display-none';
            dragon.classList = 'display-none';
            score.classList = 'display-none';
            gameOver.classList.remove('display-none')

        }, 250);

        setTimeout(() => {
            button.classList.remove('display-none')
            gameOver.classList = 'display-none'
            location.reload();
        }, 1000);

    }


    else if (offsetY > 150 && crossing_Check) {
        crossing_Check = false;
        setTimeout(() => {
            score_count += 1
            score.innerText = `SCORE : ${score_count}`;
            crossing_Check = true
        }, 1000);
    }

}, 10);







