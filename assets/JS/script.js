var buttonEl = document.querySelector("#start");
console.log(buttonEl);

var time = 90

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
        correctAnswer: 'D. All of the above',


    },
];

// Display Questions 

buttonEl.addEventListener("click", function () {

    var question = questions[currentQuestion];
    console.log("in display questions", questions)
    document.getElementById('question').innerHTML = question.name;
    document.getElementById('answer').innerHTML = question.answers[0];
    document.getElementById('answerb').innerHTML = question.answers[1];
    document.getElementById('answerc').innerHTML = question.answers[2];
    document.getElementById('answerd').innerHTML = question.answers[3];
  


}) 

    function secondQuestion() {

    var question = questions[currentQuestion];
    console.log("in display questions", questions)
    document.getElementById('question').innerHTML = question.name;
    document.getElementById('answer').innerHTML = question.answers[0];
    document.getElementById('answerb').innerHTML = question.answers[1];
    document.getElementById('answerc').innerHTML = question.answers[2];
    document.getElementById('answerd').innerHTML = question.answers[3];
  


}

var answerbutton = document.querySelector("#answer"); 
var answerbuttonb = document.querySelector("#answerb");
var answerbuttonc = document.querySelector("#answerc");
var answerbuttond = document.querySelector("answerd");


answerbutton.addEventListener("click", function () {
    var question = questions[currentQuestion];
if (answerbutton===question.correctAnswer){ 
    alert("Correct!") 
    secondQuestion()
    currentQuestion += 1;
    
    
}

else {







    alert("incorrect!")
console.log(answerbutton)

    currentQuestion += 1;
    secondQuestion()



}


})