//access body element
var body = document.body;

//variable to store the score
var finalScore = 0;

//for the guess
var guess = "";

var questionNumber = 0;

//questions array
const questionsArr = [
    {
        question: "A loop that never ends is referred to as a(n)_______.",
        answers: {
            1: "Infinite Loop",
            2: "While Loop",
            3: "Recursive Loop",
            4: "For Loop"
        },
        correctAnswer: "Infinite Loop"
    },
    {
        question: "Which of the following represents the AND operator in JavaScript?",
        answers: {
            1: "|",
            2: "|&",
            3: "&&",
            4: "&"
        },
        correctAnswer: "&&"
    },
    {
        question: "Which of the following represents the OR operator in Javascript?",
        answers: {
            1: "|",
            2: "||",
            3: "&&",
            4: "&"
        },
        correctAnswer: "||"
    },
    {
        question: "What is the proper way to compare if two values are 'not equal' in a boolean expression in JavaScript?",
        answers: {
            1: "==",
            2: "x=",
            3: "!=",
            4: "?="
        },
        correctAnswer: "!="
    },
    {
        question: "Which of the following allows you to run a block of code only if a certain condition is true?",
        answers: {
            1: "If Statement",
            2: "For Loop",
            3: "HTML",
            4: "CSS"
        },
        correctAnswer: "If Statement"
    },
    {
        question: "Which of the following statements allows us to exit a loop?",
        answers: {
            1: "Exit",
            2: "Leave",
            3: "Stop",
            4: "Break"
        },
        correctAnswer: "Break"
    },
    {
        question: "What does the <title> tag do?",
        answers: {
            1: "Act as the heading of the page",
            2: "The string that appears in the browser tab",
            3: "The label for the header",
            4: "The name for the repository"
        },
        correctAnswer: "The string that appears in the browser tab"
    },
    {
        question: "Which language allows us to style a website?",
        answers: {
            1: "Python",
            2: "JavaScript",
            3: "CSS",
            4: "HTML"
        },
        correctAnswer: "CSS"
    },
    {
        question: "Which command gets the code to github?",
        answers: {
            1: "git push origin <branch-name>",
            2: "git commit -m 'message",
            3: "git add .",
            4: "git checkout <branch-name>"
        },
        correctAnswer: "git push origin <branch-name>"
    },
    {
        question: "Which popular third-party API is for styling?",
        answers: {
            1: "Bootstrap",
            2: "jQuery",
            3: "Angular",
            4: "React"
        },
        correctAnswer: "Bootstrap"
    },
    {
        question: "What is the typical starting file for a website?",
        answers: {
            1: "home.html",
            2: "index.html",
            3: "start.html",
            4: "script.html"
        },
        correctAnswer: "index.html"
    },
    {
        question: "What is the structure of a for loop?",
        answers: {
            1: "(i < x; i++; i = 0)",
            2: "(i++; i < x; i = 0)",
            3: "(i < x; i = 0; i++)",
            4: "(i = 0; i < x; i++)"
        },
        correctAnswer: "(i = 0; i < x; i++)"
    },
    {
        question: "What characters must be apart of the function declaration?",
        answers: {
            1: "//",
            2: "[]",
            3: "{}",
            4: "()"
        },
        correctAnswer: "()"
    },
    {
        question: "What characters are needed for an array?",
        answers: {
            1: "[]",
            2: "{}",
            3: "()",
            4: "<>"
        },
        correctAnswer: "[]"
    },
    {
        question: "What allows the website to resize based on the screen size?",
        answers: {
            1: "Screen Sizer",
            2: "Media Queries",
            3: "Screen Media",
            4: "Size Function"
        },
        correctAnswer: "Screen Sizer"
    },  
]

//create and add header element
var headerEl = document.createElement('header');
var headerTextLeft = document.createElement('div');
var headerTextRight = document.createElement('div');
headerEl.setAttribute('style', 'display:flex; justify-content:space-between');
headerTextLeft.textContent = "High Scores";
headerTextLeft.setAttribute('style', '');
headerTextRight.textContent = "timer";
headerTextRight.setAttribute('style', '');
body.appendChild(headerEl);
headerEl.appendChild(headerTextLeft);
headerEl.appendChild(headerTextRight);

//create and add main element
var main = document.createElement('main');
main.setAttribute('style', 'padding:50px; display:flex; justify-content:center; flex-wrap:wrap;');
body.appendChild(main);

//create and add welcome h1 element
var welcomeH1El = document.createElement('h1');
welcomeH1El.textContent = "Coding Quiz Challenge";
welcomeH1El.setAttribute('style', 'margin:auto; width:50%; text-align:center;');
main.appendChild(welcomeH1El);

