var player = prompt("What is your name?");
console.log ("Hello " + player+"!");
var ask = confirm("Are you ready to play?");
alert("Great. let's begin!");
var guessWords = ["caroling", "christmas", "angel", "gift"];
var selectedWords = guessWords[Math.floor(Math.random()*guessWords.length)];
var incorrectGuessCount = 0;
var replaceGuess = [];
for (var i=0; i<selectedWords.length;i++){
  replaceGuess[i]="_";
}
var instruction = "Choose letters to reveal the word! -> ";
for (var i=0; i<selectedWords.length;i++){
  instruction = instruction + replaceGuess[i] + " ";

}


console.log(instruction);






var words = ["_", "_", "_","_"];

$(input).click(function(){
  input.keyup("[_]");
  display("keyup");
});


var answer = [];

// i need help on how to implement this code to the variable words?

$(guessWords).ready(function(){

  for(i=0; i<words.length;i++);{
   var guessBtn = $("<guess-Btn>");
   guessBtn.addClass("letter-button letter letter-color");
   guessBtn.attr("letter-data", words[i]);
   guessBtn.text("letter", words[i]);
   $("guess-Btn").append(guessBtn);
   $("#guess-display").on("click", function(){
    $("guess-diplay").display(words[i]);
   });

   
};
});

 

    //if (remaining<4){
      //  word+=
    //}

   // while (remaining > 4) {
    //words += guessWords[i] + "<br/>";
    //document.write(["_"]);
    //guessWords++;
    //}

