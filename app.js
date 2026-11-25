// ADD YOUR ARRAY OF WORDS HERE
var words = ["SNOWMAN", "CHRISTMAS", "HOTCHOCOLATE", "SNOWING", "CANDYCANES", "COOKIES", "PRESENTS", "RUDOLPH", "GINGERBREAD", "NORTHPOLE"];
var snowmanParts = [".hat", ".face", ".scarf", ".hands", ".body-top", ".body-middle", ".body-bottom"];
var randomWord = getRandomWord(words);
var keyboardContainer = document.querySelector('#keyboard-container');
let replace = document.querySelector("#snowman-container");
keyboardContainer.addEventListener("click", handleKeyboardClick);

function checkForWinner(){
    let hiddenLetterElements = document.querySelectorAll(".hidden"); 
    if (hiddenLetterElements.length == 0){
      keyboardContainer.innerHTML = "<h2>You Win!</h2>";
    };
  };





    function checkForLoser(){
    let replace = document.querySelector("#snowman-container");
    if(snowmanParts.length == 0){
      replace.innerHTML = "<h2>You lost, game over!</h2>";
      keyboardContainer.innerHTML = "<h2>The word was: " + randomWord + "</h2>";
    };
  };






generateHiddenWord(randomWord);

function handleKeyboardClick(event){
  let clickedElement = event.target;

  if (!clickedElement.classList.contains("letter") || clickedElement.classList.contains("selected")) return;

  clickedElement.classList.add("selected");
  
  let clickedLetter = clickedElement.textContent;
  let hasMatch = checkForMatch(clickedLetter);


  if (!hasMatch) {
    // What function do we call??
    removeSnowmanPart()
    checkForLoser()
  } else {
    // What function do we call??
    checkForWinner()
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


// CHECK FOR WINNER FUNCTION HERE
