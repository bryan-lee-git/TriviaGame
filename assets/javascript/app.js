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
var questionOneAnswer = "";
var questionTwoAnswer = "";
var questionThreeAnswer = "";

//  Question 1
var questionOne = {

    question: "What is the JavaScript syntax for declaring a variable?",
    answerOne: "declare",
    answerTwo: "v",
    answerThree: "var",
    correctAnswer: "option3",

    fillArea: function() {
        $("#questionOne").html(this.question);
        $("#q1a1").html(this.answerOne);
        $("#q1a2").html(this.answerTwo);
        $("#q1a3").html(this.answerThree);
    }
}

//  Question 2
var questionTwo = {

    question: "What programming language uses the $('#stuff'); syntax?",
    answerOne: "HTML",
    answerTwo: "PHP",
    answerThree: "jQuery",
    correctAnswer: "option3",

    fillArea: function() {
        $("#questionTwo").html(this.question);
        $("#q2a1").html(this.answerOne);
        $("#q2a2").html(this.answerTwo);
        $("#q2a3").html(this.answerThree);
    }
}

//  Question 3
var questionThree = {

    question: "What does the CSS acronym stand for?",
    answerOne: "Creative Class Structures",
    answerTwo: "Cascading Style Sheets",
    answerThree: "Crazy Styling Stuff",
    correctAnswer: "option2",

    fillArea: function() {
        $("#questionThree").html(this.question);
        $("#q3a1").html(this.answerOne);
        $("#q3a2").html(this.answerTwo);
        $("#q3a3").html(this.answerThree);
    }
}

//-------------------------------------
//  FUNCTIONS
//-------------------------------------

//  game timer function - also controls if statements for time constraints

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
      
      if (gameTimer.time === 10) {
        gameTimer.stop();
        alert ("TIME'S UP!");
        validateAnswers();
        displayFinalScore();
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

      } else if (minutes < 10) {
        minutes = "0" + minutes;
      }

      return minutes + ":" + seconds;
    }
};

//  function to fill all question areas

function fillQuestions() {
    questionOne.fillArea();
    questionTwo.fillArea();
    questionThree.fillArea();
};

//  function to validate answers 

function validateAnswers() {
    
    //  question one
    if (questionOneAnswer === questionOne.correctAnswer) {
        rightAnswers++;
    } else if (questionOneAnswer != questionOne.correctAnswer) {
        wrongAnswers++;
    }
    //question two
    if (questionTwoAnswer === questionTwo.correctAnswer) {
        rightAnswers++;
    } else if (questionTwoAnswer != questionTwo.correctAnswer) {
        wrongAnswers++;
    }
    //question three
    if (questionThreeAnswer === questionThree.correctAnswer) {
        rightAnswers++;
    } else if (questionThreeAnswer != questionTwo.correctAnswer) {
        wrongAnswers++;
    }
};

//  function to display final score
function displayFinalScore() {
    //  empty game container to display score
    $("#gameContain").empty();
    //  create div to display trivia score
    var finalScore = $("<div>");
    finalScore.addClass("scoreScreen col-sm-12");
    $("#gameContain").append(finalScore);
    finalScore.html("<h2>" + "You got " + rightAnswers + " right answer(s)" + "<br>" + "and " + wrongAnswers + " wrong answer(s)." + "</h2>");
    var restartBtn = $("<button class='btn btn-success' id='restart'>TRY AGAIN</button>");
    finalScore.after(restartBtn);
    //  functionality for restart button
    $("#restart").on("click", function() {
    window.location.reload();
    });
}

//  function to show trivia quiz and start timer
function runGame() {
    $("#gameContain").show(500);
    fillQuestions();
    gameTimer.start();
};

//-------------------------------------
//  MAIN PROGRAM
//-------------------------------------


//  hide game container until start button is clicked
$("#gameContain").hide(0);

//  start game on start button click
$("#start").on("click", function() {
    $("#start").slideUp(200);
    runGame();
});

//  disable more than one checkbox being checked at a time for all question areas

$('#one input:checkbox').click(function() {
        questionOneAnswer = "";
        $('#one input:checkbox').not(this).prop('checked', false);
        questionOneAnswer = this.value;
        console.log(questionOneAnswer);
});

$('#two input:checkbox').click(function() {
        questionTwoAnswer = "";
        $('#two input:checkbox').not(this).prop('checked', false);
        questionTwoAnswer = this.value;
        console.log(questionTwoAnswer);
});

$('#three input:checkbox').click(function() {
        questionThreeAnswer = "";
        $('#three input:checkbox').not(this).prop('checked', false);
        questionThreeAnswer = this.value;
        console.log(questionThreeAnswer);
});