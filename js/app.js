//create required HTML elements for gameplay in HTML body
function setHtmlElements(){
  var container = document.createElement("div");
  container.setAttribute("id", "container");
  document.body.appendChild(container);

  var countdownSpan = document.createElement("span");
  countdownSpan.setAttribute("class", "timer");
  countdownSpan.setAttribute("id", "countdown");
  document.getElementById("container").appendChild(countdownSpan)

  var areaDiv = document.createElement("div");
  areaDiv.setAttribute("id", "area");
  document.getElementById("container").appendChild(areaDiv);

  var questionDiv = document.createElement("div");
  questionDiv.setAttribute("id", "question");
  document.getElementById("container").appendChild(questionDiv);

  var answersDiv = document.createElement("div");
  answersDiv.setAttribute("id", "answers");
  document.getElementById("container").appendChild(answersDiv);
}

//validate player has a name entered and if not send back
function nameValidation(playerName){
  console.log("Validating player name")
  window.playerName = playerNameElement.value;
  if (window.playerName == "") {
    alert("Wait! Make sure you input your name");
    getElement().innerHTML = "";
    loadSplashScreen();
  }
  else tutorial();
}

//displays splashscreen and prompts player for name
function loadSplashScreen(){
  console.log("Splash screen is running");
  setHtmlElements();
  createLogo("images/colourgamelogo.png");
  createHeading1("The Stroop Effect");
  createParagraph("This game is designed to test your response inhibition using colours.")
  createParagraph("It is based on a psychological study conducted in 1935 by John Ridley Stroop. Stroop's study involved a colour-word task to demonstrate interference between reading an objects name and naming an object - later known as the 'Stroop Effect'.")
  createParagraph("To start, enter your name below", );
  window.playerNameElement = createTextInput("auto");
  createButton("Continue");
  btn.onclick = nameValidation;
}

//provides the player instructions of how to play the game
function tutorial(){
  //clear the entire HTML body
  getElement().innerHTML = "";
  console.log("Tutorial is running");
  console.log("Player's name is " + playerName);
  createHeading1("Are you ready " + playerName + "?");
  createParagraph("The game is simple. An instruction will be displayed at the top of the page.");
  createImage("images/question1.jpg", "tutorialImage", "Example word colour question");
  createParagraph("Look at the image and select the most accurate answer from the options at the bottom of the page.")
  createImage("images/question2.jpg", "tutorialImage", "Example word meaning question");
  createParagraph("There are different types of questions, so read carefully!");
  createButton("Let's Start");
  btn.onclick = gamePlay;
}

window.onload = loadSplashScreen;
