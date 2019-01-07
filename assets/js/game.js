var player = prompt("What is your name?");
console.log ("Hello " + player+"!");
var ask = confirm("Are you ready to play?");
alert("Great. Let's begin!");
var guessWords = ["caroling", "christmas", "angel", "gift"];
var selectedWords = guessWords[Math.floor(Math.random()*guessWords.length)];
var incorrectGuessCount = 0;
var replaceGuess = [];
var guessDisplay = document.getElementById("guess-display");
for (var i=0; i<selectedWords.length;i++){
  replaceGuess[i]="_";
}
var instruction = "Choose letters to reveal the word! -> ";
for (var i=0; i<replaceGuess.length;i++){
  instruction = instruction + replaceGuess[i] + " ";
}
guessDisplay.textContent = instruction;  
console.log(instruction);


function checkLetter(selectedLetter){
  if (selectedWords.indexOf(selectedLetter) == -1){
    instruction = "Wrong! Choose again! ";
    for (var i=0; i<replaceGuess.length; i++){
      instruction = instruction + replaceGuess[i] + " ";
    }
    incorrectGuessCount++;
    if (checkForTheLoss()){
      instruction = "Sorry! You lose, try again next time";
      var playAgain = confirm("You Lose!!! Do you want to play again?");
      if (playAgain){
      restartGame();
      }
    }
  }  else {
    for (var i=0; i<selectedWords.length;i++){
      if (selectedWords[i]==selectedLetter){
        replaceGuess[i] = selectedLetter;
      }
    }
    instruction = "Good job! ";
    for (var i=0; i<replaceGuess.length; i++){
      instruction += replaceGuess[i] + " ";
    }
    
    if (checkForTheWin()){
      instruction = "You Win!";
      var playAgain = confirm("You Win!!! Do you want to play again?");
      if (playAgain){
        restartGame();
      }
    }
    
  } 
  guessDisplay.textContent = instruction;
}

document.onkeyup = function(event) {
  checkLetter(event.key);
};

function checkForTheWin(){
  for (var i=0; i<selectedWords.length;i++){
    if (selectedWords[i]!=replaceGuess[i]){
          return false;
    }
  }
    return true;
}

function checkForTheLoss(){
  if (incorrectGuessCount==3){
    return true;
  }
  else {
    return false;
  }
}

function restartGame(){
  incorrectGuessCount = 0;
  selectedWords = guessWords[Math.floor(Math.random()*guessWords.length)];
  replaceGuess = [];
  for (var i=0; i<selectedWords.length;i++){
    replaceGuess[i]="_";
  }
  instruction = "Choose letters to reveal the word! -> ";
  for (var i=0; i<replaceGuess.length;i++){
    instruction = instruction + replaceGuess[i] + " ";
  }
  guessDisplay.textContent = instruction;  
  console.log(instruction);

}









// var words = ["_", "_", "_","_"];

// $(input).click(function(){
//   input.keyup("[_]");
//   display("keyup");
// });


// var answer = [];

// // i need help on how to implement this code to the variable words?

// $(guessWords).ready(function(){

//   for(i=0; i<words.length;i++);{
//    var guessBtn = $("<guess-Btn>");
//    guessBtn.addClass("letter-button letter letter-color");
//    guessBtn.attr("letter-data", words[i]);
//    guessBtn.text("letter", words[i]);
//    $("guess-Btn").append(guessBtn);
//    $("#guess-display").on("click", function(){
//     $("guess-diplay").display(words[i]);
//    });

   
// };
// });

 

//     //if (remaining<4){
//       //  word+=
//     //}

//    // while (remaining > 4) {
//     //words += guessWords[i] + "<br/>";
//     //document.write(["_"]);
//     //guessWords++;
//     //}

