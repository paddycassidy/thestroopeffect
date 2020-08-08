//variable that counts the number of questions answered by the player
var count = 0;

//array that stores the answers selected by the player
var finalAnswers = [];

//array that stores the correct answers to the questions
var questionAnswer = []

//variable that determines the number of points allocated for one correct answer
var scorepoints = 25;

//variable used to represent the players total score
var totalScore = 0;

//varibale used to set the value of the timer feature
var upgradeTime = 59;

//sets the seconds variable to the value of the timer
var seconds = upgradeTime;

//creates a colour word question to answer
function colourQuestion(currentColour, option, value, questionType){
  console.log("Creating colour question");
  console.log("Current colour is " + currentColour);

  //loop through each word in the colourList and create three buttons
  var answer = [
    currentColour
  ]

  while(answer.length < 3) {
    generateRandomOptions(currentColour, answer[1], answer)
  }

  var shuffled = shuffle(answer)

  if(questionType) {
    var currentWordColour = questionList[Math.floor(Math.random() * questionList.length)];
    //current colour should be current word
    createHeading1(currentColour,"question", currentWordColour)
  }
    else {
      var currentWord = questionList[Math.floor(Math.random() * questionList.length)];
      createHeading1(currentWord,"question", currentColour)
    }

    for (colourIndex = 0; colourIndex < 3; colourIndex++) {
      var currentColour = answer[colourIndex]
      console.log("Current colour is: " + currentColour);
      createButton(currentColour, "answer");
    }
}

//shuffle order of the array that is passed
function shuffle(arra1) {
  console.log("Shuffle running...");
  var ctr = arra1.length;
  var temp;
  var index;

  //While there are elements in the array
  while (ctr > 0) {
//Pick a random index
      index = Math.floor(Math.random() * ctr);
//Decrease ctr by 1
      ctr--;
//And swap the last element with it
      temp = arra1[ctr];
      arra1[ctr] = arra1[index];
      arra1[index] = temp;
  }
  return arra1;
}

//check answer is in possible answer list
function generateRandomOptions (answer, option, answerList) {
  console.log("Generating random answers...");
  var text = questionList[Math.floor(Math.random() * questionList.length)];

  if(text == answer || text == option){
    generateRandomOptions(answer, option, answerList)
  }
  else {
    answerList.push(text)
  }
}

//displays the first question type on the page. This is the colour question.
function partOne(){
  var currentColour = colourList[Math.floor(Math.random() * colourList.length)];
  colourList = colourList.filter((item) => item !== currentColour);

  questionAnswer[count] = currentColour;
  console.log("current colour is: " + currentColour);

  createHeading1("Select the colour of the word (not the meaning)");
  window.colourQuestion(currentColour, "option", currentColour);
  }

//displays the second question type on the page. This is the meaning question.
function partTwo(){
  var currentWord = wordList[Math.floor(Math.random() * wordList.length)];
  questionAnswer[count] = currentWord;
  wordList = wordList.filter((item) => item !== currentWord);

  var currentColour = questionList[Math.floor(Math.random() * questionList.length)];
  createHeading1("Select the meaning of the word (not the colour)");
  window.colourQuestion(currentWord, "option", currentColour, 'partTwo');
  }

// clears the page and starts the gameplay
function gamePlay(){
  console.log("Gameplay is running");
  //clear the entire HTML body
  getElement().innerHTML = "";
  console.log("HTML body content cleared");

  countdownTimer = setInterval(timer, 1000);
  partOne();
}

//resets the game elements
function clearGame() {
  alert("Game Over " + playerName + "! Your score is: " + totalScore + ". Better luck next time!");
      window.location.reload();
      count = 0;
      finalAnswers = [];
      questionAnswer = []
      scorepoints = 25;
      totalScore = 0;
      colourList = ["RED", "BLUE", "GREEN", "YELLOW", "ORANGE", "PINK", "PURPLE", "GREY", "SALMON", "HOTPINK", "GOLD", "KHAKI", "MAGENTA", "LAVENDER", "LIME", "DARKGREEN", "TURQUOISE", "NAVY", "MAROON", "TAN", "IVORY", "BLACK"];
      wordList = ["RED", "BLUE", "GREEN", "YELLOW", "ORANGE", "PINK", "PURPLE", "GREY", "SALMON", "HOTPINK", "GOLD", "KHAKI", "MAGENTA", "LAVENDER", "LIME", "DARKGREEN", "TURQUOISE", "NAVY", "MAROON", "TAN", "IVORY", "BLACK"];
      upgradeTime = 59;
}

//when the player selects the answer by 'clicking', determines the answers and change the qustion type or end the game
function click(e) {
  if (e.target.id == "answer") {
    const answer =  e.target.innerText.toUpperCase();
    finalAnswers[count] = answer;
    console.log("The player answered: ", finalAnswers, "the answer is: ", questionAnswer, count);
    if(finalAnswers[count].toUpperCase() == questionAnswer[count].toUpperCase()) {
      totalScore =  (totalScore + scorepoints)
    }
    //after 20 questions end the game
    if(count == 20) {
      clearGame();
      return;
    }

    ++count;
    //after 12 questions, change the question type
    if(count > 12) {
      getElement().innerHTML = "";
      partTwo();
      return;
    }

    getElement().innerHTML = "";
    partOne();
  }
}

//countdown timer
function timer() {
  var days = Math.floor(seconds/24/60/60);
  var hoursLeft = Math.floor((seconds) - (days*86400));
  var hours = Math.floor(hoursLeft/3600);
  var minutesLeft = Math.floor((hoursLeft) - (hours*3600));
  var minutes = Math.floor(minutesLeft/60);
  var remainingSeconds = seconds % 60;

  function pad(n) {
    return (n < 10 ? "0" + n : n);
  }

  //display the timer on the page
  document.getElementById("countdown").innerHTML = pad(remainingSeconds);
  if (seconds == 0) {
    clearInterval(countdownTimer);
    alert("Time is up!");
    document.getElementById("countdown").innerHTML = "Time is up!";
    clearGame();
  }
  else {
    seconds--;
  }
}

//adds the event listener 'click'
document.addEventListener("click", click, false)
