// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  const dateTime = $("#currentDay");

  let paretn = [];

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

  const workingEl = [
    $("#hour-8"),
    $("#hour-9"),
    $("#hour-10"),
    $("#hour-11"),
    $("#hour-12"),
    $("#hour-13"),
    $("#hour-14"),
    $("#hour-15"),
    $("#hour-16"),
    $("#hour-17"),
    $("#hour-22"),
    $("#hour-24"),
  ];

  setInterval(function () {
    let currentDate = moment().format("MMMM Do, YYYY");
    let currentTime = moment().format("hh:mm:ss (A)");
    let currentHour;

    dateTime.text(`${currentDate} - ${currentTime}`);
  }, 1000);

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
        textSection = $("09AM-text").val();
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
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
