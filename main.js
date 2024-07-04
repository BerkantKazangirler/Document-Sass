const blacktheme = "";
const lighttheme = "";
const solidtheme = "";
const body = document.querySelector("html").attributes["data-theme"].value;

let theme = [];

function loadtheme() {
  if (body == "black") {
    alert("black");
  } else if (body == "light") {
    alert("light");
  } else if (body == "solid") {
    alert("solid");
  } else {
    alert("solid");
  }
}

function responsivemenu() {
  var hamburger = document.getElementsByClassName('hamburger-lines');
  var responsive = document.getElementsByClassName('responsive-menu');
  for(var i = 0; i < hamburger.length; i++){
      if(responsive[i].style.display == "block")
          responsive[i].style.display = "none";
      else
          responsive[i].style.display = "block";
  }
}