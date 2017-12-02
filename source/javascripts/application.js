//= require jquery
//= require bootstrap
//= require_tree .

window.onscroll = (e) => {
  let scrollPosition = window.scrollY
  let headerName = document.getElementById("name")
  let header = document.getElementById("navbar-wagon")
  if (scrollPosition > 20) {
    headerName.classList.remove("hidden")
    header.classList.add("white")
  } else {
    headerName.classList.add("hidden")
    header.classList.remove("white")
  }
}
