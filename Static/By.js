let hambuger = document.getElementById("hamburger");

let list = document.getElementById("nav_mob_ul");
function hamburger() {
  if (list.style.display === "block") {
    list.style.display = "none";
  } else {
    list.style.display = "block";
  }
}
