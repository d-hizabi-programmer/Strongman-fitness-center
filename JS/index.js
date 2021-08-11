document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide").mount();
});
var elms = document.getElementsByClassName("splide");
for (var i = 0, len = elms.length; i < len; i++) {
  if (i == len - 1) {
    i = 0;
  }
  new Splide(elms[i]).mount();
}
