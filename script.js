// Burger-menu
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav__link");
const body = document.querySelector(".body");
const overlay = document.querySelector(".overlay");

function toggleMenu() {
  body.classList.toggle("open");
  overlay.classList.toggle("open");
  burger.classList.toggle("open");
  burger.classList.toggle("light-theme");
  nav.classList.toggle("open");
}

burger.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);
navLinks.forEach((el) => el.addEventListener("click", toggleMenu));

// Image caching
const seasons = ["winter", "spring", "summer", "autumn"];

function preloadImages() {
  seasons.forEach((season, index) => {
    for (let i = 1; i <= 6; i++) {
      const img = new Image();
      img.src = `./assets/images/${seasons[index]}/${i}.jpg`;
    }
  });
}

preloadImages();

// Change Images
const buttons = document.querySelectorAll(".buttons__item");
const images = document.querySelectorAll(".portfolio__photo");

let seasonImgStorage = sessionStorage.getItem("btnImg");
if (seasonImgStorage) {
  document.querySelector(".buttons .active").classList.remove("active");
  buttons.forEach((el) => {
    if (el.dataset.season === seasonImgStorage) {
      el.classList.add("active");
    }
  });
  images.forEach((el, index) => {
    el.src = `./assets/images/${seasonImgStorage}/${index + 1}.jpg`;
  });
}

function changeImages(event) {
  images.forEach((img, index) => {
    img.src = `./assets/images/${event.target.dataset.season}/${index + 1}.jpg`;
  });
  document.querySelector(".buttons .active").classList.remove("active");
  event.target.classList.add("active");
  sessionStorage.setItem("btnImg", event.target.dataset.season);
}

buttons.forEach((el) => el.addEventListener("click", changeImages));

// Switch Themes
const switchTheme = document.querySelector(".theme");
const arrClassesSwitchTheme = document.querySelectorAll([
  ".body",
  ".header__logo",
  ".nav",
  ".nav__link",
  ".switch__link",
  ".intro",
  ".btn",
  ".btn--border",
  ".section__title",
  ".title__text",
  ".buttons__item",
  ".contact",
  ".contact__title",
  ".input",
  ".social__icon",
  ".burger__line",
]);

let theme = sessionStorage.getItem("theme");
if (theme) {
  switchTheme.classList.toggle(theme);
  arrClassesSwitchTheme.forEach((el) => el.classList.toggle(theme));
}

function changeTheme() {
  switchTheme.classList.toggle("light-theme");
  arrClassesSwitchTheme.forEach((el) => el.classList.toggle("light-theme"));
  if (sessionStorage.getItem("theme") === "light-theme") {
    sessionStorage.removeItem("theme");
  } else {
    sessionStorage.setItem("theme", "light-theme");
  }
}

switchTheme.addEventListener("click", changeTheme);

