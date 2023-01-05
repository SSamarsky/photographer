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

// Change Images
const buttons = document.querySelectorAll(".buttons__item");
const images = document.querySelectorAll(".portfolio__photo");

function changeImages(event) {
  images.forEach((img, index) => {
    img.src = `./assets/images/${event.target.dataset.season}/${index + 1}.jpg`;
  });
  document.querySelector(".buttons .active").classList.remove("active");
  event.target.classList.add("active");
}

buttons.forEach((el) => el.addEventListener("click", changeImages));

// Change Themes
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

function changeTheme() {
  switchTheme.classList.toggle("light-theme");
  arrClassesSwitchTheme.forEach((el) => el.classList.toggle("light-theme"));
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
    "price-title-3    ": "Золото",
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

function getTranslate(lang) {
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
