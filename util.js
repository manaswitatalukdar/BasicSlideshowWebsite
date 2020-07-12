let flag = 0;
let flag2 = 0;
let flag3 = 0;

function loadError() {
  location.href = "login.html";
}

function dropdown() {
  document.getElementById("myMenu").style.height = "250px";
  document.getElementById("myMain").style.marginBottom = "250px";
}

function revert() {
  document.getElementById("myMenu").style.height = "0px";
  document.getElementById("myMain").style.marginBottom = "0px";
}

function showstory() {
  document.getElementById("crsl").style.height = "0px";
  document.getElementById("nav").innerHTML = "&#8593;";
}

function hidestory() {
  document.getElementById("crsl").style.height = "650px";
  document.getElementById("nav").innerHTML = "&#8595;";
}

function moveStory() {
  if (flag3 === 0) {
    showstory();
    flag3 = 1;
  } else {
    hidestory();
    flag3 = 0;
  }
}

function toggle(x) {
  x.classList.toggle("change");
  if (flag === 0) {
    flag = 1;
    dropdown();
  } else {
    flag = 0;
    revert();
  }
}

function blackout() {
  if (flag2 == 0) {
    document.getElementById("nextBt").style.display = "none";
    document.getElementById("prevBt").style.display = "none";
    document.getElementById("bar5").style.display = "none";
    document.getElementById("bar7").style.display = "none";
    flag2 = 1;
  } else {
    document.getElementById("nextBt").style.display = "block";
    document.getElementById("prevBt").style.display = "block";
    document.getElementById("bar5").style.display = "block";
    document.getElementById("bar7").style.display = "block";
    flag2 = 0;
  }
}

const slides = document.querySelector(".carousel-slides");
const images = Array.from(slides.children);
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const nav = document.querySelector(".carousel-indicator");
const dots = Array.from(nav.children);
const imageWidth = images[0].getBoundingClientRect().width;
const len = images.length;

const setImagePosition = (slide, index) => {
  slide.style.left = imageWidth * index + "px";
};

images.forEach(setImagePosition);
let counter = 0;

if (counter === 0) {
  document.getElementById("txt1-1").style.animation = "txt1-1 5s";
  document.getElementById("txt1-2").style.animation = "txt1-2 5s";
  document.getElementById("nav").style.animation = "txt1-2 5s";
} else {
  document.getElementById("txt1-1").style.animation = "";
  document.getElementById("txt1-2").style.animation = "";
  document.getElementById("nav").style.animation = "";
}

nextBtn.addEventListener("click", () => {
  console.log(counter);
  const current = slides.querySelector(".current");
  const currentInd = nav.querySelector(".current");
  let next = current.nextElementSibling;
  let nextInd = currentInd.nextElementSibling;
  if (counter === 1 || counter === len - 1) {
    document.getElementById("txt1-1").style.animation = "txt1-1 6s";
    document.getElementById("txt1-2").style.animation = "txt1-2 6s";
    console.log("welcome");
  } else {
    document.getElementById("txt1-1").style.animation = "";
    document.getElementById("txt1-2").style.animation = "";
  }
  if (counter === 2 || counter === 0) {
    document.getElementById("txt2-2").style.animation =
      "typing 3.5s steps(100, end)";
    console.log("gallery");
  } else {
    document.getElementById("txt2-2").style.animation = "";
  }

  if (counter >= len - 1) {
    next = images[0];
    nextInd = dots[0];
    counter = -1;
  }

  const move = next.style.left;
  slides.style.transform = "translateX(-" + move + ")";

  current.classList.remove("current");
  next.classList.add("current");
  currentInd.classList.remove("current");
  nextInd.classList.add("current");
  counter++;
});

prevBtn.addEventListener("click", () => {
  console.log(counter);
  const current = slides.querySelector(".current");
  const currentInd = nav.querySelector(".current");
  let prev = current.previousElementSibling;
  let prevInd = currentInd.previousElementSibling;
  if (counter === 1 || counter === 0) {
    document.getElementById("txt1-1").style.animation = "txt1-1 6s";
    document.getElementById("txt1-2").style.animation = "txt1-2 6s";
    console.log("welcome");
  } else {
    document.getElementById("txt1-1").style.animation = "";
    document.getElementById("txt1-2").style.animation = "";
  }

  if (counter === 2 || counter === len - 2) {
    document.getElementById("txt2-2").style.animation =
      "typing 3.5s steps(100, end)";
    console.log("gallery");
  } else {
    document.getElementById("txt2-2").style.animation = "";
  }

  if (counter <= 0) {
    prev = images[len - 1];
    prevInd = dots[len - 1];
    counter = len;
  }

  const move = prev.style.left;
  slides.style.transform = "translateX(-" + move + ")";

  current.classList.remove("current");
  prev.classList.add("current");
  currentInd.classList.remove("current");
  prevInd.classList.add("current");
  counter--;
});
