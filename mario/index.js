score = 0;
cross = true;

audio = new Audio('SoundTrack.mp3');
audioJ= new Audio('Jump.mp3')
audiogo = new Audio('Gameover.mp3');
setTimeout(() => {
    audio.play()
}, 700);

document.onkeydown = function (e) {
    console.log("keycode :", e.keycode)
    if (e.keyCode == 38) {
        mario = document.querySelector('.mario');
        mario.classList.add('animatemario');
        audioJ.play();
        // setTimeout(() => {
        //     audioJ.pause();
        // }, 1500);
        setTimeout(() => {
            mario.classList.remove('animatemario')
            // audioJ.pause();
        }, 700);
        setTimeout(() => {
            audioJ.pause();
        }, 1300);
    }
    if (e.keyCode == 39) {
        mario = document.querySelector('.mario');
        marioX = parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'));
        mario.style.left = marioX + 30 + "px";
    }
    if (e.keyCode == 37) {
        mario = document.querySelector('.mario');
        marioX = parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'));
        mario.style.left = (marioX - 30) + "px";
    }
}

setInterval(() => {
    mario = document.querySelector('.mario');
    gameover = document.querySelector('.gameover');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(mario, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    // console.log(offsetX, offsetY);
    if (offsetX < 50 && offsetY < 70) {
        gameover.style.visibility = 'visible';
        obstacle.classList.remove('obstacleani');
        audiogo.play();
        audio.pause();
    }
    else if (offsetX < 50 && cross) {
        score += 1;
        updatescore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            anidur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newdur = anidur - 0.1;
            obstacle.style.animationDuration = newdur + 's';
        }, 500);

    }

}, 10);

function updatescore(score) {
    scoreC.innerHTML = "Your Score :" + score
}

