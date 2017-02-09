//Here i get the event listener
window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; //Stops the function
    audio.currentTime = 0; //Rewinds the audio
    audio.play();
    //I add the class playing from the css
    key.classList.add('playing');
});

function removeTransition (e) {
    if(e.propertyName !== 'transform') return; //Skips if it's not a transform
    this.classList.remove('playing');
    //console.log(e);
}

//Get all the keys and remove the transition
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));