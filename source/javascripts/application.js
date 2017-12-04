//= require jquery
//= require bootstrap
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
