const countdown = (entered) => {
  var usertimeinsec = entered * 60;
  var final = usertimeinsec / 100;
  const now = new Date().getTime();
  var addon = now + usertimeinsec;
  const gap = addon - now;
  usertimeinsec--;
  document.querySelector(".sec").innerText = gap;

  if (gap <= -1) {
    //   alert("Congrats!!!");
    document.querySelector(".sec").innerText = 0;
  }

  $(document).ready(function () {
    $("#slider").roundSlider({
      sliderType: "min-range",
      value: gap / final,
    });
  });
};
$("#press").click(() => {
  // console.log("inside clocl ");
  var entered = prompt();
  console.log(entered);
  // let usertime = entered;

  setInterval(() => {
    countdown(entered);
  }, 1000);
});
