
//SOME FUNCTIONALITY TO AGENT LEADERBOARD


//sort metric drop down alphabetically 
$(function() {
    function sortAlphabetically() {
        var select = $('select');
        select.html(select.find('option').sort(function(x, y) {
            return $(x).text().localeCompare($(y).text());
        }));
    }
    //call upon loading
    sortAlphabetically();
});


//
function clickedWeekly(){
    document.getElementById("weekly").style.backgroundColor = "pink";
    setTimeout(function() {
        document.getElementById("weekly").style.backgroundColor = "#37475A";
      }, 700); // 2000 milliseconds = 2 seconds
    
    //TODO change metric to look based on weekly data
  };


  function clickedAllTime(){
    document.getElementById("allTime").style.backgroundColor = "green";
    setTimeout(function() {
        document.getElementById("allTime").style.backgroundColor = "#37475A";
      }, 700); // 2000 milliseconds = 2 seconds

    //TODO change metric to look based on all the data we have so far
  };

