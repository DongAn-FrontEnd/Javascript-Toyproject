const calmerPhrases = [
  "Anxiety does not own you.",
  "Focus on slowing your breathing.",
  "Breathe in, and breathe out.",
  "Continue to breathe purposefully.",
  "Try to focus on something that brings you pleasure.",
  "Sip on something warm.",
  "Call a loved one.",
  "Remember that you are never alone.",
  "Even if it sometimes feels like you are.",
  "Breathe in, and breathe out.",
  "Don't worry about the past, present, or future.",
  "Just breathe In.",
  "Breathe in, and breathe out.",
  "You are more than your anxiety.",
  "This feeling will end. I promise.",
  "You are going to be okay.",
  "Breathe in, and breathe out.",
];
const calmerText = document.querySelector("#calmer-text");
const fasterButton = document.querySelector("#fasterButton");
const slowerButton = document.querySelector("#slowerButton");
const circle = document.querySelector("#circle");
const durationText = document.querySelector("#durationText");
let duration = 7;

function changePhrase(i) {
  if (calmerPhrases.length > i) {
    setTimeout(function () {
      calmerText.innerHTML = calmerPhrases[i];
      changePhrase(++i);
    }, 7000);
  } else if (calmerPhrases.length == i) {
    changePhrase(0);
  }
}

function playSlower() {
  duration++;
  if (duration < 14) {
    circle.style.animationDuration = `${duration}s`;
  } else {
    duration = 14;
    circle.style.animationDuration = `14s`;
  }
  durationText.innerHTML = `Breahthing duration : ${duration} sec`;
}

function playFaster() {
  duration--;
  if (duration > 3) {
    circle.style.animationDuration = `${duration}s`;
    durationText.innerHTML = `Breahthing duration : ${duration} sec`;
  } else {
    duration = 3;
    circle.style.animationDuration = `3s`;
    durationText.innerHTML = `Slower breathing will help you recover.`;
  }
}

changePhrase(0);
fasterButton.addEventListener("click", playFaster);
slowerButton.addEventListener("click", playSlower);