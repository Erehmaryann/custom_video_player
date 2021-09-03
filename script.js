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

// Volume Controls --------------------------- //

// Change Playback Speed -------------------- //

// Fullscreen ------------------------------- //

// Event Listeners
playBtn.addEventListener("click", togglePlay);
videoEl.addEventListener("click", togglePlay);
videoEl.addEventListener("timeupdate", updateProgress);
videoEl.addEventListener("canplay", updateProgress);
