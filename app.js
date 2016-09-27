$(document).ready(function() {

  var quiz = {
    name: "Football",
    questions: [
      {
        question: "Who won SuperBowl 50?",
        answers: ["Colts", "Raiders", "Broncos", "Jaguars"],
        correct: 2
      },
      {
        question: "Who lost SuperBowl 50?",
        answers: ["Colts", "Raiders", "Broncos", "Panthers"],
        correct: 3
      }      
    ],
    showQuestion: function(whichQuestion) {
      console.log(this.questions[whichQuestion].question);
    }
  }
});