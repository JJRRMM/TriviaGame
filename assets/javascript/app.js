var questions = ["The tallest statue in the world as of 2018, the Spring Temple Buddha, is located in what country?",
                 "Which actress played the character Annie Reed in the 1993 American romantic comedy Sleepless in Seattle?",
                 "At its peak in 2004, which company had over 9000 video rental stores worldwide?",
                 "What country is named for its location on the equator?",
                 "With twelve Oscar nominations and three wins, who is the most nominated male actor in Academy Awards history?",
                 "What is the secret identity of the fictional superhero Batman?",
                 "What do the letters C and H stand for in C & H Sugar?",
                 "What skipper lost the 1983 America’s Cup and then won the Cup back in 1987?",
                  "In boxing, what is the term for an illegal punch to the back of the head or base of the skull?",
                  "Which park is the most filmed location in the world?"];

var Answers = ["China <input type ='radio' name='group1' value=1>"+"India <input type='radio' name='group1' value=2>"+"France <input type='radio' name='group1' value=3>"+"Spain <input type='radio' name='group1'value=4>",
               "Meg Ryan <input type ='radio' name='group2' value=1>"+"Melanie Girffith <input type='radio'name='group2' value=2>"+"Julia Roberts <input type='radio' name='group2' value=3>"+"Sandra Bullock <input type='radio'name='group2'  value=4>",
               "Redbox <input type ='radio' name='group3' value=1>"+"Blockbuster <input type='radio' name='group3' value=2>"+"Movie Gallery <input type='radio' name='group3' value=3>"+"Gamerush <input type='radio' name='group3' value=4>",
               "Ecuador <input type ='radio' name='group4' value=1>"+"Columbia <input type='radio' name='group4' value=2>"+"Somalia <input type='radio' name='group4' value=3>"+"Kiribati <input type='radio' name='group4' value=4>",
               "Laurence Olivier <input type ='radio' name='group5' value=1>"+"Dustin Hoffman <input type='radio' name='group5' value=2>"+"Jack Nicholoson <input type='radio' name='group5' value=3>"+"Daniel Day-Lewis <input type='radio' name='group5' value=4>",
               "Clark Kent <input type ='radio' name='group6' value=1>"+"Bruce Wayne <input type='radio'  name='group6' value=2>"+"Dick Grayson <input type='radio'  name='group6' value=3>"+"Tony Stark <input type='radio'  name='group6' value=4>",
               "Calypso and Honey <input type ='radio' name='group7' value=1>"+"Cooper and Horatio <input type='radio' name='group7' value=2>"+"Calvin and Henry <input type='radio' name='group7' value=3>"+"Califonia and Hawaii <input type='radio' name='group7' value=4>",
               "Dennis Conner <input type ='radio' name='group8' value=1>"+"Alexander Cuthbert <input type='radio' name='group8' value=2>"+"Alexander Sturrock <input type='radio' name='group8' value=3>"+"Russell Coutts <input type='radio' name='group8' value=4>",
               "Kidney Pouch <input type ='radio' name='group9' value=1>"+"Sucker Punch <input type='radio' name='group9' value=2>"+"Headbutt <input type='radio' name='group9' value=3>"+"Rabbit Punch <input type='radio' name='group9' value=4>",
               "MackArthur Park <input type ='radio' name='group10' value=1>"+"Baloboa Park <input type='radio' name='group10' value=2>"+"Central Park <input type='radio' name='group10'value=3>"+"Hyde Park <input type='radio' name='group10' value=4>"]  ;

