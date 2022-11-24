$(document).ready(function () {
  const dateTime = $("#currentDay");
  const dayTime = [
    "01AM",
    "02AM",
    "03AM",
    "04AM",
    "05AM",
    "06AM",
    "07AM",
    "08AM",
    "09AM",
    "10AM",
    "11AM",
    "12PM",
    "01PM",
    "02PM",
    "03PM",
    "04PM",
    "05PM",
    "07PM",
    "08PM",
    "09PM",
    "10PM",
    "11PM",
    "12AM",
  ];

  //Rendering Current date and time on top of the screen
  setInterval(function () {
    let currentDate = moment().format("MMMM Do, YYYY");
    let currentTime = moment().format("hh:mm:ss (A)");
    let currentHour;
    dateTime.text(`${currentDate} - ${currentTime}`);
  }, 1000);

  //Coloring time sections according with current time
  function sectionColorFormat() {
    currentHour = moment().format("hhA");

    $(".hour").each(function () {
      if ($(this)[0].innerText === currentHour) {
        let parent = $(this).parent("div");
        parent[0].className = "row time-block present";
        console.log($(this).parent("div")[0].attributes.id.nodeValue);
      }
    });

    if (dayTime.indexOf(currentHour) > 9)
      for (let i = dayTime.length - 1; i > dayTime.indexOf(currentHour); i--) {
        $("#hour-" + dayTime[i]).addClass("future");
      }

    for (let i = 0; i < dayTime.indexOf(currentHour); i++) {
      $("#hour-" + dayTime[i]).addClass("past");
    }
  }

  sectionColorFormat();

  //Upload text from each hour section to local Storage on clicking save button
  $(".saveBtn").on("click", function () {
    let sectionOnClickID = $(this).parent("div")[0].attributes.id.nodeValue;
    let textSection;
    switch (sectionOnClickID) {
      case "hour-08AM":
        textSection = $("#08AM-text").val();
        localStorage.setItem("08AM-text", textSection);
        break;
      case "hour-09AM":
        textSection = $("#09AM-text").val();
        localStorage.setItem("09AM-text", textSection);
        break;
      case "hour-10AM":
        textSection = $("#10AM-text").val();
        localStorage.setItem("10AM-text", textSection);
        break;
      case "hour-11AM":
        textSection = $("#11AM-text").val();
        localStorage.setItem("11AM-text", textSection);
        break;
      case "hour-12PM":
        textSection = $("#12PM-text").val();
        localStorage.setItem("12PM-text", textSection);
        break;
      case "hour-01PM":
        textSection = $("#01PM-text").val();
        localStorage.setItem("01PM-text", textSection);
        break;
      case "hour-02PM":
        textSection = $("#02PM-text").val();
        localStorage.setItem("02PM-text", textSection);
        break;
      case "hour-03PM":
        textSection = $("#03PM-text").val();
        localStorage.setItem("03PM-text", textSection);
        break;
      case "hour-04PM":
        textSection = $("#04PM-text").val();
        localStorage.setItem("04PM-text", textSection);
        break;
      case "hour-05PM":
        textSection = $("#05PM-text").val();
        localStorage.setItem("05PM-text", textSection);
    }
  });

  //Downloading text from localStorage to the appropriate section
  function downloadTextLocal() {
    $("#08AM-text").text(localStorage.getItem("08AM-text"));
    $("#09AM-text").text(localStorage.getItem("09AM-text"));
    $("#10AM-text").text(localStorage.getItem("10AM-text"));
    $("#11AM-text").text(localStorage.getItem("11AM-text"));
    $("#12PM-text").text(localStorage.getItem("12PM-text"));
    $("#01PM-text").text(localStorage.getItem("01PM-text"));
    $("#02PM-text").text(localStorage.getItem("02PM-text"));
    $("#03PM-text").text(localStorage.getItem("03PM-text"));
    $("#04PM-text").text(localStorage.getItem("04PM-text"));
    $("#05PM-text").text(localStorage.getItem("05PM-text"));
  }

  downloadTextLocal();
});