//create and add welcome message
var welcomeP = document.createElement('p');
welcomeP.textContent = "Welcome to my coding quiz! There are 15 questions to test your coding knowledge in 100 seconds. Do your best to get the high score, but be warned that all incorrect answers will take off 10 seconds from the timer!";
welcomeP.setAttribute('style', 'text-align:center; width:85%');
main.appendChild(welcomeP);

//create and add start button
var startButton = document.createElement('BUTTON');
startButton.innerHTML = "Start Quiz";
startButton.setAttribute('style', 'width:20%; padding:15px 0; border-radius:10px; font-size:16px; text-align:center;');
startButton.setAttribute('id', 'startButton');
main.appendChild(startButton);

//question div for all questions
var questionDiv = document.createElement('div');
main.appendChild(questionDiv);

var question = document.createElement('h1');
var answerDiv = document.createElement('div');
var answer1 = document.createElement('BUTTON');
var answer2 = document.createElement('BUTTON');
var answer3 = document.createElement('BUTTON');
var answer4 = document.createElement('BUTTON');

//startButton.onclick = clearMain(), displayQuestion(questionNumber);

function clearMain() {
    main.removeChild(welcomeH1El);
    main.removeChild(welcomeP);
    main.removeChild(startButton);
}

document.getElementById('startButton').addEventListener("click", startQuiz);

function startQuiz() {
    questionNumber = 0;
    finalScore = 0;
    main.removeChild(welcomeH1El);
    main.removeChild(welcomeP);
    main.removeChild(startButton);

    displayQuestion(questionNumber);
}

function displayQuestion(round) {
    //add in question
    console.log(round);

    if (round < 15) {

        question.textContent = questionsArr[round].question;
        answer1.innerHTML = questionsArr[round].answers[1];
        answer2.innerHTML = questionsArr[round].answers[2];
        answer3.innerHTML = questionsArr[round].answers[3];
        answer4.innerHTML = questionsArr[round].answers[4];

        question.setAttribute('style', 'margin:auto; width:100%; text-align:center;');
        answerDiv.setAttribute('style', 'display:flex; flex-wrap:wrap');
        answer1.setAttribute('style', 'width:100%; margin: 10px; padding:15px 0; border-radius:10px; font-size:16px; text-align:center;');
        answer2.setAttribute('style', 'width:100%; margin: 10px; padding:15px 0; border-radius:10px; font-size:16px; text-align:center;');
        answer3.setAttribute('style', 'width:100%; margin: 10px; padding:15px 0; border-radius:10px; font-size:16px; text-align:center;');
        answer4.setAttribute('style', 'width:100%; margin: 10px; padding:15px 0; border-radius:10px; font-size:16px; text-align:center;');
        main.appendChild(question);
        main.appendChild(answerDiv);
        answerDiv.appendChild(answer1);
        answerDiv.appendChild(answer2);
        answerDiv.appendChild(answer3);
        answerDiv.appendChild(answer4);

        answer1.onclick = answer1fun;
        answer2.onclick = answer2fun;
        answer3.onclick = answer3fun;
        answer4.onclick = answer4fun;

    } else {
        gameOver();
    }

    

    function answer1fun () {

        guess = answer1.innerHTML;
        questionNumber++;

        if (guess === questionsArr[round].correctAnswer) {
            finalScore = finalScore + 5;
            displayQuestion(questionNumber);
        } else {
            //timer increase
            displayQuestion(questionNumber);
        }

    }

    function answer2fun () {

        guess = answer2.innerHTML;
        questionNumber++;

        if (guess === questionsArr[round].correctAnswer) {
            finalScore = finalScore + 5;
            displayQuestion(questionNumber);
        } else {
            //timer increase
            displayQuestion(questionNumber);
        }
    }

    function answer3fun () {

        guess = answer3.innerHTML;
        questionNumber++;

        if (guess === questionsArr[round].correctAnswer) {
            finalScore = finalScore + 5;
            displayQuestion(questionNumber);
        } else {
            //timer increase
            displayQuestion(questionNumber);
        }
    }

    function answer4fun () {

        guess = answer4.innerHTML;
        questionNumber++;

        if (guess === questionsArr[round].correctAnswer) {
            finalScore = finalScore + 5;
            displayQuestion(questionNumber);
        } else {
            //timer increase
            displayQuestion(questionNumber);
        }
    }

}

function gameOver() {
    main.removeChild(answerDiv);
    var initialsTextBox = document.createElement('INPUT');
    var initialsPrompt = document.createElement('p');
    initialsPrompt.textContent = 'Enter initials to save your score!'
    initialsTextBox.setAttribute('type', 'text');
    question.textContent = 'Game over, well done! You have a final score of ' + finalScore;
    main.appendChild(initialsPrompt);
    main.appendChild(initialsTextBox);
}
