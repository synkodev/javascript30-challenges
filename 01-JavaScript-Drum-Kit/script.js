/*
  This scripts contains every single one of the steps below in order to achieve the desired result:
  * Add event whenever one of the desired keys is pressed
  * Add a CSS class corresponding to the visual change the keystroke should produce
  * Play the correspoding sound
  * Remove the effect added in the step 2
*/

// Function 1: plays the sound and changes border color
const playSound = async event => {
  const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  if (key && audio) {
    if (audio.currentTime > 0) {
      await audio.pause();
      audio.currentTime = 0;
    }
    await audio.play();
    key.classList.add('playing');
  } else {
    return;
  }
};

// Function 2: removes visual changes from function 1
const removeEffect = event => {
  if(event.propertyName === 'transform') {
    event.target.classList.remove('playing');
  }
};

// Add event to the whole body
document.body.addEventListener("keydown", playSound);

// Add event to each key
const allKeys = document.querySelectorAll('.key');
allKeys.forEach(key => key.addEventListener('transitionend', removeEffect));
