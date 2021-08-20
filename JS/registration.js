$(document).ready(function () {
  $(".wrapperForm").hide();
  $(".wrapperLogin").hide();
  $(".signUp").on("click", function () {
    $(".instructions").hide();
    $(".wrapperForm").show();
    $(".wrapperLogin").hide();
    $(".entry").hide();
  });
  $(".signIn").on("click", function () {
    $(".instructions").hide();
    $(".wrapperForm").hide();
    $(".wrapperLogin").show();
    $(".entry").hide();
  });
  $("#single").hide();
  $("#couple").hide();
  $("#gridRadios1").on("click", function () {
    $("#single").show();
    $("#couple").hide();
  });
  $("#gridRadios2").on("click", function () {
    $("#single").hide();
    $("#couple").show();
  });
  var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;

  // Form Validation on Submit Button

  $(".submit").click(() => {
    var checkValidation = true;

    // Email Validation

    const enteredEmail = $(".emailValidation").val().trim();
    console.log(enteredEmail);
    if (enteredEmail === "") {
      $(".emailValidation")
        .next()
        .text("Please Fill! This Field is Required...");
      checkValidation = false;
    } else if (!emailPattern.test(enteredEmail)) {
      $(".emailValidation").next().text("Must be a valid email address...");
      checkValidation = false;
    } else {
      $(".emailValidation").next().text("");
      var passPattern = $("#exampleInputPassword1").val();
      const enteredPass = $("#exampleInputPassword11").val();

      // Password Validation

      if (passPattern === enteredPass) {
        alert("WelCome to The StrongMan FitNess Center!!!");
        $("#exampleInputPassword11").next().text("");
        checkValidation = false;
      } else if (passPattern != enteredPass) {
        alert("Password Must be same as before...");
      }
    }
  });

  // Sign In Validation

  $(".signin").click(() => {
    var checkValidation = true;

    //SignIn Email Validation

    const enteredEmail = $(".signinemail").val().trim();

    if (enteredEmail === "") {
      $(".signinemail").next().text("Please Fill! This Field is Required...");
      checkValidation = false;
    } else if (!emailPattern.test(enteredEmail)) {
      $(".signinemail").next().text("Must be a valid email address...");
      checkValidation = false;
    } else {
      alert("WelCome to The StrongMan FitNess Center!!!");
    }
  });
});
