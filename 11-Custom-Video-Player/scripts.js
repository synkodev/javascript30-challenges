/* Step 1 - Get the elements:
 * Video player;
 * Progress bar;
 * Volume control;
 * Playback rate control;
 * Skip buttons (forward and backward);
 * Play / Pause button;
 */
const video = document.querySelector('video');
const togglePlay = document.querySelector('.player__button.toggle');
const rangeControls = document.querySelectorAll('input[type="range"]');
const skipControls = document.querySelectorAll('button[data-skip]');
const progressBar = document.querySelector('.progress__filled');
const progress = document.querySelector('div.progress');

/**
 * Indicates whether user is dragging the progress bar or not.
 */
let isDragging = false;

/* Step 2 - Define events and handlers:
 * Clicking to play / pause should change the icon on togglePlay and play/pause the video
 * Range controls should listen to the input event and change values accordingly
 * Skip controls should listen to the click event
 * Progress bar should also listen to click or mouse click event in the parent node
 * Video should listen to a timeupdate event to change the progress bar size
 */

/**
 * Changes the icon of the video player based on the video status (paused or not).
 */
function togglePlayIcon() {
  if (video.paused) {
    togglePlay.innerHTML = '►';
  } else {
    togglePlay.innerHTML = '❚ ❚';
  }
}

/**
 * Plays or pauses the video.
 */
function toggleProgress() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

/**
 * Skips a few seconds onwards or backwards.
 * Also pauses the video.
 */
function skipSeconds() {
  video.currentTime += parseFloat(this.dataset.skip);
  if (!video.paused) video.pause();
}

/**
 * Display the progression bar according to the video's current time.
 */
function updateProgressBar() {
  if (window.getComputedStyle(progressBar).getPropertyValue('display') === 'none') progressBar.style.display = 'inline-block';
  const videoProgression = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${videoProgression}%`;
}

/**
 * Changes the current time based on where the user clicked within the progress bar.
 * Also pauses the video.
 * @param {MouseEvent} event
 */
function dragProgressBar(event) {
  console.log(event.type);
  if (!video.paused) video.pause();
  const draggedTime = (event.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = draggedTime;
}

/**
 * Changes the value of the inputs with type range in the video player.
 */
function updateRangeValue() {
  video[this.name] = this.value;
}

/* Video events */
video.onplay = togglePlayIcon;
video.onpause = togglePlayIcon;
video.onclick = toggleProgress;
video.ontimeupdate = updateProgressBar;

/* Progress bar events */
progress.onmousemove = (event) => isDragging && dragProgressBar(event);
progress.onclick = dragProgressBar;
progress.onmousedown = () => isDragging = true;
progress.onmouseup = () => isDragging = false;
progress.onmouseleave = () => isDragging = false;

/* Play/Pause events */
togglePlay.onclick = toggleProgress;

/* Skip time events */
skipControls.forEach(control => control.onclick = skipSeconds);

/* Range inputs events */
rangeControls.forEach(control => control.oninput = updateRangeValue);
