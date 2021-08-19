//access body element
var body = document.body;

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
main.appendChild(startButton);

/* width: 10%;
border: 1px solid var(--head-foot-color);
background: var(--head-foot-color);
color: var(--background-color);
text-align: center;
padding: 15px 0;
font-size: 16px;
border-radius: 10px; */