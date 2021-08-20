// Saniya Memon

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

// accordian===================
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

//review splid

// for star rating

var starCounter = 0;
$("#star1").on("click", () => {
  if ($("#star1").hasClass("clickStar")) {
    $("#star1").removeClass("clickStar");
    starCounter--;
  } else {
    $("#star1").addClass("clickStar");
    starCounter++;
  }
});

$("#star2").on("click", () => {
  if ($("#star2").hasClass("clickStar")) {
    $("#star2").removeClass("clickStar");
    starCounter--;
  } else {
    $("#star2").addClass("clickStar");
    starCounter++;
  }
});

$("#star3").on("click", () => {
  if ($("#star3").hasClass("clickStar")) {
    $("#star3").removeClass("clickStar");
    starCounter--;
  } else {
    $("#star3").addClass("clickStar");
    starCounter++;
  }
});

$("#star4").on("click", () => {
  if ($("#star4").hasClass("clickStar")) {
    $("#star4").removeClass("clickStar");
    starCounter--;
  } else {
    $("#star4").addClass("clickStar");
    starCounter++;
    // console.log("Stars:" + starCounter);
  }
});
$("#star5").on("click", () => {
  if ($("#star5").hasClass("clickStar")) {
    $("#star5").removeClass("clickStar");
    starCounter--;
    // console.log("Stars:" + starCounter);
  } else {
    $("#star5").addClass("clickStar");
    starCounter++;
    // console.log("Stars:" + starCounter);
  }
});

//REVIEW PANEL
document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide", {
    type: "loop",
    perPage: 1,
    focus: "center",
  }).mount();
});
var elms = document.getElementsByClassName("splide");
for (var i = 0, len = elms.length; i < len; i++) {
  new Splide(elms[i]).mount();
}

// review button click event
$("#reviewBtn").click(function (evt) {
  evt.preventDefault();
  if ($("#name").val() == "") {
    $("#name").next().text("Name should not be empty!");
  } else if ($("#review").val() == "") {
    $("#review").next().text("Comment should not be empty!");
  } else {
    alert("Thank You for Rating us!");

    //
    var htmlELments = ` <li class="splide__slide">
     <div class="cardHolder">
         <div class="imgHolder">
            <p class="headfonts">SANIYAMEMON</p>
            <span class="fa fa-star"></span>
             <span class="fa fa-star"></span>
             <span class="fa fa-star"></span>
             <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
         </div>
        <div class="reviewHolder parafonts black">
           JKASHKHAjkskJK
        </div>
 </div>
    </li>`;

    document.querySelector(".splide__list").innerHTML = htmlELments;
    console.log("CHilde:" + $(".splide__list").children().length);

    //reset page!
    $("#name").val("");
    $("#review").val("");
    $("#star1").removeClass("clickStar");
    $("#star2").removeClass("clickStar");
    $("#star3").removeClass("clickStar");
    $("#star4").removeClass("clickStar");
    $("#star5").removeClass("clickStar");

    // console.log(
    //   "Name:" + userName + "\n Comment:" + userReview + "stars:" + starCounter
    // );
  }
});
