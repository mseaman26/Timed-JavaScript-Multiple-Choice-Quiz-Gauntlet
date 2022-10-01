

var currentPage = "quiz-page"
var currentPageDisplay = "inline"
var openingPage = {
    display:"inline"
}
var quizPage = {
    display:"inline"
}
var currentQuestion = 2
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
    {question:"the first tow arguments of .addEventListener are ...",
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

//for changing to next page
function rednerCurrentPage(){
    document.getElementById(currentPage).style.display = currentPageDisplay
}
function clearCurrentPage(){
    document.getElementById(currentPage).style.display = "none"
}

function renderOpeningPage(){
    document.getElementById("opening-page").style.display = "inline"
}
function clearOpeningPage(){
   document.getElementById("opening-page").style.display = "none";
}
function clearQuizPage(){
    document.getElementById("quiz-page").style.display = "none"
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
    }


    // document.getElementsByClassName("choice2")[0].textContent = questions[0].choice2
    // document.getElementsByClassName("choice3")[0].textContent = questions[0].choice3
    // document.getElementsByClassName("choice4")[0].textContent = questions[0].choice4

}
//start quiz button
document.getElementById("start-quiz-button").addEventListener("click", function (){
    clearCurrentPage()
    currentPage = "quiz-page"
    rednerCurrentPage()
})
//back to start button
document.getElementById("back-to-start").addEventListener("click", function(){
    clearCurrentPage()
    currentPage = "opening-page"
    rednerCurrentPage()
})
//next question button
document.getElementById("next-button").addEventListener("click", function(){
    currentQuestion = currentQuestion + 1
    console.log(currentQuestion)
    renderQuestion()
    renderChoices()
    activateChoices()
})
//event listener for choices

    

// clearOpeningPage()
clearOpeningPage()
clearQuizPage()
rednerCurrentPage()
renderQuestion()
renderChoices()

var choiceEvents = document.getElementsByClassName("choice")
console.log(choiceEvents[3])
for(var i = 0; i< choiceEvents.length; i++){
    choiceEvents[i].addEventListener("click", function(){

        if(this.textContent == questions[currentQuestion].choices[questions[currentQuestion].correctAnswer]){
            console.log("correct")
        }else {
            console.log("incorrect")
        }
    })

    
}
function activateChoices(){
    var choiceEvents = document.getElementsByClassName("choice")
console.log(choiceEvents[3])
for(var i = 0; i< choiceEvents.length; i++){
    choiceEvents[i].addEventListener("click", function(){

        if(this.textContent == questions[currentQuestion].choices[questions[currentQuestion].correctAnswer]){
            console.log("correct")
        }else {
            console.log("incorrect")
        }
    })

    
}

}