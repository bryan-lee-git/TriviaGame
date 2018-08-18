//  Create a trivia form with multiple choice or true/false options (your choice).

//  Game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.

//  Don't let the player pick more than one answer per question.

//-------------------------------------
//  GLOBAL VARIABLES 
//-------------------------------------

//  counter, wins, losses, and timer variables
var wrongAnswers = 0;
var rightAnswers = 0;
var time = 0;
var intervalId = 0;
var clockRunning = false;
var currentTime = 0;

//  Question 1
var questionOne = {
    question: "this",
    answerOne: "this",
    answerTwo: "this",
    answerThree: "this"
}

//  Question 2
var questionTwo = {
    question: "this",
    answerOne: "this",
    answerTwo: "this",
    answerThree: "this"
}

//  Question 3
var questionThree = {
    question: "this",
    answerOne: "this",
    answerTwo: "this",
    answerThree: "this"
}

//-------------------------------------
//  FUNCTIONS
//-------------------------------------

//  generate form function

//  game timer function

var gameTimer = {

    time: 0,
  
    reset: function() {
      gameTimer.time = 0;  
      $("#timeArea").text("00:00");
    },
  
    start: function() {
      //  setInterval to start the count here and set the clock to running.
      if (!clockRunning) {
        intervalId = setInterval(gameTimer.count, 1000);
        clockRunning = true;
      }
    },
  
    stop: function() {
      //  clearInterval to stop the count here and set the clock to not be running.
      stop();
      clearInterval(intervalId);
      clockRunning = false;
    },
  
    count: function() {
      //  increment time by 1
      gameTimer.time++;
      //  get the current time, pass that into the gameTimer.timeConverter function, and save the result in a variable.
      currentTime = gameTimer.timeConverter(gameTimer.time);
      //  show the converted time in the timeArea div.
      $("#timeArea").html(currentTime);
      
      if (gameTimer.time === 30) {
        gameTimer.stop();
        alert ("TIME'S UP!");
        }
    },
  
    //  time converter
    timeConverter: function(t) {

      //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
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
    },

};

//  function to show trivia quiz and start timer
function runGame() {
    $("#gameContain").show(500);
    gameTimer.start();
}

//-------------------------------------
//  MAIN PROGRAM
//-------------------------------------

$("#gameContain").hide(0);

$("#start").on("click", function() {
    $("#start").slideUp(200);
    runGame();
});


//  disable more than one checkbox being checked at a time

$("#one").on("click", function() {
    $('#one input:checkbox').click(function() {
        $('#one input:checkbox').not(this).prop('checked', false);
    });
});

$("#two").on("click", function() {
    $('#two input:checkbox').click(function() {
        $('#two input:checkbox').not(this).prop('checked', false);
    });
});

$("#three").on("click", function() {
    $('#three input:checkbox').click(function() {
        $('#three input:checkbox').not(this).prop('checked', false);
    });
});