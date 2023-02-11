const ONE = document.querySelector("#one");
const TWO = document.querySelector("#two");
const THREE = document.querySelector("#three");
const CAROUSEL = document.querySelector("#carousel");
const BURGER = document.querySelector("#burger");
const CLOSE = document.querySelector("#close");
const NAV = document.querySelector("nav");
const Body = document.querySelector("body");

const moveOne = () => {
  if (window.screen.width > 390) {
    CAROUSEL.style.left = "-2260px";
  } else {
    CAROUSEL.style.left = "-1165px";
  }
  ONE.style.background = "#F2785C";
  TWO.style.background = "rgba(242, 120, 92, 0.5)";
  THREE.style.background = "rgba(242, 120, 92, 0.5)";
};

const moveTwo = () => {
  if (window.screen.width > 390) {
    CAROUSEL.style.left = "-3120px";
  } else {
    CAROUSEL.style.left = "-1545px";
  }
  ONE.style.background = "rgba(242, 120, 92, 0.5)";
  TWO.style.background = "#F2785C";
  THREE.style.background = "rgba(242, 120, 92, 0.5)";
};

const moveThree = () => {
  if (window.screen.width > 390) {
    CAROUSEL.style.left = "-3980px";
  } else {
    CAROUSEL.style.left = "-1922px";
  }
  ONE.style.background = "rgba(242, 120, 92, 0.5)";
  TWO.style.background = "rgba(242, 120, 92, 0.5)";
  THREE.style.background = "#F2785C";
};

ONE.addEventListener("click", moveOne);
TWO.addEventListener("click", moveTwo);
THREE.addEventListener("click", moveThree);

CAROUSEL.addEventListener("animationend", (animationEvent) => {
  if (Animation.animationName === "slide-left") {
    console.log(animationName);
    CAROUSEL.classList.remove("slide-left");
  } else if (Animation.animationName === "slide-right") {
    CAROUSEL.classList.remove("slide-right");
  }
  // ONE.onclick = moveLeft;
  // THREE.onclick = moveRight;
});

// Events

const moveNav = () => {
  NAV.style.transform = "translateX(0px)";
  Body.classList.add("active");
};

const HandClick = (event) => {};

const closeNav = () => {
  NAV.style.transform = "translateX(165px)";
  Body.classList.remove("active");
};

BURGER.onclick = moveNav;

CLOSE.onclick = closeNav;
