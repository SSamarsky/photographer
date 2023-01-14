// Video-Player
const video = document.querySelector("#video-player");
const platBtn = document.querySelector("#main-play-pause");
const playPauseBtn = document.querySelector("#play-pause");
const stopBtn = document.querySelector("#stop");
const speedUpBtn = document.querySelector("#speed-up");
const speedDownBtn = document.querySelector("#speed-down");
const volume = document.querySelector("#volume");
const volumeBtn = document.querySelector("#volume-btn");
const infoSpeed = document.querySelector("#info-speed");
const progressBar = document.querySelector("#progress");
const nextBtn = document.querySelector("#next");
const backBtn = document.querySelector("#back");
const panel = document.querySelector("#panel");
const infoProgress = document.querySelector("#info-progress");
const videoBlock = document.querySelector(".video");
const playlisBtn = document.querySelector("#playlistBtn");
const playlist = document.querySelector("#playlist");

const totalCountVidio = 3;
let nowVideo = 1;

if (sessionStorage.getItem("volume")) {
  video.volume = sessionStorage.getItem("volume");
  volume.value = sessionStorage.getItem("volume") * 100;
}

function onClickPlayPause() {
  playPauseBtn.classList.toggle("active");
  platBtn.classList.toggle("active");
  if (playPauseBtn.classList.contains("active")) {
    video.play();
  } else {
    video.pause();
  }
  video.playbackRate = 1;
  infoSpeed.textContent = "x" + video.playbackRate;
}

function stopVideo() {
  video.pause();
  video.playbackRate = 1;
  infoSpeed.textContent = "x" + video.playbackRate;
  playPauseBtn.classList.remove("active");
  platBtn.classList.remove("active");
  infoProgress.classList.remove("active");
  video.currentTime = 0;
}

function backVideo() {
  stopVideo();
  nowVideo--;
  if (nowVideo <= 0) {
    nowVideo = totalCountVidio;
  }
  video.src = `./assets/videos/${nowVideo}.mp4`;
  video.play();
  playPauseBtn.classList.add("active");
  platBtn.classList.add("active");
  infoProgress.classList.remove("active");
}

function nextVideo() {
  stopVideo();
  nowVideo++;
  if (nowVideo > totalCountVidio) {
    nowVideo = 1;
  }
  video.src = `./assets/videos/${nowVideo}.mp4`;
  video.play();
  playPauseBtn.classList.add("active");
  platBtn.classList.add("active");
  infoProgress.classList.remove("active");
}

function volumeVideo() {
  let v = this.value;
  video.volume = v / 100;
  sessionStorage.setItem("volume", video.volume);
}

function offVolumeVideo() {
  sessionStorage.setItem("value", video.volume);
  video.volume = 0;
  volume.value = 0;
  volumeBtn.classList.add("active");
}

function onVolumeVideo() {
  video.volume = sessionStorage.getItem("volume");
  volume.value = sessionStorage.getItem("volume") * 100;
  volumeBtn.classList.remove("active");
}

function onClickVolumeBtn() {
  if (volumeBtn.classList.contains("active")) {
    onVolumeVideo();
  } else {
    offVolumeVideo();
  }
}

function speedUpVideo() {
  playPauseBtn.classList.add("active");
  platBtn.classList.add("active");
  video.play();
  if (video.playbackRate <= 1) {
    video.playbackRate = 1.25;
  } else if (video.playbackRate == 1.25) {
    video.playbackRate = 1.5;
  } else if (video.playbackRate == 1.5) {
    video.playbackRate = 1.8;
  } else if (video.playbackRate == 1.8) {
    video.playbackRate = 2;
  } else {
    video.playbackRate = 1;
  }
  infoSpeed.textContent = "x" + video.playbackRate;
}

function speedDownVideo() {
  playPauseBtn.classList.add("active");
  platBtn.classList.add("active");
  video.play();
  if (video.playbackRate >= 1) {
    video.playbackRate = 0.75;
  } else if (video.playbackRate == 0.75) {
    video.playbackRate = 0.5;
  } else if (video.playbackRate == 0.5) {
    video.playbackRate = 0.25;
  } else {
    video.playbackRate = 1;
  }
  infoSpeed.textContent = "x" + video.playbackRate;
}

function progressUpdate() {
  const d = video.duration;
  let c = video.currentTime;
  progressBar.value = (100 * c) / d;
  infoProgress.textContent = Math.round(progress.value) + "%";
  if (progressBar.value >= 51) {
    infoProgress.classList.add("active");
  }
  if (Math.round(progress.value) == 100) {
    playPauseBtn.classList.remove("active");
    platBtn.classList.remove("active");
  }
}

function rewindVideo() {
  playPauseBtn.classList.add("active");
  platBtn.classList.add("active");
  let w = this.offsetWidth;
  let p = event.offsetX;
  this.value = (100 * p) / w;
  video.pause();
  video.currentTime = (video.duration * p) / w;
  video.play();
}

function visiblePanel() {
  panel.classList.add("active");
}

function hiddenPanel() {
  panel.classList.remove("active");
}

function activePlaylist() {
  playlist.classList.toggle("active");
}

playPauseBtn.addEventListener("click", onClickPlayPause);
platBtn.addEventListener("click", onClickPlayPause);
stopBtn.addEventListener("click", stopVideo);
speedUpBtn.addEventListener("click", speedUpVideo);
speedDownBtn.addEventListener("click", speedDownVideo);
volume.addEventListener("input", volumeVideo);
volumeBtn.addEventListener("click", onClickVolumeBtn);
video.addEventListener("timeupdate", progressUpdate);
progressBar.addEventListener("click", rewindVideo);
nextBtn.addEventListener("click", nextVideo);
backBtn.addEventListener("click", backVideo);
videoBlock.addEventListener("mouseover", visiblePanel);
videoBlock.addEventListener("mouseout", hiddenPanel);
video.addEventListener("click", onClickPlayPause);
playlisBtn.addEventListener("click", activePlaylist);

const video1 = document.querySelector("#video-1");
const video2 = document.querySelector("#video-2");
const video3 = document.querySelector("#video-3");
const videoFiles = document.querySelectorAll(".playlist__item");

function chooseVideo(event) {
  stopVideo();
  videoFiles.forEach((el) => el.classList.remove("active"));
  event.target.classList.add("active");
  const file = event.target.dataset.video;
  video.src = `./assets/videos/${file}.mp4`;
  onClickPlayPause();
}

videoFiles.forEach((el) => el.addEventListener("click", chooseVideo));