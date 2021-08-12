var minutes = parseInt($("#time").val());
$("#start").click(() => {
  alert("start button pressed");
  $("#roundSlider").animate(
    {
      borderWidth: "50px",
    },
    minutes * 60 * 1000
  );
});

$("#showDiv").click(function () {
  $("#listPara").show();
  $("#showDiv").hide();
});
// $("#roundSlider").animate({
//   opacity: 0.4,
//   borderWidth: "10px",
// });
