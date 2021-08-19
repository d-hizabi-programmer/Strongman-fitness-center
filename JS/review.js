$("#contactBtn").on("click", function (evt) {
  //   alert("perfect!");
  evt.preventDefault();

  re = /^[w.-]+@[w.-]+.[a-zA-Z]+$/;
  if ($("#myName").val() == "") {
    $("#myName").next().text("Name should be not be empty!");
  } else if (!isNaN($("#myName").val())) {
    $("#myName").next().text("Name should contain alphabets only!");
  } else if ($("#myEmail").val() == "") {
    $("#myEmail").next().text("Email should be not be empty!");
  } else if (!/^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/.test($("#myEmail").val())) {
    $("#myEmail").next().text("Invalid Email!");
  } else if ($("#myQuery").val() == "") {
    $("#myQuery").next().text("Message should be not be empty!");
  } else {
    alert("Our Execitive will contact you shortly!");
    $("#myName").val("");
    $("#myEmail").val("");
    $("#myQuery").val("");
  }
});