//   Switch Language
const languages = {
  en: {
    skills: "Skills",
    portfolio: "Portfolio",
    video: "Video",
    price: "Price",
    contacts: "Contacts",
    hero__title: "Alexa Rise",
    hero__text:
      "Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise",
    hire: "Hire me",
    "skill__title-1": "Digital photography",
    "skill__text-1": "High-quality photos in the studio and on the nature",
    "skill__title-2": "Video shooting",
    "skill__text-2": "Capture your moments so that they always stay with you",
    "skill__title-3": "Rotouch",
    "skill__text-3": "I strive to make photography surpass reality",
    "skill__title-4": "Audio",
    "skill__text-4":
      "Professional sounds recording for video, advertising, portfolio",
    winter: "Winter",
    spring: "Spring",
    summer: "Summer",
    autumn: "Autumn",
    "price-title-1": "Standard",
    "price-title-2": "Premium",
    "price-title-3": "Gold",
    "price-description-1-span-1": "One location",
    "price-description-1-span-2": "120 photos in color",
    "price-description-1-span-3": "12 photos in retouch",
    "price-description-1-span-4": "Readiness 2-3 weeks",
    "price-description-1-span-5": "Make up, visage",
    "price-description-2-span-1": "One or two locations",
    "price-description-2-span-2": "200 photos in color",
    "price-description-2-span-3": "20 photos in retouch",
    "price-description-2-span-4": "Readiness 1-2 weeks",
    "price-description-2-span-5": "Make up, visage",
    "price-description-3-span-1": "Three locations or more",
    "price-description-3-span-2": "300 photos in color",
    "price-description-3-span-3": "50 photos in retouch",
    "price-description-3-span-4": "Readiness 1 week",
    "price-description-3-span-5": "Make up, visage, hairstyle",
    order: "Order shooting",
    "contact-me": "Contact me",
    "send-message": "Send message",
    email: "E-mail",
    phone: "Phone",
    "contact-message": "Message",
  },
  ru: {
    skills: "Навыки",
    portfolio: "Портфолио",
    video: "Видео",
    price: "Цены",
    contacts: "Контакты",
    hero__title: "Алекса Райс",
    hero__text:
      "Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом",
    hire: "Пригласить",
    "skill__title-1": "Фотография",
    "skill__text-1": "Высококачественные фото в студии и на природе",
    "skill__title-2": "Видеосъемка",
    "skill__text-2":
      "Запечатлите лучшие моменты, чтобы они всегда оставались с вами",
    "skill__title-3": "Ретушь",
    "skill__text-3":
      "Я стремлюсь к тому, чтобы фотография превосходила реальность",
    "skill__title-4": "Звук",
    "skill__text-4":
      "Профессиональная запись звука для видео, рекламы, портфолио",
    winter: "Зима",
    spring: "Весна",
    summer: "Лето",
    autumn: "Осень",
    "price-title-1": "Стандарт",
    "price-title-2": "Премиум",
    "price-title-3": "Золото",
    "price-description-1-span-1": "Одна локация",
    "price-description-1-span-2": "120 цветных фото",
    "price-description-1-span-3": "12 отретушированных фото",
    "price-description-1-span-4": "Готовность через 2-3 недели",
    "price-description-1-span-5": "Макияж, визаж",
    "price-description-2-span-1": "Одна-две локации",
    "price-description-2-span-2": "200 цветных фото",
    "price-description-2-span-3": "20 отретушированных фото",
    "price-description-2-span-4": "Готовность через 1-2 недели",
    "price-description-2-span-5": "Макияж, визаж",
    "price-description-3-span-1": "Три локации и больше",
    "price-description-3-span-2": "300 цветных фото",
    "price-description-3-span-3": "50 отретушированных фото",
    "price-description-3-span-4": "Готовность через 1 неделю",
    "price-description-3-span-5": "Макияж, визаж, прическа",
    order: "Заказать съемку",
    "contact-me": "Свяжитесь со мной",
    "send-message": "Отправить",
    email: "Электронная почта",
    phone: "Телефон",
    "contact-message": "Сообщение",
  },
};

const langBtns = document.querySelectorAll(".switch__link");
const langEn = document.querySelector(".en");
const langRu = document.querySelector(".ru");
const dataAttributes = document.querySelectorAll("[data-lang]");

let langSession = sessionStorage.getItem("lang");
if (langSession) {
  dataAttributes.forEach((el) => {
    if (el.placeholder) {
      el.placeholder = languages[langSession][el.dataset.lang];
    }
    el.textContent = languages[langSession][el.dataset.lang];
  });

  langBtns.forEach((el) => {
    el.classList.remove("active");
    if (el.classList.contains(langSession)) {
      el.classList.add("active");
    }
  });
}

function getTranslate(lang) {
  sessionStorage.setItem("lang", lang);
  dataAttributes.forEach((el) => {
    if (el.placeholder) {
      el.placeholder = languages[lang][el.dataset.lang];
    }
    el.textContent = languages[lang][el.dataset.lang];
  });
}

function toggleActiveBtn(event) {
  langBtns.forEach((el) => {
    el.classList.remove("active");
  });
  event.target.classList.toggle("active");
}

langEn.addEventListener("click", () => getTranslate("en"));
langRu.addEventListener("click", () => getTranslate("ru"));
langBtns.forEach((el) => el.addEventListener("click", toggleActiveBtn));

// Choose price
const priceBtns = document.querySelectorAll(".btn--border");
let priceBtnStorage = sessionStorage.getItem("priceBtn");

if (priceBtnStorage) {
  priceBtns.forEach((el) => {
    if (
      el.parentNode.querySelector(".price__title").textContent ===
      priceBtnStorage
    ) {
      el.classList.add("active");
    }
  });
}

function choosePrice(event) {
  priceBtns.forEach((el) => el.classList.remove("active"));
  event.target.classList.add("active");
  sessionStorage.setItem(
    "priceBtn",
    event.target.parentNode.querySelector(".price__title").textContent
  );
}

priceBtns.forEach((el) => el.addEventListener("click", choosePrice));

// Auto change now year
const nowYear = new Date().getFullYear();
document.querySelector("#year").textContent = nowYear;

