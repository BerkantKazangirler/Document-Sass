const blacktheme = document.getElementById("blacktheme");;
const lighttheme = document.getElementById("lighttheme");;
const solidtheme = document.getElementById("solidtheme");;
const body = document.querySelector("html");
const themebutton = document.getElementById("theme-button");
const themecontainer = document.getElementById("theme-options");
const elements = document.querySelectorAll('a#adress-element, a#adress-element span');

const loadtheme = () => {
  if (body.attributes["data-theme"].value == "black") {

    document.getElementById('header-svg').style.color = "white";
    document.getElementById('header-svg2').style.color = "white";
    document.getElementById('theme-button').style.color = "white";
    document.getElementById('adress-element').style.color = "white";
    document.getElementById('adress-element').style.color = "white";
    document.getElementById('baslık').style.color = "white";
    document.getElementById('abaslık').style.color = "white";
    document.getElementById('installion').style.color = "white";
    body.style.color = "white";
    body.style.backgroundColor = "black";
    elements.forEach(element => {
      element.style.color = 'white';
    });
  }

  else if (body.attributes["data-theme"].value == "light") {
    document.getElementById('header-svg').style.color = "black";
    document.getElementById('header-svg2').style.color = "black";
    document.getElementById('theme-button').style.color = "black";
    document.getElementById('baslık').style.color = "black";
    document.getElementById('abaslık').style.color = "black";
    document.getElementById('installion').style.color = "black";
    body.style.color = "black";
    body.style.backgroundColor = "white";
    elements.forEach(element => {
      element.style.color = 'black';
    });
  }

  else if (body.attributes["data-theme"].value == "solid") {
    document.getElementById('header-svg').style.color = "white";
    document.getElementById('header-svg2').style.color = "white";
    document.getElementById('theme-button').style.color = "white";
    document.getElementById('adress-element').style.color = "white";
    document.getElementById('baslık').style.color = "white";
    document.getElementById('abaslık').style.color = "white";
    document.getElementById('installion').style.color = "white";
    body.style.color = "white";
    body.style.backgroundColor = "#26334f";
    elements.forEach(element => {
      element.style.color = 'white';
    });
  }

  else {
    document.getElementById('header-svg').style.color = "white";
    document.getElementById('header-svg2').style.color = "white";
    document.getElementById('adress-element').style.color = "white";
    document.getElementById('theme-button').style.color = "white";
    document.getElementById('baslık').style.color = "white";
    document.getElementById('abaslık').style.color = "white";
    body.style.color = "white";
    body.style.backgroundColor = "#26334f";
  }
}

function responsivemenu() {
  var hamburger = document.getElementsByClassName('hamburger-lines');
  var responsive = document.getElementsByClassName('responsive-menu');
  for (var i = 0; i < hamburger.length; i++) {
    if (responsive[i].style.display == "block")
      responsive[i].style.display = "none";
    else
      responsive[i].style.display = "block";
  }
}

themebutton.addEventListener("click", (e) => {
  if (themecontainer.style.display == "flex") {
    themecontainer.style.display = "none";
  }
  else {
    themecontainer.style.display = "flex";
  }
})

blacktheme.addEventListener("click", (e) => {
  if (body.attributes["data-theme"].value == "black") {
    console.log("Zaten siyah temada");
  } else {
    body.attributes["data-theme"].value = "black";
    setStorage();
    document.getElementById('header-svg').style.color = "white";
    document.getElementById('header-svg2').style.color = "white";
    document.getElementById('theme-button').style.color = "white";
    document.getElementById('adress-element').style.color = "white";
    document.getElementById('adress-element').style.color = "white";
    document.getElementById('baslık').style.color = "white";
    document.getElementById('abaslık').style.color = "white";
    document.getElementById('installion').style.color = "white";
    body.style.color = "white";
    body.style.backgroundColor = "black";
    elements.forEach(element => {
      element.style.color = 'white';
    });
  }
})

lighttheme.addEventListener("click", (e) => {
  if (body.attributes["data-theme"].value == "light") {
    console.log("Zaten açık temada");
  }
  else {
    body.attributes["data-theme"].value = "light";
    setStorage();
    document.getElementById('header-svg').style.color = "black";
    document.getElementById('header-svg2').style.color = "black";
    document.getElementById('theme-button').style.color = "black";
    document.getElementById('baslık').style.color = "black";
    document.getElementById('abaslık').style.color = "black";
    document.getElementById('installion').style.color = "black";
    body.style.color = "black";
    body.style.backgroundColor = "white";
    elements.forEach(element => {
      element.style.color = 'black';
    });
  }
})

solidtheme.addEventListener("click", (e) => {
  if (body.attributes["data-theme"].value == "solid") {
    console.log("Zaten mavi temada");
  }
  else {
    body.attributes["data-theme"].value = "solid";
    setStorage();
    document.getElementById('header-svg').style.color = "white";
    document.getElementById('header-svg2').style.color = "white";
    document.getElementById('theme-button').style.color = "white";
    document.getElementById('adress-element').style.color = "white";
    document.getElementById('baslık').style.color = "white";
    document.getElementById('abaslık').style.color = "white";
    document.getElementById('installion').style.color = "white";
    body.style.color = "white";
    body.style.backgroundColor = "#26334f";
    elements.forEach(element => {
      element.style.color = 'white';
    });
  }
})

const setStorage = () => {
  window.localStorage.setItem("selection-theme", JSON.stringify(body.attributes["data-theme"].value))
}

const getStore = () => {
  const d = JSON.parse(window.localStorage.getItem("selection-theme"))
  console.log("Log " + d)
  body.attributes["data-theme"].value = d === null ? [] : d
}

window.addEventListener('load', () => {
  getStore();
  loadtheme();
}, false)