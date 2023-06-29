// Array Of Words 
const words = [
  "Hello",
  "Town",
  "Code",
  "Javascript",
  "Programming",
  "Country",
  'Testing',
  "Youtube",
  "Linkedin",
  "Twitter",
  "Github",
  "Internet",
  "Python",
  "Scala",
  "Destructuring",
  "Paradigm",
  "Styling",
  "Cascade",
  "Documentation",
  "Coding",
  "Funny",
  "Working",
  "Dependencies",
  "Task",
  "Runner",
  "Roles",
  "Test",
  "Rust",
  "Playing",
];

// Setting Levels
const lvls = {
  "Easy": 5,
  "Normal": 4,
  "Hard": 2,
}

// Defailt Level
let defaultLEvelName = "Normal";// Change Level From Here
let defaultLEvelSeconds = lvls[defaultLEvelName];

// Catch Selectors
let startButton = document.querySelector(".start");
let lvlNameSpan = document.querySelector(".message .lvl");
let secondsSpan = document.querySelector(".message .secouds");
let theWord = document.querySelector(".the-word");
let upcomingWords = document.querySelector(".upcoming-words");
let input = document.querySelector(".input");
let timeLeftSpan = document.querySelector(".time span");
let scoreGot = document.querySelector(".score .got");
let scoreTotal = document.querySelector(".score .total");
let finishMessage = document.querySelector(".finish");

//Settinglevel Name + Seconds + Score
lvlNameSpan.innerHTML = defaultLEvelName;
secondsSpan.innerHTML = defaultLEvelSeconds;
timeLeftSpan.innerHTML = defaultLEvelSeconds;
scoreTotal.innerHTML = words.length;

// Disable Padte Event
input.onpaste = function () {
  return false
}

// Start Game
startButton.onclick = function () {
  this.remove();
  input.focus();
  // Generte Word Function 
  genWords();
}
function genWords() {
  let randomWord = words[Math.floor(Math.random() * words.length)];
  // Get  Word Index
  let wordIndex = words.indexOf(randomWord);
  // Remove WordFrom Array
  words.splice(wordIndex, 1);
  // Show The Random Word
  theWord.innerHTML = randomWord;
  // Empty Upcoming Words
  upcomingWords.innerHTML = "";
  // Gnerate Words
  for (let i = 0; i < words.length; i++) {
    // Create DivElement  
    let div = document.createElement("div");
    let txt = document.createTextNode(words[i]);
    div.appendChild(txt);
    upcomingWords.appendChild(div);
  }
  // Call Start Play Function
  startPlay();
}

function startPlay() {
  timeLeftSpan.innerHTML = defaultLEvelSeconds;
  let start = setInterval(() => {
    timeLeftSpan.innerHTML--;
    if (timeLeftSpan.innerHTML === "0") {
      // Stop Time
      clearInterval(start)
      // Compare  Words
      if (theWord.innerHTML.toLowerCase() === input.value.toLowerCase()) {
        // Empty Input Field
        input.value = '';
        // Increase SCore
        scoreGot.innerHTML++;
        if (words.length > 0) {
          // Call Generate Word Function
          genWords();
        } else {
          let span = document.createElement('span');
          span.className = 'Good';
          let spanText = document.createTextNode("Congratz");
          span.appendChild(spanText);
          finishMessage.appendChild(span);
          // Remopve Upcoming Box
          upcomingWords.remove();
        }
      } else {
        let span= document.createElement("span");
        span.className = 'bad';
        let spanText = document.createTextNode("Game Over");
        span.appendChild(spanText);
        finishMessage.appendChild(span);
      }
    }
  }, 1000);
}