function showQuestions() { 
    // stopwatch.start();
    countDown();
    for (i=0;i<questions.length;i++) {
        var questionhtml = "<p>" + questions[i] + "</p";
    $("#question").append(questionhtml);
        
    // $("#question").append("China <input type ='radio' value='one'>"+"India <input type='radio' value=next>"+"Third <input type='radio' value=third>"+"Fourth <input type='radio' value=fourth>");
    $("#question").append(Answers[i]);
    };
    setTimeout(done, 1000 * 30);
}
function done(){   
    var right =0;
    var wrong =0;
    stopwatch.stop();
    stopwatch.reset();   
    var ans1 = $('input[name=group1]:checked').val(); 
    var ans2 = $('input[name=group2]:checked').val(); 
    var ans3 = $('input[name=group3]:checked').val();
    var ans4 = $('input[name=group4]:checked').val();
    var ans5 = $('input[name=group5]:checked').val();
    var ans6 = $('input[name=group6]:checked').val();
    var ans7 = $('input[name=group7]:checked').val();
    var ans8 = $('input[name=group8]:checked').val();
    var ans9 = $('input[name=group9]:checked').val();
    var ans10 = $('input[name=group10]:checked').val();
    
    if (ans1 == 1) {
        right = right + 1;
    } else { 
        wrong=wrong +1;
    }
         
    if (ans2 == 1) {        
        right = right + 1;
    } else { 
        wrong=wrong +1;
    } 
    if (ans3 == 2) {
        right = right + 1;
    } else { 
        wrong=wrong +1;
    } 
    if (ans4 == 1) {
        right = right + 1;
    } else { 
        wrong=wrong +1;
    }
    if (ans5 == 3) {
        right = right + 1;
    } else { 
        wrong=wrong +1;
    }
    
    if (ans6 == 2) {
        right = right + 1;
    } else { 
        wrong=wrong +1;
    } 
    if (ans7 == 4) {
        right = right + 1;
    } else { 
        wrong=wrong +1;
    } 
    if (ans8 == 1) {
        right = right + 1;
    } else { 
        wrong=wrong +1;
    } 
    if (ans9 == 4) {
        right = right + 1;
    } else { 
        wrong=wrong +1;
    }
    if (ans10 == 3) {
        right = right + 1;
       } else { 
        wrong=wrong +1;
      } 
    $("#question").empty();
    $("#question").append("Totally Trivial Trivia! <br/>");
    $("#question").append("All Done ! <br/>");
    $("#question").append("Correct Answers: "+ right + "<br/>");
    $("#question").append("Incorrect Answers:" + wrong + "<br/>");
    // $("#question").append("Unanswered:  ");
}
var intervalId;

// prevents the clock from being sped up unnecessarily
var clockRunning = false;

// Our stopwatch object
var stopwatch = {

  time: 0,
  lap: 1,

  reset: function() {

    stopwatch.time = 0;
    stopwatch.lap = 1;

    // DONE: Change the "display" div to "00:00."
    $("#display").text("00:00");

    // DONE: Empty the "laps" div.
    $("#laps").text("");
  },
  start: function() {

    // DONE: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
      intervalId = setInterval(stopwatch.count, 1000);
      clockRunning = true;
    }
  },
  stop: function() {

    // DONE: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    clockRunning = false;
  },
  recordLap: function() {

    // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
    //       and save the result in a variable.
    var converted = stopwatch.timeConverter(stopwatch.time);

    // DONE: Add the current lap and time to the "laps" div.
    $("#laps").append("<p>Lap " + stopwatch.lap + " : " + converted + "</p>");

    // DONE: Increment lap by 1. Remember, we can't use "this" here.
    stopwatch.lap++;
  },
  count: function() {

    // DONE: increment time by 1, remember we cant use "this" here.
    stopwatch.time++;

    // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
    //       and save the result in a variable.
    var converted = stopwatch.timeConverter(stopwatch.time);
    console.log(converted);

    // DONE: Use the variable we just created to show the converted time in the "display" div.
    $("#display").text(converted);
  },
  timeConverter: function(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }
};
function countDown() { 
    var timeleft = 10;
    var downloadTimer = setInterval(function(){
    timeleft--;
    document.getElementById("display").textContent = "Time Remaining: " + timeleft;
    if(timeleft <= 0)
        clearInterval(downloadTimer);
    },1000);
}