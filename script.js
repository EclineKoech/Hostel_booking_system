$(document).ready(function () {
  $(".madaraka").hover(function () {
    $("#MADARAKA").toggle();
    $(".hostel2").toggle();
  });
});

$(document).ready(function () {
  $(".uhuru").hover(function () {
    $("#UHURU").toggle();
    $(".hostel1").toggle();
  });
});

$(document).ready(function () {
  $(".harambee").hover(function () {
    $("#HARAMBEE").toggle();
    $(".hostel8").toggle();
  });
});

$(document).ready(function () {
  $(".huruma").hover(function () {
    $("#HURUMA").toggle();
    $(".hostel7").toggle();
  });
});

$(document).ready(function () {
  $(".umoja").hover(function () {
    $("#UMOJA").toggle();
    $(".hostel5").toggle();
  });
});

$(document).ready(function () {
  $(".imara").hover(function () {
    $("#IMARA").toggle();
    $(".hostel4").toggle();
  });
});

$("form").submit(function () {
  var email = document.getElementById("email");
  var message = document.getElementById("message");
  if (email === "" || message === "");
  alert("Thankyou for your message");
});

// $(document).ready(function () {
//   $("div#image").click(function (event) {
//     event.preventDefault();
//     $("div#image").toggle();
//     $("p#MADARAKA").toggle();
//     $("div#image").hide();
//   });
//   $("p#MADARAKA").click(function (event) {
//     event.preventDefault();
//     $("p#MADARAKA").toggle();
//     $("div#image").toggle();
//     $("div#image").show();
//   });

// $(document).ready(function () {
//   $("div#image").click(function (event) {
//     event.preventDefault();
//     $("div#image").toggle();
//     $("p#UHURU").toggle();
//     $("div#image").hide();
//   });
//   $("p#UHURU").click(function (event) {
//     event.preventDefault();
//     $("p#UHURU").toggle();
//     $("div#image").toggle();
//     $("div#image").show();
//   });
// });

// $(document).ready(function () {
//   $("div#image").click(function (event) {
//     event.preventDefault();
//     $("div#image").toggle();
//     $("p#HURUMA").toggle();
//     $("div#image").hide();
//   });
//   $("p#HURUMA").click(function (event) {
//     event.preventDefault();
//     $("p#HURUMA").toggle();
//     $("div#image").toggle();
//     $("div#image").show();
//   });
// });

// $(document).ready(function () {
//   $("div#image").click(function (event) {
//     event.preventDefault();
//     $("div#image").toggle();
//     $("p#HARAMBEE").toggle();
//     $("div#image").hide();
//   });
//   $("p#HARAMBEE").click(function (event) {
//     event.preventDefault();
//     $("p#HARAMBEE").toggle();
//     $("div#image").toggle();
//     $("div#image").show();
//   });
// });
// $(document).ready(function () {
//   $("div#image").click(function (event) {
//     event.preventDefault();
//     $("div#image").toggle();
//     $("p#UMOJA").toggle();
//     $("div#image").hide();
//   });
//   $("p#UMOJA").click(function (event) {
//     event.preventDefault();
//     $("p#UMOJA").toggle();
//     $("div#image").toggle();
//     $("div#image").show();
//   });
// });

// $(document).ready(function () {
//   $("div#image").click(function (event) {
//     event.preventDefault();
//     $("div#image").toggle();
//     $("p#IMARA").toggle();
//     $("div#image").hide();
//   });
//   $("p#IMARA").click(function (event) {
//     event.preventDefault();
//     $("p#IMARA").toggle();
//     $("div#image").toggle();
//     $("div#image").show();
//   });
// });
