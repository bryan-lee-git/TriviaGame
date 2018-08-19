//----------------------------------------------------------------------------------
//  GLOBAL VARIABLES 
//----------------------------------------------------------------------------------

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
var questionFourAnswer = "";
var questionFiveAnswer = "";
var questionSixAnswer = "";
var questionSevenAnswer = "";
var questionEightAnswer = "";
var questionNineAnswer = "";

//----------------------------------------------------------------------------------
//  LEVEL 1 QUESTIONS 
//----------------------------------------------------------------------------------

//  Question 1 Object
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
};
//  Question 2 Object
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
};
//  Question 3 Object
var questionThree = {

    question: "What does the acronym 'CSS' stand for?",
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
};

//----------------------------------------------------------------------------------
//  LEVEL 2 QUESTIONS 
//----------------------------------------------------------------------------------

//  Question 4 Object
var questionFour = {

    question: "What does the acronym 'CDN' stand for?",
    answerOne: "Content Discovery Node",
    answerTwo: "Content Delivery Network",
    answerThree: "Collapse Div Now",
    correctAnswer: "option2",

    fillArea: function() {
        $("#questionOne").html(this.question);
        $("#q1a1").html(this.answerOne);
        $("#q1a2").html(this.answerTwo);
        $("#q1a3").html(this.answerThree);
    }
};
//  Question 5 Object
var questionFive = {

    question: "What is a method?",
    answerOne: "A function within a function.",
    answerTwo: "A function attached to an object.",
    answerThree: "A JavaScript 'storage container.'",
    correctAnswer: "option2",

    fillArea: function() {
        $("#questionTwo").html(this.question);
        $("#q2a1").html(this.answerOne);
        $("#q2a2").html(this.answerTwo);
        $("#q2a3").html(this.answerThree);
    }
};
//  Question 6 Object
var questionSix = {

    question: "If you wanted to run a function only when a certain condition was met, what would you employ?",
    answerOne: "A for loop.",
    answerTwo: "A callback function.",
    answerThree: "An if statement.",
    correctAnswer: "option3",

    fillArea: function() {
        $("#questionThree").html(this.question);
        $("#q3a1").html(this.answerOne);
        $("#q3a2").html(this.answerTwo);
        $("#q3a3").html(this.answerThree);
    }
};

//----------------------------------------------------------------------------------
//  LEVEL 3 QUESTIONS 
//----------------------------------------------------------------------------------

//  Question 7 Object
var questionSeven = {

    question: "Arrays are used...",
    answerOne: "to declare variables.",
    answerTwo: "to store multiple values inside of a single variable.",
    answerThree: "to run functions.",
    correctAnswer: "option2",

    fillArea: function() {
        $("#questionOne").html(this.question);
        $("#q1a1").html(this.answerOne);
        $("#q1a2").html(this.answerTwo);
        $("#q1a3").html(this.answerThree);
    }
};
//  Question 8 Object
var questionEight = {

    question: "What does it mean if a variable has a 'local' scope?",
    answerOne: "You can refer to it anywhere in your code.",
    answerTwo: "It only exists within the local scope.",
    answerThree: "That variable only purchases locally sourced fruits and vegetables.",
    correctAnswer: "option2",

    fillArea: function() {
        $("#questionTwo").html(this.question);
        $("#q2a1").html(this.answerOne);
        $("#q2a2").html(this.answerTwo);
        $("#q2a3").html(this.answerThree);
    }
};
//  Question 9 Object
var questionNine = {

    question: "What should you do in order to easily test that snippets of code are working properly",
    answerOne: "console.log it!",
    answerTwo: "console.print it!",
    answerThree: "debug.log it!",
    correctAnswer: "option1",

    fillArea: function() {
        $("#questionThree").html(this.question);
        $("#q3a1").html(this.answerOne);
        $("#q3a2").html(this.answerTwo);
        $("#q3a3").html(this.answerThree);
    }
};

//----------------------------------------------------------------------------------
//  FUNCTIONS
//----------------------------------------------------------------------------------

