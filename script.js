"use strict";

let y;
let x;
let smileyTimer;

window.onmousemove = function (event) {
  x = event.clientX;
  y = event.clientY;
};

let smileyTime = false;

window.addEventListener("DOMContentLoaded", init);

function init() {
  const someBtns = document.querySelectorAll("#some_container div");

  someBtns.forEach((btn) => {
    btn.addEventListener("mouseover", startSmileys);
    btn.addEventListener("mouseleave", stopSmileys);
  });
}

function startSmileys() {
  if (smileyTime === false) {
    smileyTime = true;
    console.log("start");
    throwSmiley();
  }
}

function stopSmileys() {
  smileyTime = false;
  clearTimeout(smileyTimer);
  console.log("stop");
}

function throwSmiley() {
  if (smileyTime === true) {
    const smileyCont = document.createElement("div");
    const randomClass = getRandomClass();

    smileyCont.classList.add(`smiley_container`);
    smileyCont.classList.add(`${randomClass}`);

    const smiley = document.createElement("div");
    smiley.classList.add("smiley");

    smileyCont.appendChild(smiley);

    smileyCont.style.top = y + -20 + "px";
    smileyCont.style.left = x + -20 + "px";

    smileyCont.addEventListener("animationend", removeSmiley);

    document.querySelector("#smiley_layer").appendChild(smileyCont);

    smileyTimer = setTimeout(throwSmiley, 200);
  }
}

function getRandomClass() {
  const rndNumber = Math.floor(Math.random() * 4) + 1;
  const result = `s_ani${rndNumber}`;

  return result;
}

function removeSmiley() {
  const smileyCont = this;
  smileyCont.remove();
}