// Video-Player
const video = document.querySelector("#video-player");
const playPauseBtn = document.querySelector("#play-pause");
const mainPlayPauseBtn = document.querySelector(".video__btn");
const stopBtn = document.querySelector("#stop");
const speedUpBtn = document.querySelector("#speed-up");
const speedDownBtn = document.querySelector("#speed-down");
const volume = document.querySelector("#volume");
const volumeBtn = document.querySelector("#volume-btn");
const speedVideo = document.querySelector("#speed-video");
const progressBar = document.querySelector("#progress");
const nextBtn = document.querySelector("#next");
const backBtn = document.querySelector("#back");
const panel = document.querySelector("#panel");

if (sessionStorage.getItem("volume")) {
  video.volume = sessionStorage.getItem("volume");
  volume.value = sessionStorage.getItem("volume") * 100;
}
const totalCountVidio = 3;
let nowVideo = 1;

function backVideo() {
  stopVideo();
  nowVideo--;
  if (nowVideo <= 0) {
    nowVideo = totalCountVidio;
  }
  video.src = `./assets/videos/${nowVideo}.mp4`;
  video.play();
  playPauseBtn.classList.add("active");
  mainPlayPauseBtn.classList.add("active");
  progressCurrent.classList.remove("active");
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
  mainPlayPauseBtn.classList.add("active");
  progressCurrent.classList.remove("active");
}

function playVideo() {
  video.play();
  panel.classList.add("active");
}
function pauseVideo() {
  video.pause();
}
function stopVideo() {
  video.pause();
  video.currentTime = 0;
  video.playbackRate = 1;
  speedVideo.textContent = "x" + video.playbackRate;
  playPauseBtn.classList.remove("active");
  mainPlayPauseBtn.classList.remove("active");
  progressCurrent.classList.remove("active");
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

function volumeVideo() {
  let v = this.value;
  video.volume = v / 100;
  sessionStorage.setItem("volume", video.volume);
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
  mainPlayPauseBtn.classList.add("active");
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
  speedVideo.textContent = "x" + video.playbackRate;
}

function speedDownVideo() {
  playPauseBtn.classList.add("active");
  mainPlayPauseBtn.classList.add("active");
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
  speedVideo.textContent = "x" + video.playbackRate;
}

function onClickPlayPause() {
  playPauseBtn.classList.toggle("active");
  mainPlayPauseBtn.classList.toggle("active");
  if (playPauseBtn.classList.contains("active")) {
    playVideo();
  } else {
    video.pause();
  }
  video.playbackRate = 1;
  speedVideo.textContent = "x" + video.playbackRate;
}

const progressCurrent = document.querySelector("#progress-current");

function progressUpdate() {
  const d = video.duration;
  let c = video.currentTime;
  progressBar.value = (100 * c) / d;
  progressCurrent.textContent = Math.round(progress.value) + "%";
  if (progressBar.value >= 51) {
    progressCurrent.classList.add("active");
  }
}

function rewindVideo() {
  playPauseBtn.classList.add("active");
  mainPlayPauseBtn.classList.add("active");
  let w = this.offsetWidth;
  let p = event.offsetX;
  this.value = (100 * p) / w;
  video.pause();
  video.currentTime = (video.duration * p) / w;
  video.play();
}

playPauseBtn.addEventListener("click", onClickPlayPause);
mainPlayPauseBtn.addEventListener("click", onClickPlayPause);
stopBtn.addEventListener("click", stopVideo);
speedUpBtn.addEventListener("click", speedUpVideo);
speedDownBtn.addEventListener("click", speedDownVideo);
volume.addEventListener("input", volumeVideo);
volumeBtn.addEventListener("click", onClickVolumeBtn);
video.addEventListener("timeupdate", progressUpdate);
progressBar.addEventListener("click", rewindVideo);
nextBtn.addEventListener("click", nextVideo);
backBtn.addEventListener("click", backVideo);

function visiblePanel() {
  panel.classList.add("active");
}
function hiddenPanel() {
  panel.classList.remove("active");
}

const videoBlock = document.querySelector(".video");
videoBlock.addEventListener("mouseover", visiblePanel);
videoBlock.addEventListener("mouseout", hiddenPanel);
video.addEventListener("click", onClickPlayPause);

const playlisBtn = document.querySelector("#playlistBtn");
const playlist = document.querySelector("#playlist");

function activePlaylist() {
  playlist.classList.toggle("active");
}

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
