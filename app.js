$(document).ready(function(){
    quiz.reset();
    quiz.render();
    quiz.init();
});

var Questions = [

    {   
        text: 'question#1',
        choices: ["a","b","c","d"],
        answer: 0
    },
    
    { 
        text: 'question#2',
        choices: ["a","b","c","d"],
        answer: 3
    },
    
    {
        text: 'question#3',
        choices: ["a","b","c","d"],
        answer: 2
    }
    
    {   
        text: 'question#4',
        choices: ["a","b","c","d"]
        answer: 0

    }

    {
        text: 'question#5',
        choices: ["a","b","c","d","e"]
    }

]

var quiz = {
    score:0,
    currentQuestion = 0,
    question= QUESTIONS,


    reset: function(){
          this.score = 0;
          this.currentQuestion = 0;
          $('.welcome-page').show();
          $('.content').hide();
          $('.result').hide();
    },

    init: function(){
          $('.answer-submit').click(this._onSubmitQuestion.bind(this));
          $('.next-question').click(this._onNextQuestion.bind(this));
          $('.start-over').click(this.reset.bind(this));
    },
    
    render: function(){
            this._renderQuestion();
            this._renderChoices();
            this._renderScore();
            this._renderQuestionCount();
    },

    _renderQuestion: function(){
            var question = this.questions[this.currentQuestion];
            $('.question-text').text(question.text);
    },
    
    _renderChoices: function(){
            var question = this.questions[this.currentQuestion];
            $('.choices-template').text('');
            question.choices.forEach(function(choice, index){
            $('.choices-template').append('<li><input type="radio" name="user-guess" value=' + index + ' required>' + choice + '</li>'); 
            });
    },
    _renderScore: function(){
            var score = this.score;
            var total = this.questions.length;
            $('.score').text(score + '/' + total);

    },

    _renderQuestionCount: function(){
            var total = this.questions.length;
            var current = this.currentQuestion + 1;
            $('.question-count').text(current + ' of ' + total);
    },

    _onSubmitQuestion: function(event){
            event.preventDefault();
            var input = $('input[name="user-guess"]:checked').val();
            var isCorrect = this._checkAnswer(input);
            if (isCorrect) {
            this.score++;
    }
            this._renderResult(isCorrect);
            this._toggleContent(false);
            this._toggleResults(true);
    },

    _renderResult: function(isCorrect){
            var output = isCorrect ? 'You got it right!' : 'You got it wrong!';
            $('.result').text(output);
    },

    _checkAnswer: function(answer){
            var question = this.questions[this.currentQuestion];
            var correctAnswer = question.answer;
            return answer == correctAnswer; 
    },

    _onNextQuestion: function() {
            this.currentQuestion++;
            this._toggleResults(false);
            this.render();
            this._toggleContent(true);
     },

    _toggleContent: function(shouldShow) {
            if (shouldShow) {
            $('.content').show();
            } else {
            $('.content').hide();
     }
     },

    _toggleResults: function(shouldShow) {
            if (shouldShow) {
            $('.results').show();
     }       
            else {
            $('.results').hide();
       }
  },
};

            $(".start-game").click(function(){
            $('.welcome-page').hide();
            $('.content').show();
});