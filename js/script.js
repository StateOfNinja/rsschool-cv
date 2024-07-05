import { winter } from "./winter.js";
import { spring } from "./spring.js";
import { summer } from "./summer.js";
import { autumn } from "./autumn.js";

const circles = document.getElementsByClassName("circle");
const slides = document.getElementsByClassName("slider__item");
const favoritesItems = document.querySelector(".favorites__items");
const seasons = document.querySelector(".gallery__seasons");
const seasonsActive = document.querySelectorAll(".gallery__season");

//меню_бургер-ебучее

document.addEventListener("DOMContentLoaded", function () {
  const burgerIcon = document.querySelector(".header__burger");
  const menuBody = document.querySelector(".header__menu");
  burgerIcon.addEventListener("click", function () {
    burgerIcon.classList.toggle("header__burger--active");
    menuBody.classList.toggle("header__menu--active");
  });
});

//слайдер-ебучий
/*
const slidesContainer = document.querySelector(".slider__items");
const controlsContainer = document.querySelector(".slider__controls");
const controlsArr = document.querySelectorAll(".circle");
const imgArr = [
  { imgSrc: "./img/slider0.jpg" },
  { imgSrc: "./img/slider1.jpg" },
  { imgSrc: "./img/slider2.jpg" },
  { imgSrc: "./img/slider3.jpg" },
  { imgSrc: "./img/slider4.jpg" },
];

let count = 0;
function clickChangeSlide(control) {
  const { target } = control;
  if (target.classList.contains("circle")) {
    const id = target.dataset.id;
    renderSlides(slidesContainer, imgArr, id);
  }
}
function renderSlides(container, slides, countControl = 0) {
  const viewArr = slides.slice(+countControl, +countControl + 3);
  container.innerHTML = "";

  controlsArr.forEach((control) => {
    control.classList.remove("circle--active");
    if (control.dataset.id == countControl) {
      control.classList.add("circle--active");
    }
  });

  viewArr.forEach((element) => {
    const a = document.createElement("img");
    const img = `<img class='slider__item' src="${element.imgSrc}" alt=""/>`;
    container.innerHTML += img;
  });
}
controlsContainer.addEventListener("click", clickChangeSlide);
*/

let slideIndex = 1;
showslides(slideIndex);
function plusSlides(n) {
  showslides((slideIndex += n));
}

function currentSlide(n) {
  showslides((slideIndex = n));
}
function showslides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" circle--active", "");
  }
  if (window.innerWidth <= 1024) {
    if (slides[slideIndex - 1]) {
      slides[slideIndex - 1].style.display = "block";
    }
  } else {
    for (i = slideIndex - 1; i < slideIndex + 2; i++) {
      if (slides[i]) {
        slides[i].style.display = "block";
      }
    }
  }

  circles[slideIndex - 1].className += " circle--active";
}

//Смена ебучего-сезона
/*
function switchCard(data, container) {
  container.innerHTML = "";
  data.forEach(({ subtitle, sublable, text, img }) => {
    const template = `<div class="favorites__item">
            <div class="item__title">
              Staff Picks <span></span>
            </div>
              <div class="item__subtitle">
                <p>${subtitle}</p>
                <p>${sublable}</p>
              </div>
                <div class="item__text">
                ${text}
                </div>
                  <button class="item__btn">Buy</button>
                    <div class="item__book">
                      <img src=${img} alt="" />
                    </div>
            </div>`;
    container.innerHTML += template;
  });
}
function activeSeason(clickedElement) {
  seasonsActive.forEach((element) => {
    element.classList.remove("gallery__season--active");
  });
  if (clickedElement) {
    clickedElement.classList.add("gallery__season--active");
  }
}
seasons.addEventListener("click", function (event) {
  const seasonElement = event.target.closest(".gallery__season");
  if (seasonElement) {
    activeSeason(seasonElement);
    switch (event.target.id) {
      case "winter":
        switchCard(winter, favoritesItems);
        break;
      case "spring":
        switchCard(spring, favoritesItems);
        break;
      case "summer":
        switchCard(summer, favoritesItems);
        break;
      case "autumn":
        switchCard(autumn, favoritesItems);
        break;
    }
  }
});
*/
// Ебучии-функции, вызываемые при загрузке ебучей-страницы
document.addEventListener("DOMContentLoaded", () => {
  switchCard(winter, favoritesItems);
});