//  function to show trivia quiz and start game timer
function runGame() {
    $("#gameContain").show(500);
    levelOneQuestions();
    gameTimer.start();
};
//  function to fill level one question areas from question objects, assign clicks/answers
function levelOneQuestions() {
    questionOne.fillArea();
    questionTwo.fillArea();
    questionThree.fillArea();

    //  push button value to correct area
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
};
//  function to validate level one answers and add to score
function levelOneValidate() {
    
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
    } else if (questionThreeAnswer != questionThree.correctAnswer) {
        wrongAnswers++;
    }
};
//  function to display final score on screen and generate restart button
function levelOneScore() {
    //  empty game container to display score
    $("#triviaForm").hide();
    //  create div to display trivia score
    var finalScore = $("<div>");
    //  give it the appropriate classes
    finalScore.addClass("scoreScreen col-sm-12");
    //  add it to the game area
    $("#gameContain").append(finalScore);
    // if any wrong answers, restart from beginning
    if (rightAnswers < 3) {
        //  show score in the score display div
        finalScore.html("<h2>" + "You have " + rightAnswers + " right answer(s)" + "<br>" + "and " + wrongAnswers + " wrong answer(s)." + "<br>" + "All answers must be correct to continue." + "</h2>");
        var restartOneBtn = $("<button class='btn btn-success' id='restartOne'>TRY AGAIN</button>");
        finalScore.after(restartOneBtn);
        //  functionality for restart button
        $("#restartOne").on("click", function() {
            location.reload();
        })
    };
    //  if all right answers, allow entry to level two
    if (rightAnswers === 3) {
        finalScore.html("<h2>" + "You have " + rightAnswers + " right answer(s)" + "<br>" + "and " + wrongAnswers + " wrong answer(s)." + "<br>" + "You've leveled up!" + "</h2>");
        var levelTwoBtn = $("<button class='btn btn-success' id='levelTwo'>BEGIN LEVEL 2</button>");
        finalScore.after(levelTwoBtn);
        //  functionality for restart button
        $("#levelTwo").on("click", function() {
            $('.form-check-input').prop('checked', false);
            finalScore.hide(500);
            $("#levelTwo").hide(500);
            levelTwoQuestions();
            $("#triviaForm").show(500);
            gameTimer.start();
        });
    }
};
//  function to fill level two question areas from question objects, assign clicks/answers
function levelTwoQuestions() {
    questionFour.fillArea();
    questionFive.fillArea();
    questionSix.fillArea();

    //  push button value to correct area
    //  disable more than one checkbox being checked at a time for all question areas
    $('#one input:checkbox').click(function() {
        questionFourAnswer = "";
        $('#one input:checkbox').not(this).prop('checked', false);
        questionFourAnswer = this.value;
        console.log(questionFourAnswer);
    });
    
    $('#two input:checkbox').click(function() {
        questionFiveAnswer = "";
        $('#two input:checkbox').not(this).prop('checked', false);
        questionFiveAnswer = this.value;
        console.log(questionFiveAnswer);
    });
    
    $('#three input:checkbox').click(function() {
        questionSixAnswer = "";
        $('#three input:checkbox').not(this).prop('checked', false);
        questionSixAnswer = this.value;
        console.log(questionSixAnswer);
    });
};
//  function to validate level two answers and add to score
function levelTwoValidate() {
    //question four
    if (questionFourAnswer === questionFour.correctAnswer) {
        rightAnswers++;
    } else if (questionFourAnswer != questionFour.correctAnswer) {
        wrongAnswers++;
    }
    //question five
    if (questionFiveAnswer === questionFive.correctAnswer) {
        rightAnswers++;
    } else if (questionFiveAnswer != questionFive.correctAnswer) {
        wrongAnswers++;
    }
    //question six
    if (questionSixAnswer === questionSix.correctAnswer) {
        rightAnswers++;
    } else if (questionSixAnswer != questionSix.correctAnswer) {
        wrongAnswers++;
    }
};
//  function to display final score on screen and generate restart button
function levelTwoScore() {
    //  empty game container to display score
    $("#triviaForm").hide();
    //  create div to display trivia score
    var finalScore = $("<div>");
    finalScore.addClass("scoreScreen col-sm-12");
    $("#gameContain").append(finalScore);
    if (rightAnswers < 6) {
        //  show score in the score display div
        finalScore.html("<h2>" + "You have " + rightAnswers + " right answer(s)" + "<br>" + "and " + wrongAnswers + " wrong answer(s)." + "<br>" + "All answers must be correct to level up." + "</h2>");
        finalScore.html("<h2>" + "You have " + rightAnswers + " right answer(s)" + "<br>" + "and " + wrongAnswers + " wrong answer(s)." + "<br>" + "All answers must be correct to continue." + "</h2>");
        var restartOneBtn = $("<button class='btn btn-success' id='restartOne'>TRY AGAIN</button>");
        finalScore.after(restartOneBtn);
        //  functionality for restart button
        $("#restartOne").on("click", function() {
            location.reload();
        })
    } else if (rightAnswers === 6) {
        finalScore.html("<h2>" + "You have " + rightAnswers + " right answer(s)" + "<br>" + "and " + wrongAnswers + " wrong answer(s)." + "<br>" + "You've leveled up!" + "</h2>");
        var levelThreeBtn = $("<button class='btn btn-success' id='levelThree'>BEGIN LEVEL 3</button>");
        finalScore.after(levelThreeBtn);
        //  functionality for restart button
        $("#levelThree").on("click", function() {
            $('.form-check-input').prop('checked', false);
            finalScore.hide(500);
            $("#levelThree").hide(500);
            levelThreeQuestions();
            $("#triviaForm").show(500);
            gameTimer.start();
        });
    }
};
//  function to fill question areas from question objects, assign clicks/answers
function levelThreeQuestions() {
    questionSeven.fillArea();
    questionEight.fillArea();
    questionNine.fillArea();

    //  push button value to correct area
    //  disable more than one checkbox being checked at a time for all question areas
    $('#one input:checkbox').click(function() {
        questionSevenAnswer = "";
        $('#one input:checkbox').not(this).prop('checked', false);
        questionSevenAnswer = this.value;
        console.log(questionSevenAnswer);
    });
    
    $('#two input:checkbox').click(function() {
        questionEightAnswer = "";
        $('#two input:checkbox').not(this).prop('checked', false);
        questionEightAnswer = this.value;
        console.log(questionEightAnswer);
    });
    
    $('#three input:checkbox').click(function() {
        questionNineAnswer = "";
        $('#three input:checkbox').not(this).prop('checked', false);
        questionNineAnswer = this.value;
        console.log(questionNineAnswer);
    });
};
//  function to validate level three answers and add to score
function levelThreeValidate() {
    //question seven
    if (questionSevenAnswer === questionSeven.correctAnswer) {
        rightAnswers++;
    } else if (questionSevenAnswer != questionSeven.correctAnswer) {
        wrongAnswers++;
    }
    //question Eight
    if (questionEightAnswer === questionEight.correctAnswer) {
        rightAnswers++;
    } else if (questionEightAnswer != questionEight.correctAnswer) {
        wrongAnswers++;
    }
    //question Nine
    if (questionNineAnswer === questionNine.correctAnswer) {
        rightAnswers++;
    } else if (questionNineAnswer != questionNine.correctAnswer) {
        wrongAnswers++;
    }
};
//  function to display final score on screen and generate restart button
function levelThreeScore() {
    //  empty game container to display score
    $("#triviaForm").hide();
    //  create div to display trivia score
    var finalScore = $("<div>");
    finalScore.addClass("scoreScreen col-sm-12");
    $("#gameContain").append(finalScore);
    var percentage = Math.floor(rightAnswers / (wrongAnswers + rightAnswers) * 100);
    if (rightAnswers < 9) {
        //  show score in the score display div
        finalScore.html("<h2>" + "You have " + rightAnswers + " right answer(s)" + "<br>" + "and " + wrongAnswers + " wrong answer(s)." + "<br>" + "All answers must be correct to level up." + "</h2>");
        finalScore.html("<h2>" + "You have " + rightAnswers + " right answer(s)" + "<br>" + "and " + wrongAnswers + " wrong answer(s)." + "<br>" + "All answers must be correct to continue." + "</h2>");
        var restartOneBtn = $("<button class='btn btn-success' id='restartOne'>TRY AGAIN</button>");
        finalScore.after(restartOneBtn);
        //  functionality for restart button
        $("#restartOne").on("click", function() {
            location.reload();
        })        
    } else if (rightAnswers === 9) {
        finalScore.html("<h2>" + "You got " + rightAnswers + " right answer(s)" + "<br>" + "and " + wrongAnswers + " wrong answer(s)." + "<br>" + percentage + "%. NICE." + "</h2>");
        var restartBtn = $("<button class='btn btn-success' id='restart'>GIVE IT ANOTHER GO</button>");
        finalScore.after(restartBtn);
        //  functionality for restart button
        $("#restart").on("click", function() {
            location.reload();
        });
    }
};

//----------------------------------------------------------------------------------
//  MAIN PROGRAM
//----------------------------------------------------------------------------------

//  game timer - also controls if statements for time constraints
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
            alert("FIRST ROUND COMPLETE!");
            levelOneValidate();
            levelOneScore();
        }
        if (gameTimer.time === 20) {
            gameTimer.stop();
            alert("SECOND ROUND COMPLETE!");
            levelTwoValidate();
            levelTwoScore();
        }
        if (gameTimer.time === 30) {
            gameTimer.stop();
            alert("FINAL ROUND COMPLETE!");
            levelThreeValidate();
            levelThreeScore();
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
//  hide game container until start button is clicked
$("#gameContain").hide(0);
//  start game on start button click
$("#start").on("click", function() {
    $("#jumboContain").slideUp(500);
    runGame();
});