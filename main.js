const blacktheme = document.getElementById("blacktheme");;
const lighttheme = document.getElementById("lighttheme");;
const solidtheme = document.getElementById("solidtheme");;
const body = document.querySelector("html");
const themebutton = document.getElementById("theme-button");
const themecontainer = document.getElementById("theme-options");


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

  }
})

lighttheme.addEventListener("click", (e) => {
  if (body.attributes["data-theme"].value == "light") {
    console.log("Zaten açık temada");
  }
  else {
    body.attributes["data-theme"].value = "light";
    setStorage();

  }
})

solidtheme.addEventListener("click", (e) => {
  if (body.attributes["data-theme"].value == "solid") {
    console.log("Zaten mavi temada");
  }
  else {
    body.attributes["data-theme"].value = "solid";
    setStorage();
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
}, false)