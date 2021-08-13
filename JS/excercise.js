$("#enduranceLink").click(() => {
  $("#endurance").toggle();
  $("#enduranceLink").css("color", "#ffc107");
  $("#eType1").animate(
    { borderWidth: "5px", padding: "+=10px", borderRadius: "+20px" },
    "1000"
  );
  $("#eType2").animate(
    { borderWidth: "5px", padding: "+=10px", borderRadius: "+20px" },
    "1000"
  );
  $("#eType3").animate(
    {
      borderWidth: "5px",
      padding: "+=10px",
      top: "+10px",
      borderRadius: "+20px",
    },
    "1000"
  );

  //   alert("hi");
});
$("#strengthLink").click(() => {
  $("#strength").toggle();
  $("#strengthLink").css("color", "#ffc107");
  $("#sType1").animate(
    { borderWidth: "5px", padding: "+=10px", borderRadius: "+20px" },
    "1000"
  );
  $("#sType2").animate(
    { borderWidth: "5px", padding: "+=10px", borderRadius: "+20px" },
    "1000"
  );
  $("#sType3").animate(
    { borderWidth: "5px", padding: "+=10px", borderRadius: "+20px" },
    "1000"
  );
  //   alert("hi");
});

$("#trainer1").click(() => {
  // alert("clicked!");
  $("#trainer1").fadeOut("4000");
  $("#trainer1Bio").fadeIn("2000");
});

$("#trainer1Bio").click(() => {
  // alert("clicked!");
  $("#trainer1Bio").fadeOut("4000");
  $("#trainer1").fadeIn("2000");
});

$("#trainer2").click(() => {
  // alert("clicked!");
  $("#trainer2").fadeOut("4000");
  $("#trainer2Bio").fadeIn("2000");
});

$("#trainer2Bio").click(() => {
  // alert("clicked!");
  $("#trainer2Bio").fadeOut("4000");
  $("#trainer2").fadeIn("2000");
});

$("#trainer3").click(() => {
  // alert("clicked!");
  $("#trainer3").fadeOut("4000");
  $("#trainer3Bio").fadeIn("2000");
});

$("#trainer3Bio").click(() => {
  // alert("clicked!");
  $("#trainer3Bio").fadeOut("4000");
  $("#trainer3").fadeIn("2000");
});
