var buttonEl = document.querySelector("#start");
console.log(buttonEl);

buttonEl.addEventListener("click", function () {

    // Start Timer 

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
    

    }

    }
    } 