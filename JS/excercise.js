$("#enduranceLink").click(() => {
  $("#endurance").toggle();
  $("#enduranceLink").css("color", "#ffc107");

  //   alert("hi");
});
$("#strengthLink").click(() => {
  $("#strength").toggle();
  $("#strengthLink").css("color", "#ffc107");
  //   alert("hi");
});

$("#endurance h3").hover(function () {
  $("#endurance li").toggle();
});
