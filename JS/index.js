//for slider
document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide").mount();
});
var elms = document.getElementsByClassName("splide");

new Splide("#splide", {
  type: "fade",
  rewind: true,
  //   autoplay: playing,
}).mount();

// pad digit function
var padSingleDigit = function (num) {
  if (num < 10) {
    return "0" + num;
  } else {
    return num;
  }
};
// for timer on home page
const countdown = () => {
  const lastdate = new Date("August 21,2021 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = lastdate - now;
  console.log(gap);

  const sec = 1000;
  const min = sec * 60;
  const hr = min * 60;
  const day = hr * 24;

  const tday = Math.floor(gap / day);
  const thr = Math.floor((gap % day) / hr);
  const tmin = Math.floor((gap % hr) / min);
  const tsec = Math.floor((gap % min) / sec);

  document.querySelector(".day").innerText = padSingleDigit(tday) + ":";
  document.querySelector(".hr").innerText = " " + padSingleDigit(tday) + ":";
  document.querySelector(".min").innerText = padSingleDigit(tmin) + ":";
  document.querySelector(".sec").innerText = padSingleDigit(tsec);
};
setInterval(() => {
  countdown();
}, 1000);
