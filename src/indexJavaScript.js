let skillsOffset;

let joinImgOffset;
let joinImgHeight;

let sharkieImgOffset;
let sharkieImgHeight;

let pokeImgOffset;
let pokeImgHeight;

let nameOffset;
let emailOffset;
let messageOffset;

function pathIsWebpage() {
  return window.location.href.endsWith('') || window.location.href.endsWith('#startScreen_link') ||
    window.location.href.endsWith('#aboutMe_link') || window.location.href.endsWith('#skillSet_link') ||
    window.location.href.endsWith('#myWork_link')
}

function init() {
  if (pathIsWebpage()) {
    skillsOffset = document.getElementById('skills').getBoundingClientRect().bottom;

    joinImgOffset = document.getElementById('joinImg').getBoundingClientRect().top;
    joinImgHeight = document.getElementById('joinImg').getBoundingClientRect().height;

    sharkieImgOffset = document.getElementById('sharkieImg').getBoundingClientRect().top;
    sharkieImgHeight = document.getElementById('sharkieImg').getBoundingClientRect().height;

    pokeImgOffset = document.getElementById('pokedexImg').getBoundingClientRect().top;
    pokeImgHeight = document.getElementById('pokedexImg').getBoundingClientRect().height;

    nameOffset = document.getElementById('clientName').getBoundingClientRect().top;
    emailOffset = document.getElementById('clientEmail').getBoundingClientRect().top;
    messageOffset = document.getElementById('clientMessage').getBoundingClientRect().top;
  }
}

function fadeJoin() {
  if (window.scrollY + window.innerHeight > (joinImgOffset + (joinImgHeight / 2))) {
    document.getElementById('joinImg').style = "opacity: 1 !important;scale: 1; transition: all 125ms ease-in-out;";
  }
  else {
    document.getElementById('joinImg').style = "opacity: 0 !important;scale: 0.9; transition: all 125ms ease-in-out;";
  }
}

function fadeSharkie() {
  if (window.scrollY + window.innerHeight > (sharkieImgOffset + (sharkieImgHeight / 2))) {
    document.getElementById('sharkieImg').style = "opacity: 1 !important;scale: 1; transition: all 125ms ease-in-out;";
  }
  else {
    document.getElementById('sharkieImg').style = "opacity: 0 !important;scale: 0.9; transition: all 125ms ease-in-out;";
  }
}

function fadePokedex() {
  if (window.scrollY + window.innerHeight > (pokeImgOffset + (pokeImgHeight / 2))) {
    document.getElementById('pokedexImg').style = "opacity: 1 !important; scale: 1;transition: all 125ms ease-in-out;";
  }
  else {
    document.getElementById('pokedexImg').style = "opacity: 0 !important;scale: 0.9; transition: all 125ms ease-in-out;";
  }
}

function fadeName() {
  if (window.scrollY + window.innerHeight > nameOffset + 170) {
    document.getElementById('clientName').style = "opacity: 1 !important; transition: all 125ms ease-in-out;";
  }
  else {
    document.getElementById('clientName').style = "opacity: 0 !important; transition: all 125ms ease-in-out;";
  }
}

function fadeEmail() {
  if (window.scrollY + window.innerHeight > emailOffset + 170) {
    document.getElementById('clientEmail').style = "opacity: 1 !important; transition: all 125ms ease-in-out;";
  }
  else {
    document.getElementById('clientEmail').style = "opacity: 0 !important; transition: all 125ms ease-in-out;";
  }
}

function fadeMessage() {
  if (window.scrollY + window.innerHeight > messageOffset + 140) {
    document.getElementById('clientMessage').style = "opacity: 1 !important; transition: all 125ms ease-in-out;";
  }
  else {
    document.getElementById('clientMessage').style = "opacity: 0 !important; transition: all 125ms ease-in-out;";
  }
}

function fadeItems() {
  fadeJoin();
  fadeSharkie();
  fadePokedex();
  fadeName();
  fadeEmail();
  fadeMessage();
}

function fadeSkillsIcons() {
  let milliseconds = 100;
  for (let i = 1; i < 12; i++) {
    if (i >= 2) {
      let addToMs = milliseconds / i;
      milliseconds = addToMs + milliseconds;
    }
    if (window.scrollY + window.innerHeight > (skillsOffset + 225)) {
      document.getElementById(`${i}`).style = `opacity: 1 !important; transition-delay: ${milliseconds}ms;`;
    } else {
      document.getElementById(`${i}`).style = 'opacity: 0;';
    }
  }
}

function scroll() {
  var navBar = document.getElementById('navigation');
  if (window.pageYOffset >= (navBar.offsetTop + 40)) {
    fixHeader();
  } else {
    defixHeader();
  }
  responsiveArrowAnimation();
}

function fixHeader() {
  document.getElementById('navigation_background').classList.add('navigation_background');
  document.getElementById('nav_links').classList.add('scroll-font-color');
  document.getElementById('english').style = "width: 21px; height: 21px;";
  document.getElementById('german').style = "width: 21px; height: 21px;";
  if (pathIsWebpage()) {
    fullLoadScrollInformation();
  }
}

function defixHeader() {
  document.getElementById('navigation_background').classList.remove('navigation_background');
  document.getElementById('nav_links').classList.remove('scroll-font-color');
  document.getElementById('english').style = "";
  document.getElementById('german').style = "";
  if (pathIsWebpage()) {
    resetScrollInformation();
  }
}

function fullLoadScrollInformation() {
  document.getElementById('scrollText').classList.remove('animate-scrollText');
  document.getElementById('scrollText').classList.add('display-scrollText');
  document.getElementById('scrollBar').classList.remove('animate-scrollBar');
  document.getElementById('scrollBar').classList.add('display-scrollBar');
}

function resetScrollInformation() {
  document.getElementById('scrollText').classList.add('animate-scrollText');
  document.getElementById('scrollText').classList.remove('display-scrollText');
  document.getElementById('scrollBar').classList.add('animate-scrollBar');
  document.getElementById('scrollBar').classList.remove('display-scrollBar');
}

function responsiveArrowAnimation() {
  if (pathIsWebpage()) {
    if (window.pageYOffset >= 160) {
      document.getElementById('arrow').classList.remove('arrowAnimation');
    } else {
      document.getElementById('arrow').classList.add('arrowAnimation');
    }
  }
}

window.onscroll = function () {
  scroll();
  if (pathIsWebpage()) {
    fadeItems();
    fadeSkillsIcons();
  }
};