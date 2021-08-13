$("#showDiv").click(() => {
  $("#listPara").show();
  $("#showDiv").hide();
});

$("#press").mousedown(total);
function total() {
  let entered = prompt('Enter Number Of Minutes You Want To Exercise');
  console.log(entered);
  let usertimeinsec = entered * 60;
  let final = usertimeinsec / 100;
  const countdown = () => {
    const now = new Date().getTime();

    let addon = now + usertimeinsec;
    //   console.log(addon);
    const gap = addon - now;
    //   console.log(gap);
    usertimeinsec--;
    document.querySelector(".sec").innerText = gap + ' Seconds Left!';
    if (gap <= -1) {
      //   alert("Congrats!!!");
      document.querySelector(".sec").innerText = 0;
    }
    
    $("#slider").roundSlider({
      sliderType: "min-range",
      value: gap / final,
    });
  };
  setInterval(() => {
    countdown();
  }, 1000);
}