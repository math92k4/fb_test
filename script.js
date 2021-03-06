"use strict";

let y;
let x;

window.onmousemove = function (event) {
  x = event.clientX;
  y = event.clientY;
};

let smileyTime = false;

window.addEventListener("DOMContentLoaded", init);

function init() {
  document.querySelector(".main_logo").addEventListener("mouseover", startSmileys);
  document.querySelector(".main_logo").addEventListener("mouseleave", stopSmileys);
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

    setTimeout(throwSmiley, 200);
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
