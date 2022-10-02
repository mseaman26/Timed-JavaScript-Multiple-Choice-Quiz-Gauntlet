
var pageObjects = [{
    name:"opening-page",
    display:"inline"
},
{
    name: "quiz-page",
    display:"inline"
},
{
    name: 'post-quiz-page',
    display: "inline"
}
]
var currentPage = 0
// var currentPageDisplay = "inline"

var currentQuestion = 0
var questions = [
    {question:"What year was JavaScript created?",
    choices:[
        1994,
        1995,
        1998,
        1999
    ],
    correctAnswer: 1
    },
    {question:"What character is used to separate a key from a value within an object in JavaScript?",
    choices:
    [
        ";",
        ",",
        ":",
        "/"
    ],

    correctAnswer: 2
    },
    {question:"Who is credited with creating JavaScript?",
    choices:
    [
        "Douglas Crockford",
        "Marc Andreessen",
        "Sir Tim Berners-Lee",
        "Brendan Eich"
    ],
    correctAnswer: 3
    },
    {question:"When a variable is declared within a function, it is called a...",
    choices:
    [
        "Local Variable",
        "Functional Variable",
        "Global Variable",
        "Node"
    ],
    correctAnswer: 0
    },
    {question:"Local Storage refers to storing data...",
    choices:
    [
        "in the environment where the javascript is being written",
        "within the user's browser",
        "on a server located within 25 miles of the user",
        "on a built-in hard drive"
    ],
    correctAnswer: 1
    },
    {question:"To stop a function within setInterval(), we call...",
    choices:
    [
        "clearInterval",
        "break",
        "return",
        "exit"
    ],
    correctAnswer: 0
    },
    {question:"the first two arguments of .addEventListener are ...",
    choices:
    [
        "type, object",
        "click, event",
        "click, listener(function)",
        "listener, type"
    ],
    correctAnswer: 2
    },
    {question:"The ES6 JavaScript update was released in the year ...",
    choices:
    [
        "2001",
        "2008",
        "2015",
        "2018",
    ],
    correctAnswer: 2
    },
    {question:"Within the second argument of a .eventListener(), the function has an argument of (e) because...",
    choices:
    [
        "it actually doesn't need to be (e), it could be anything, such as (Farley)",
        "it represents an event",
        "it specifies ES6",
        "because it is an empty value"
    ],
    correctAnswer: 0
    },
    {question:"the smallest time interval allowed for the second argument of setInterval is ...",
    choices:
    [
        ".5 milliseconds",
        "1 milliseconds",
        "5 milliseconds",
        "10 milliseconds"
    ],
    correctAnswer: 3
  
    }



]
var currentQuestionAnswered = false
var correctAnswers =0
var incorrectAnswers =0

var timeRemaining
var timerGoing = false
//for changing to next page
function rednerCurrentPage(){
    document.getElementById(pageObjects[currentPage].name).style.display = pageObjects[currentPage].display
}
function clearCurrentPage(){
    document.getElementById(currentPage).style.display = "none"
}
function clearAllPages(){
    document.getElementById("opening-page").style.display = "none"
    document.getElementById("quiz-page").style.display = "none"
    document.getElementById("post-quiz-page").style.display = "none"

    
}
function renderOpeningPage(){
    document.getElementById("opening-page").style.display = "inline"
}

function clearOpeningPage(){
   document.getElementById("opening-page").style.display = "none";
}

function renderQuestion(){
    var question = document.getElementsByClassName("question")
    question[0].textContent = questions[currentQuestion].question
    
    
}

function renderChoices(){
    document.getElementById("choices").innerHTML = ""
    for(var i = 0; i < questions[currentQuestion].choices.length; i++){
    var element = document.createElement("div")
    element.className = "choice"
    element.textContent = questions[currentQuestion].choices[i]
    document.getElementById("choices").appendChild(element)
    nexQuestionButton.style.display = "flex"
    }
}
function startquiz(){
    clearAllPages()
    currentQuestion = 0
    currentPage = 1
    rednerCurrentPage()
    renderQuestion()
    renderChoices()
    activateChoices()
}
// function clearPage(){
//     document.getElementById("body").innerHTML = ''
// }
//activates choices as correct or incorrect
function activateChoices(){
    currentQuestionAnswered = false
    nexQuestionButton.style.display = "none"
    var choiceEvents = document.getElementsByClassName("choice")
    for(var i = 0; i< choiceEvents.length; i++){
    choiceEvents[i].addEventListener("click", function(){
        if(currentQuestionAnswered == false){
            if(this.textContent == questions[currentQuestion].choices[questions[currentQuestion].correctAnswer]){
                console.log("correct")
                correctAnswers = correctAnswers+1
            }else {
                console.log("incorrect")
                incorrectAnswers = incorrectAnswers+1
            }
        }
        currentQuestionAnswered = true
        nexQuestionButton.style.display = "flex"
    }
    )
    }
    
}
function startTimer(){
    var timer = setInterval(function(){
            document.getElementById("timer").textContent = timeRemaining
            timeRemaining -= 1
            if(timerGoing = false || timeRemaining < 0){
                clearInterval(timer)
                console.log("less than")
            } 
        }, 1000)
}
//start quiz button
document.getElementById("start-quiz-button").addEventListener("click", function (){
    clearAllPages()
    currentPage = 1
    startquiz()
    console.log("start")
    timeRemaining =75
    timerGoing = true
    startTimer()
})
//back to start button
document.getElementById("back-to-start").addEventListener("click", function(){
    clearAllPages()
    currentQuestion = 0;
    currentPage = 0
    rednerCurrentPage()
    correctAnswers = 0;
    incorrectAnswers = 0
    timerGoing = false
})
//next question button
var nexQuestionButton = document.getElementById("next-button")

nexQuestionButton.addEventListener("click", function(){
    
    currentQuestion = currentQuestion + 1
    console.log(currentQuestion)
    if(questions[currentQuestion] !== undefined){
        renderQuestion()
        renderChoices()
        activateChoices()
    } else{
//Enter Post Quiz
        console.log("end of quiz")
        console.log("corect answers: "+correctAnswers)
        console.log("incorrect answers: "+incorrectAnswers)
        clearAllPages()
        currentPage = 2 //post quiz page
        rednerCurrentPage()
        timerGoing = false
        localStorage.setItem("correct-answers", JSON.stringify(correctAnswers))
        localStorage.setItem("incorrect-answers", JSON.stringify(incorrectAnswers))
        localStorage.setItem("time-remaining", JSON.stringify(timeRemaining))
     

    }
    
})
//===================================POST QUIZ PAGE======================================================
var correctScoreBoard = document.getElementById("correct-answers-score")
correctScoreBoard.textContent = "Correct Answers: "+localStorage.getItem("correct-answers")

var postTimer = document.getElementById("post-quiz-timer")
postTimer.textContent = localStorage.getItem("time-remaining")

var incorrectScoreBoard = document.getElementById("incorrect-answers-score")
incorrectScoreBoard.textContent = "Incorrect Answers: "+localStorage.getItem("incorrect-answers")


clearAllPages()
rednerCurrentPage()




