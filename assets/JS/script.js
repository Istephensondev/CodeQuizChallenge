var buttonEl = document.querySelector("#start");
console.log(buttonEl);

buttonEl.addEventListener("click", function () {

    // Start Timer and Quiz

    var time = 90;

    setInterval(function () {
        time = time - 1;
        console.log(time);
        document.getElementById('timer').innerText = time;
    }, 1000);
});

// Create Questions

var currentQuestion = 0;
var questions = [
    {
        name: 'The Condition in an if/ else statement is enclosed with ___________.',
        answers: [
            'A. quotes',
            'B. curly brackets',
            'C. parenthesis',
            'D. square brackets',
        ],
        correctAnswer: 'C. parenthesis',
    },
    {
        // Second Question

        name: 'Commonly used data types do NOT include:',
        answers: [
            'A. strings',
            'B. booleans',
            'C. alerts',
            'D. numbers',
        ],
        correctAnswer: 'B. booleans',

    },
    {
        // Third Question
        
        name: ' String variabes must be enclosed within ___________ when being assigned to variables.',
        answers: [
            'A. commas',
            'B. curly brackets',
            'C. quotes',
            'D. parenthesis',
        ],
        correctAnswer: 'B. curly brackets',

    },
    {
        // Fourth Questions 

        name: 'Arrays in JavaScript can be used to store ___________.',
        answers: [
            'A. numbers and strings',
            'B. other arrays',
            'C. booleans',
            'D. all of the above'
        ],
        correctAnswer: 'D. All of the above'
    

    },
  ];
    
    document.getElementById('start').addEventListener ('click', function()
      { function startQuestion() {
         var question = questions[currentQuestion];
       
          document.getElementById('question').innerHTML = question.name;
          for (var i=0; i < questions[currentQuestion].answers.length; i+
           var button = document.createElement('button')
           button.innerHTML = questions[currentQuestion].answers[i];

        // Add Button to answer div


    
    
    
    // Create For loop so that clock subtracts when incorrect 