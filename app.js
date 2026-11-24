// ADD YOUR ARRAY OF WORDS HERE
var words = ["snowman", "christmas", "hot chocolate", "snowing", "candy canes", "cookies", "presents", "rudolph", "gingerbread", "north pole"];
var snowmanParts = [".hat", ".face", ".scarf", ".hands", ".body-top", ".body-middle", ".body-bottom"];
var randomWord = getRandomWord(words);
var keyboardContainer = document.querySelector('#keyboard-container');
keyboardContainer.addEventListener("click", handleKeyboardClick);

function checkForWinner(){
    var hiddenLetterElements = document.querySelectorAll(".hidden"); 
    if (hiddenLetterElements.length === 0){
      keyboardContainer.innerHTML = "<h2>You Win!</h2>";
    }
  }

    function checkForLoser(){
    if(snowmanParts.length === 0){
      var replace = document.querySelector("#snowman-container");
      replace.innerHTML = "<h2>You lost, game over!</h2>";
      keyboardContainer.innerHTML = "<h2>The word was:" + randomWord.value + "</h2>";
    }
  }

generateHiddenWord(randomWord);

function handleKeyboardClick(event){
  var clickedElement = event.target;

  if (!clickedElement.classList.contains("letter") || clickedElement.classList.contains("selected")) return;

  clickedElement.classList.add("selected");
  
  var clickedLetter = clickedElement.textContent;
  var hasMatch = checkForMatch(clickedLetter);


  if (!hasMatch) {
    // What function do we call?? 
    checkForLoser();
  } else {
    // What function do we call??
    checkForWinner();
  }
}


function checkForMatch(clickedLetter) {
 var hiddenLetterElements = document.querySelectorAll(".hidden");
 var hasMatch = false;
 
 hiddenLetterElements.forEach(hiddenLetterElement => {
  var hiddenLetter = hiddenLetterElement.textContent;
  // console.log(hiddenLetter, clickedLetter)
    if (hiddenLetter === clickedLetter) {
      hiddenLetterElement.classList.remove("hidden");
      hasMatch = true;
    }
  
 })
 return hasMatch;
}

function removeSnowmanPart() {
  var snowmanPart = snowmanParts.shift();
  var partsToRemove = document.querySelectorAll(snowmanPart);
  
  partsToRemove.forEach(partToRemove =>{
    partToRemove.remove();

  })
}


function generateHiddenWord(word) {
  var letters = word.split("");
  var emptyLetterContainer = document.querySelector("#empty-letter-container");

  var lettersHTML = "";
  for (var letter of letters) {
    var letterHTML = `<p class="letter-container"><span class="letter hidden">${letter}</span></p>`;
    lettersHTML += letterHTML;
  }

  emptyLetterContainer.innerHTML = lettersHTML;
}

function getRandomWord(words) {
  var randomIndex = Math.floor(Math.random() * words.length);
  var randomWord = words[randomIndex];
  return randomWord;
}

// CHECK FOR LOSER FUNCTION HERE
console.log(handleKeyboardClick());

// CHECK FOR WINNER FUNCTION HERE
console.log(checkForWinner());