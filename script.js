// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  const dateTime = $("#currentDay");

  let paretn = [];

  const workingTime = [
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

  // console.log(workingEl);
  // console.log($(".hour"));

  setInterval(function () {
    let currentDate = moment().format("MMMM Do, YYYY");
    let currentTime = moment().format("hh:mm:ss (A)");
    let currentHour;

    dateTime.text(`${currentDate} - ${currentTime}`);
  }, 1000);

  function sectionColorFormat() {
    currentHour = moment().format("hhA");
    // console.log(currentHour);
    $(".hour").each(function () {
      // console.log($(this).parent());

      if ($(this)[0].innerText === currentHour) {
        let parent = $(this).parent("div");
        parent[0].className = "row time-block present";
        console.log($(this).parent("div")[0].attributes.id.nodeValue);
      }
    });

    for (
      let i = workingTime.length - 1;
      i > workingTime.indexOf(currentHour);
      i--
    ) {
      $("#hour-" + workingTime[i]).addClass("future");
    }

    for (let i = 0; i < workingTime.indexOf(currentHour); i++) {
      $("#hour-" + workingTime[i]).addClass("past");
    }
  }

  sectionColorFormat();

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
