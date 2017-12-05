//= require jquery
//= require_tree .

// Header movement //

window.onscroll = (e) => {
  let scrollPosition = window.scrollY;
  let headerName = document.getElementById("name");
  let header = document.getElementById("header");
  if (scrollPosition > 21) {
    header.classList.add("opacity")
  } else {
    header.classList.remove("opacity")
  }
}

// Random colors //

let colors = ['#ef5350', '#ab47bc', '#4caf50', '#3949ab', '#2196f3'];
let random_color = colors[Math.floor(Math.random() * colors.length)];
let css = '.card:hover {box-shadow: 5px 5px 5px 5px `${random_color}`};' 
// let style = document.createElement('style');

// if (style.styleSheet) {
//   style.styleSheet.cssText = css;
// } else {
//   style.appendChild(document.createTextNode(css));
// }
document.getElementsByClassName('card').style.box-shadow = css;