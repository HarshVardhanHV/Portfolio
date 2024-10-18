score = 0;
cross = true;

audio = new Audio('SoundTrack.mp3');
audioJ= new Audio('newjump/newjump.MP3')
audiogo = new Audio('Gameover.mp3');
setTimeout(() => {
    audio.play()
}, 700);

document.onkeydown = function (e) {
    console.log("keycode :", e.keycode)
    if (e.keyCode == 38 || e.keyCode == 32 || e.keyCode == 87 || e.keyCode == 104) {
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
        }, 1500);
    }
    if (e.keyCode == 39 || e.keyCode == 68 || e.keyCode == 102) {
        mario = document.querySelector('.mario');
        marioX = parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'));
        mario.style.left = marioX + 30 + "px";
    }
    if (e.keyCode == 37 || e.keyCode == 65 || e.keyCode == 100) {
        mario = document.querySelector('.mario');
        marioX = parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'));
        mario.style.left = (marioX - 30) + "px";
    }
}

setInterval(() => {
    mario = document.querySelector('.mario');
    gameover = document.querySelector('.gameover');
    obstacle = document.querySelector('.obstacle');
    back = document.querySelector('.ground');
    m = document.querySelector('.mountain');
    c = document.querySelector('.cloud');

    dx = parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(mario, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    // console.log(offsetX, offsetY);
    if (offsetX < 70 && offsetY < 80) {
        gameover.style.visibility = 'visible';
        obstacle.classList.remove('obstacleani');
        back.classList.remove('groundani');
        m.classList.remove('mountainani');
        c.classList.remove('cloudani');
        // mario.classList.remove('mario');
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
        // setTimeout(() => {
        //     anidur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
        //     newdur = anidur - 0.1;
        //     obstacle.style.animationDuration = newdur + 's';
        // }, 500);

    }

}, 10);

function updatescore(score) {
    scoreC.innerHTML = "Your Score : " + score
}

