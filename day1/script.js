
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // console.log(audio);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    // console.log(key);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e) {
    // console.log(e);
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');

window.addEventListener('keydown', playSound);


keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// learnt about
// 1. querySelector
// 2. data-key
// 3. transitionend
// 4. addEventListener
// 5. forEach
// 6. keyCode
// 7. currentTime
// 8. classList
// 9. add
// 10. remove
// 11. querySelectorAll
// 12. addEventListener
// 13. window
// 14. propertyname
// 15. this
// 16. transform
// 19. play
// 20. currentTime
// 21. transitionend
