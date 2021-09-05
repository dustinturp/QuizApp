// listen for events
$( document ).ready(function() {
    console.log( "ready!" );
});

let body = document.body;

let quizAppSectionEl = $("#question-answer-display"); //jquery method 
let questionSectionEl = $("#question-section");
let answerSectionEl = $("#answer-choices");
// let answerSec1El = document.getElementById("answer1");
// let answerSec2El = document.getElementById("answer2");
// let answerSec3El = document.getElementById("answer3");
// let answerSec4El = document.getElementById("answer4");
let rightOrWrong = $('#right-wrong-display-section');
let timerEl = document.getElementById("#timer-el");
let startText = $("<p>Hello, Welcome to the quiz. This is text explaining the quiz.<p>").attr('id', 'start-text');


//create button el
let answerButton = function(addId, ansText){
    return $("<button>").attr("id", addId).addClass("btn btn-secondary btn-lg center col-12").text(ansText);
};

//start quiz text
startText.addClass("text-center").appendTo(questionSectionEl);
let startBtn = answerButton("ansBtnStart", "Start Quiz");
startBtn.appendTo(answerSectionEl);

// questions arrays
const questions = [
    {q: 'How flat is the Earth?', a1:'So flat', a2: 'Kinda flat', a3: 'Very flat', a4: 'Why am I taking this quiz?', a5:'So flat'}, //add option 5 for T or F
    {q: 'What do you cut tomatoes with?', a1: 'My mind', a2: 'spoons', a3: 'very small rocks', a4: 'get me out of this', a5:'very small rocks'},
    {q: 'This is a third question?', a1: 'this is a answer', a2: 'this is another answer option', a3: 'one more', a4: 'again', a5: 'one more'},
    {q: 'question 4?', a1: 'answer for 4', a2: 'another one', a3: 'check this value', a4: 'print me on the page', a5:'another one'}
];


//count up each round for each question. 
let roundCounter = 1;
let singleQuestion = "";
let userSelection = [];// keep track of T or F 

//countdown timer every second until user selects an answer. 
let timer = 120;

//optional function rounds
const roundGen = function(questArray) {
    for (let i =0; i < questArray.length; i ++){
        let round = questArray[i];
        console.log(round);
        return round;
    }
};
//test roundGen function
// roundGen(questions);

//prints each round
const round1 = questions[0];
// // console.log(round1)
// // console.log(round1.q)
// // console.log(round1.a1)
// const round2 = questions[1];
// // console.log(round2)
// const round3 = questions[2];
// const round4 = questions[3];

//function to take array and display it on the page
function displayQuestion(array) {
    let question = array.q;
    //update html 
    //console.log(question);
    return question;
    //update page to display q
}; // around 2 loops  questions & display answers

// test to see if display Question works
// displayQuestion(round1);

function displayAnswers(array) {
    let answer1 = array.a1;
    console.log(answer1);
    let answer2 = array.a2;
    // console.log(answer2);
    let answer3 = array.a3;
    // console.log(answer3);
    let answer4 = array.a4;
    // console.log(answer4);
    let correctA = array.a5;
    // return (answer1, answer2, answer3, answer4);
};

//collect answer chosen
//if user selects 

const startCountdown = setInterval(function() {
    //when user clicks start game

    let updatedTimer = timer --;
    //push updated timer to screen and return it until user clicks next question.
    //timerEl = append timer + "seconds remaining";

    // alert 

    // one timer for the game.

},1000);
const pauseCountdown = function() { //check req only pause at end
    //when user clicks on an answer stop the timer.
    clearInterval(timer)
}

// const checkAnswerChoice = function(ansChosen) {
//     if (ansChosen === true){
//         // push to survey says
//         //update choice section html
//     }
// }

// start game
// display start game button fill content call round 1

    //on click of start quiz
    // answerSectionEL = document.createElement("button");
    // answerSectionEl.textContent = "Start Quiz";
    // answerSectionEl.setAttribute("style", "margin:auto; width:50%; text-align:center;")
const startQuiz = function() {

}

// start round 
//startQuiz();

//when start button is clicked display the question and buttons filled with answer choices.
$("#ansBtnStart").click(function() {
    //add question to the page now need to replace the content
    let question1 = $("<p>" + displayQuestion(round1) + "</p>").addClass("question1 text-center");
    //console.log(typeof(question1)); expect a string
    console.log("this is a question", question1);
    // question1.appendTo(questionSectionEl);
    $("#start-text").replaceWith(question1);
    //create answer button options
    //answer option1  
    let ansBtn1 = answerButton("ans1", round1.a1);
    //console.log(ansBtn1);
    startBtn.replaceWith(ansBtn1);
    //answer two
    let ansBtn2 = answerButton("ans2", round1.a2)
    ansBtn2.appendTo(answerSectionEl);
    let ansBtn3 = answerButton("ans2", round1.a3)
    ansBtn3.appendTo(answerSectionEl);
    let ansBtn4 = answerButton("ans2", round1.a4)
    ansBtn4.appendTo(answerSectionEl);
});
   //save error occurs TypeError question1.AddClass
// document.querySelector('#ansBtnStart').addEventListener('click', function() {
//     let question1 = $("<p>" + displayQuestion(round1) + "</p>"); // All I needed was to add jquery to the string
//     //console.log(typeof(question1)); expect a string
//     console.log("this is a question", question1);
//     question1.addClass("question1 text-center").appendTo(questionSectionEl);
// });


//test if display Answers is working
// displayAnswers(round1);

// test display question
// displayQuestion(roundGen(questions))
// const testQuestions = displayQuestion(roundGen(questions))
// console.log(testQuestions)
// //test display answers
//displayAnswers(roundGen(questions))
//currently ony working for the first one
// const testAnswers = displayAnswers(roundGen(questions))
// console.log(testAnswers)