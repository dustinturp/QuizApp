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
    return $("<button>").attr("id", addId).addClass("ans-btn btn btn-secondary btn-lg center col-12").text(ansText);
};

let questionGen = function(addId, questText){
    return $("<p>").attr("id", addId).addClass("question1 text-center").text(questText);
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

const displayWrong = function() {
    rightOrWrong.replaceWith("Wrong Answer!")
    timer = timer - 10;
    console.log(timer);
}
const rightAnswer = function() {
    rightOrWrong.replaceWith("Correct!")
}

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
const round2 = questions[1];
const round3 = questions[2];
const round4 = questions[3];

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
    let answer3 = array.a3;
    let answer4 = array.a4;
    let correctA = array.a5;
    // return (answer1, answer2, answer3, answer4);
};

//collect answer chosen
//if user selects 

// $("#timer-el").on("click", function() 
const countDownTimer = function() {
    let date = new Date();
    let time = date.toLocaleTimeString();
    let updatedTimer = timer --;
    console.log(updatedTimer)
    if(updatedTimer <= 0){
        alert("Game Has Ended")
        clearInterval(countDownTimer);
        //end game
    }
    document.getElementById('timer-el').textContent = time + " time remaining " + updatedTimer;
  // $("timer-el").replaceWith("Time Remaining" + updatedTimer)

};

//const startCountdown = setInterval(function() {
    //when user clicks start game
    

    
    //push updated timer to screen and return it until user clicks next question.
    //timerEl = append timer + "seconds remaining";

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
const startQuiz = function() {

}

// start round 

//when start button is clicked display the question and buttons filled with answer choices.
$("#ansBtnStart").click(function() {
    //add question to the page now need to replace the content
    let question1 = $("<p>" + displayQuestion(round1) + "</p>").addClass("question1 text-center").attr('id', 'quest-one');
    //console.log(typeof(question1)); expect a string
    //console.log("this is a question", question1);
    // question1.appendTo(questionSectionEl);
    $("#start-text").replaceWith(question1);
    $("#start-text").remove();
    //create answer button options
    //answer option1  
    let ansBtn1 = answerButton("ans1", round1.a1);
    //console.log(ansBtn1);
    startBtn.replaceWith(ansBtn1);
    //answer two
    let ansBtn2 = answerButton("ans2", round1.a2)
    ansBtn2.appendTo(answerSectionEl);
    let ansBtn3 = answerButton("ans3", round1.a3)
    ansBtn3.appendTo(answerSectionEl);
    let ansBtn4 = answerButton("ans4", round1.a4)
    ansBtn4.appendTo(answerSectionEl);
    // let correctAns = round1.a5;
    // let showCount = setInterval(countDownTimer, 1000)
});

$(answerSectionEl).on("click", "button", function(evt) {
    let text = $(this).text();
    //console.log(text);
    let target = evt.target;
    //console.log("you clicked", target);
    if (text === round1.a5) {
        console.log("this would be right");
        rightAnswer();
        // round2Begin();
        //start round 2
    }
    else {
        console.log("you are wrong")
        displayWrong();
        // round2Begin();
        //start round 2
    }
    roundCounter ++;
    round2Begin()
});

// $("#quest-one").on("click", function(){
//     let question2 = $("<p"> + round2.q + "</p>").addClass("question2 text-center");
//     $("#quest-one").replaceWith(question2);
//     console.log(question2);
//     let r2AnsButton1 = round2.a1;
// });

const round2Begin = function() {
    //display question 2
    let question2 = questionGen("quest-2", round2.q)
    console.log(question2);
    $("#quest-one").replaceWith(question2);
    //answer option display
    ansBtn1 = answerButton("ans1", round2.a1);
    $("#ans1").replaceWith(ansBtn1);
    ansBtn1 = answerButton("ans2", round2.a2);
    $("#ans2").replaceWith(ansBtn1);
    ansBtn1 = answerButton("ans3", round2.a3);
    $("#ans3").replaceWith(ansBtn1);
    ansBtn1 = answerButton("ans4", round2.a4);
    $("#ans4").replaceWith(ansBtn1);
};










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