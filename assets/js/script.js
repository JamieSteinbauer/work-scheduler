//.ready tells browser to wait until DOM elements are safe to manipulate
$(document).ready(function () {
  //display current day and time
  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
  
    //assign save button to localstorage
    $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    //setting to localStorage
    localStorage.setItem(time, text);

  });
    //load data from localStorage for each hour
    $("hour9 .description").val(localStorage.getItem("hour9"));
    $("hour10 .description").val(localStorage.getItem("hour10"));
    $("hour11 .description").val(localStorage.getItem("hour11"));
    $("hour12 .description").val(localStorage.getItem("hour12"));
    $("hour1 .description").val(localStorage.getItem("hour1"));
    $("hour2 .description").val(localStorage.getItem("hour2"));
    $("hour3 .description").val(localStorage.getItem("hour3"));
    $("hour4 .description").val(localStorage.getItem("hour4"));
    $("hour5 .description").val(localStorage.getItem("hour5"));  

    function hourTracker() {
        //get current number of hours
        var currentHour = moment().hour();
        
        //loop over time blocks
        $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("hour")[1]);
  
        //check if time has passed, change color
        if (blockHour < currentHour) {
          $(this).addClass("past");
          $(this).removeClass("future");
          $(this).removeClass("present");
        } 
        else if (blockHour === currentHour) {
          $(this).removeClass("past");
          $(this).addClass("present");
          $(this).removeClass("future");
        } 
        else {
          $(this).removeClass("present");
          $(this).removeClass("past");
          $(this).addClass("future");
        }
      });
    }
    hourTracker();
})
  