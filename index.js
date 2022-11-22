var chalk = require('chalk');
var readlineSync = require("readline-sync");

var score = 0;
var welcomeUser=chalk.blue;
var correctAnswer=chalk.green;
var incorrectAnswer=chalk.red;
var scoreCard={
  noAnswer:chalk.red,
  oneAnswer:chalk.yellow,
  twoAnswers:chalk.blue,
  threeAnswers:chalk.cyan,
  fourAnswers:chalk.magenta,
  allAnswers:chalk.green
}
var questions = [
  {
    question: "What's my recent favourite marvel movie? ",
    answer: "Spiderman no way home"
  },
  {
    question: "What's the last meal I would like to have? ",
    answer: "Biriyani"
  },
  {
    question: "Am I a party person? ",
    answer: "yes"
  },
  {
    question: "Which is my least watched genre of movies/series? ",
    answer: "romance"
  },
  {
    question: "Do I love to travel? ",
    answer: "yes"
  }
]
var torchbearers=[{
  name:"Rajashree",
  score:"5"
}]

function answerCheck(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(correctAnswer("Hurray"));
    score++;
  }
  else {
    console.log(incorrectAnswer("Nah"));
  }
}

function Quiz() {
  var userName = readlineSync.question("What's your name? ");
  console.log(welcomeUser(`Welcome ${userName}, do you know Rajashree?`));
  for (let i = 0; i < questions.length; i++) {
    answerCheck(questions[i].question, questions[i].answer);
  }
}

function finalScore(){
  switch(score){
    case 0:
      console.log(scoreCard.noAnswer(`Damnn! You don't know me at all! You score ${score} out of 5`));
      break; 
    case 1:
      console.log(scoreCard.oneAnswer(`You need to know her well! You score ${score} out of 5`));
      break; 
    case 2:
      console.log(scoreCard.twoAnswers(`Long way to go my friend! You score ${score} out of 5`));
      break; 
    case 3:
      console.log(scoreCard.threeAnswers(`Ahh! More efforts needed! You score ${score} out of 5`));
      break; 
    case 4:
      console.log(scoreCard.fourAnswers(`You almost got there! You score ${score} out of 5`));
      break; 
    case 5:
      console.log(scoreCard.allAnswers(`Wowzaaaa! You know her well! You score ${score} out of 5`));
      break;    
  }

  console.log("Feel free to send me your score so that I'd update my WhoKnowMeWell leaderboard ;)!")

  torchbearers.map(score => console.log(score.name, ":", score.score));
  
}

Quiz();
finalScore();