(function() 
 {
  var allQuestions = [{
    question: "Who has made the most 3-pointers of all time?",
    options: ["Stephen Curry", "James Harden", "Ray Allen", "Vince Carter"],
    answer: 2
  }, {
    question: "Who has won the most NBA championships?",
    options: ["Michael Jordan", "Karim Abdul-Jabbar", "Sam Jones", "Bill Russel"],
    answer: 3
  }, {
    question: "Who has scored the most points in a single NBA game?",
    options: ["Devin Booker", "Wilt Chamberlain", "Karim Abdul-Jabbar","Kobe Bryant"],
    answer: 1
  },{
    question: "Who has set the record for the best score in the NBA 3-Point contest?",
    options: ["Devin Booker", "Stephen Curry", "Joe Harris", "James Harden"],
    answer: 0
  }, {
    question: "Who scored the most points in the 18-19 season?",
    options: ["LeBron James", "James Harden", "Rusell Westbrook", "P.J Tucker"],
    answer: 1
  },{
    question: "Who is the youngest player to scored the most points in a single game?",
    options: ["Devin Booker", "Joe Johnson", "Brandon Jennings", "Andrew Bynum"],
    answer: 0
  },{
    question: "Who was the team that drafted Kobe Bryant in 1996?",
    options: ["Charlotte Hornets", "Cleveland Cavaliers", "Los Angeles Lakers", "Miami Heat"],
    answer: 0
  },{
    question: "Who won the first ever nba dunk contest?",
    options: ["Methane", "Nitrous oxide", "Carbon Dioxide", " Larry Nance"],
    answer: 3
  },{
    question: "The hardest substance availabe on earth is",
    options: ["Gold", "Iron", "Diamond", "Platinum"],
    answer: 2
  },{
    question: "Who is the oldest player that scored the most points in a single game?",
    options: ["Kobe Bryant", "Michael Jordan", "Wilt Chamberlain", "David Thompson"],
    answer: 0
    }];
  
  var quesCounter = 0;
  var selectOptions = [];
  var quizSpace = $('#quiz');
    
  nextQuestion();
    
  $('#next').click(function () 
    {
        chooseOption();
        if (isNaN(selectOptions[quesCounter])) 
        {
            alert('Please select an option !');
        } 
        else 
        {
          quesCounter++;
          nextQuestion();
        }
    });
  
  $('#prev').click(function () 
    {
        chooseOption();
        quesCounter--;
        nextQuestion();
    });
  
  function createElement(index) 
    {
        var element = $('<div>',{id: 'question'});
        var header = $('<h2>Question No. ' + (index + 1) + ' :</h2>');
        element.append(header);

        var question = $('<p>').append(allQuestions[index].question);
        element.append(question);

        var radio = radioButtons(index);
        element.append(radio);

        return element;
    }
  
  function radioButtons(index) 
    {
        var radioItems = $('<ul>');
        var item;
        var input = '';
        for (var i = 0; i < allQuestions[index].options.length; i++) {
          item = $('<li>');
          input = '<input type="radio" name="answer" value=' + i + ' />';
          input += allQuestions[index].options[i];
          item.append(input);
          radioItems.append(item);
        }
        return radioItems;
  }
  
  function chooseOption() 
    {
        selectOptions[quesCounter] = +$('input[name="answer"]:checked').val();
    }
   
  function nextQuestion() 
    {
        quizSpace.fadeOut(function() 
            {
              $('#question').remove();
              if(quesCounter < allQuestions.length)
                {
                    var nextQuestion = createElement(quesCounter);
                    quizSpace.append(nextQuestion).fadeIn();
                    if (!(isNaN(selectOptions[quesCounter]))) 
                    {
                      $('input[value='+selectOptions[quesCounter]+']').prop('checked', true);
                    }
                    if(quesCounter === 1)
                    {
                      $('#prev').show();
                    } 
                    else if(quesCounter === 0)
                    {
                      $('#prev').hide();
                      $('#next').show();
                    }
                }
              else 
                {
                    var scoreRslt = displayResult();
                    quizSpace.append(scoreRslt).fadeIn();
                    $('#next').hide();
                    $('#prev').hide();
                }
        });
    }
  
  function displayResult() 
    {
        var score = $('<p>',{id: 'question'});
        var correct = 0;
        for (var i = 0; i < selectOptions.length; i++) 
        {
          if (selectOptions[i] === allQuestions[i].answer) 
          {
            correct++;
          }
        }
        score.append('You scored ' + correct + ' out of ' +allQuestions.length);
        return score;
  }
})();

