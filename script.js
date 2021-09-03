// Select all the needed HTML elements
// and store them in variables
const videoEl = document.querySelector(".video");
const progressRange = document.querySelector(".progress-range");
const progressBar = document.querySelector(".progress-bar");
const playBtn = document.querySelector("#play-btn");
const volumeIcon = document.querySelector("#volume-icon");
const volumeRange = document.querySelector(".volume-range");
const volumeBar = document.querySelector(".volume-bar");
const currentTime = document.querySelector(".time-elapsed");
const duration = document.querySelector(".time-duration");
const fullScreenBtn = document.querySelector("#fullscreen");

// Play & Pause ----------------------------------- //

// Show play icon
const showPlayIcon = () => {
  playBtn.classList.replace("fa-pause", "fa-play");
  playBtn.setAttribute("title", "Play");
};

const togglePlay = () => {
  // When the user clicks the play button
  if (videoEl.paused) {
    videoEl.play();
    playBtn.classList.replace("fa-play", "fa-pause");
    playBtn.setAttribute("title", "Pause");
  } else {
    videoEl.pause();
    showPlayIcon();
  }
};

// On Video End, show play button icon
videoEl.addEventListener("ended", showPlayIcon);

// Progress Bar ---------------------------------- //

// Calculate display time format
const displayTime = (time) => {
  const minutes = Math.floor(time / 60);
  let seconds = Math.floor(time % 60);
  seconds = seconds > 9 ? seconds : `0${seconds}`;
  return `${minutes}:${seconds}`;
};

// Update Progress bar as video plays
const updateProgress = () => {
  progressBar.style.width = `${
    (videoEl.currentTime / videoEl.duration) * 100
  }%`;
  currentTime.textContent = `${displayTime(videoEl.currentTime)} /`;
  duration.textContent = `${displayTime(
    videoEl.duration - videoEl.currentTime
  )}`;
};

// Click to seek within the video
const setProgress = (e) => {
  // value of the clicked area and total width of the progress container
  const newTIme = e.offsetX / progressRange.offsetWidth;
  progressBar.style.width = `${newTIme * 100}%`;
  videoEl.currentTime = newTIme * videoEl.duration;
};

// Volume Controls --------------------------- //

// Volume Bar
const setVolume = (e) => {
  let newVolume = e.offsetX / volumeRange.offsetWidth;
  volumeBar.style.width = `${newVolume * 100}%`;
  videoEl.volume = newVolume;
};

// Change Playback Speed -------------------- //

// Fullscreen ------------------------------- //

// Event Listeners
playBtn.addEventListener("click", togglePlay);
videoEl.addEventListener("click", togglePlay);
videoEl.addEventListener("timeupdate", updateProgress);
videoEl.addEventListener("canplay", updateProgress);
progressRange.addEventListener("click", setProgress);
volumeRange.addEventListener("click", setVolume);
