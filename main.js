const blacktheme = "";
const lighttheme = "";
const solidtheme = "";
const body = document.querySelector("body").attributes["data-theme"].value;

let theme = [];

function loadtheme() {
  alert(body);
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