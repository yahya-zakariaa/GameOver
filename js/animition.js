let searchBtn = document.querySelector(".search-btn");
let searchIcon = document.querySelector(".search-btn i");
let searchInp = document.querySelector("#searchInp");
let navbar = document.querySelector("#navbar");

searchBtn.addEventListener("click", function (e) {
  if (searchInp.classList.contains("searchInp-static")) {
    searchInp.classList.replace("searchInp-static", "searchInp-anim");
    searchIcon.classList.add("search-icon");
    searchIcon.classList.remove("search");
  } else {
    searchInp.classList.replace("searchInp-anim", "searchInp-static");
    searchBtn.style.color = "white";
    searchIcon.classList.remove("search-icon");
    searchIcon.classList.add("search");
  }
});

window.addEventListener("scroll", function () {
  let scroll = 35;
  if (window.scrollY >= scroll) {
    navbar.classList.replace("bg-transparent", "bg-dark");
    navbar.classList.add("shadow-lg");
  } else if (window.scrollY < scroll) {
    navbar.classList.replace("bg-dark", "bg-transparent");
    navbar.classList.remove("shadow-lg");
  }
});
