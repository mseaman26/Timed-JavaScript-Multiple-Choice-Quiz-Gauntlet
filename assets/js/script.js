//Stores properties for each page
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
},
{
    name: 'high-scores-page',
    display: "inline"
}
]
//button to navigate to high scores scoreboard
var highScoresButton = document.getElementById("high-scores-button")
//gets the scores from local storage
var scores = getScoreBoard()
//selects page index, for changing pages in the app
var currentPage = 0//<-----------------------Select Page here (should be initialized to 0)
//keeps track of what question we are on
var currentQuestion = 0
//The list of questions stored as objects in an array
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
    {
    question:"True or False: a variable declared inside a function declaration can be used anywhere by any other function",
    choices:[
        "True",
        "False"
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
//more self-explanatory variables
var currentQuestionAnswered = false
var correctAnswers =0
var incorrectAnswers =0

//timer value
var timeRemaining
var timerGoing = false
var rightWrongDisplay = document.getElementById("choice-result")
//for changing to next page (after reassigning the currentPage variable)
//to change the display property of the page to, say, "flex", it must be done within the corresponding page object, stored in the variable pageObjects
function rednerCurrentPage(){
    document.getElementById(pageObjects[currentPage].name).style.display = pageObjects[currentPage].display
}
//This is my method for clearing pages, 
function clearAllPages(){
    document.getElementById("opening-page").style.display = "none"
    document.getElementById("quiz-page").style.display = "none"
    document.getElementById("post-quiz-page").style.display = "none"
    document.getElementById("high-scores-page").style.display = "none"  
}
//displays the current question
function renderQuestion(){
    var question = document.getElementsByClassName("question")
    question[0].textContent = questions[currentQuestion].question
}
//displays the choices for each question
function renderChoices(){
    document.getElementById("choices").innerHTML = ""
    for(var i = 0; i < questions[currentQuestion].choices.length; i++){
    var element = document.createElement("div")
    element.id = "choice"+i
    element.className = "choice"
    element.textContent = (i+1)+") "+questions[currentQuestion].choices[i]
    document.getElementById("choices").appendChild(element)
    nexQuestionButton.style.display = "flex"
    }
}//begins the quiz
function startquiz(){
    document.getElementById("timer")
    clearAllPages()
    currentQuestion = 0
    currentPage = 1
    rednerCurrentPage()
    renderQuestion()
    renderChoices()
    activateChoices()
}
//loads the info to know which answers are correct and which are not
function activateChoices(){
    rightWrongDisplay.textContent = ""
    currentQuestionAnswered = false
    //hide next question button initially
    nexQuestionButton.style.display = "none"
    var choiceEvents = document.getElementsByClassName("choice")
    for(var i = 0; i< choiceEvents.length; i++){
        choiceEvents[i].addEventListener("click", function(){
             //When answer is clicked
        if(currentQuestionAnswered == false){
            //if answer is correct
            if(this.textContent.includes(questions[currentQuestion].choices[questions[currentQuestion].correctAnswer])){
                this.style.backgroundColor = "green"
                rightWrongDisplay.textContent = "Correct! 😃"
                correctAnswers = correctAnswers+1
                
            }else {
                //If answer is wrong
                rightWrongDisplay.textContent = "Incorrect 😔"
                this.style.backgroundColor = "red"
                incorrectAnswers = incorrectAnswers+1
                timeRemaining -= 5
            }
              //highlighting right answer after choice is made
            currentQuestionAnswered = true
            for(var i = 0; i< choiceEvents.length; i++){
                var answer = document.getElementById("choice"+i) 
    
                // if(answer.textContent.includes(JSON.stringify(questions[currentQuestion].choices[questions[currentQuestion].correctAnswer]))){
                    if(answer.id == "choice"+questions[currentQuestion].correctAnswer){
                    answer.style.backgroundColor = "green"
                }
        }
        //reveal next question button
        nexQuestionButton.style.display = "flex"

        }
      
       
        
    }
    )
    }
    
}
function startTimer(){
    var timer = setInterval(function(){
            document.getElementById("time").textContent = timeRemaining
            timeRemaining -= 1
            if(timerGoing = false || timeRemaining < 0){
                renderPostQuizPage()
                clearInterval(timer)
            } 
        }, 1000)
}
function getScoreBoard(){
    var scores = []
    for(i = 0; localStorage.getItem("score"+i) != null;i++){
        scores.push(JSON.parse(localStorage.getItem("score"+i)))
    }
   // TODO:make sure this works
    return scores
}
 


//displays scores
// scores = sortObject(scores)
function displayHighScores(){
    var scoresH1 = document.createElement("h1")
    scoresH1.textContent = "Here are the all-time High Scores! Reload the page to play again!!!"
    document.getElementById("high-scores-page").appendChild(scoresH1)
    // var playAgainButton = document.createElement("button")
    // playAgainButton.id = "play-again-button"
    // playAgainButton.textContent = "Play Again"
    // document.getElementById("high-scores-page").appendChild(playAgainButton)
    
    var table = document.createElement('table');
    table.id = "score-table"
    var header = table.createTHead()
    var row = header.insertRow(0)
    var cell1 = row.insertCell(0)
    var cell2 = row.insertCell(0)
    cell1.innerHTML = "SCORE:"
    cell2.innerHTML = "NAME:"
    for (var i = 0; i < scores.length; i++){
        var tr = document.createElement('tr');   

        var td1 = document.createElement('td');
        var td2 = document.createElement('td');

        var text1 = document.createTextNode(scores[i].name);
        var text2 = document.createTextNode(scores[i].score);

        td1.appendChild(text1);
        td2.appendChild(text2);
        tr.appendChild(td1);
        tr.appendChild(td2);

        table.appendChild(tr);
}
        document.body.appendChild(table);


    // for(var i = 0; i < scores.length;i++){
    //     var pEl = document.createElement("p")
    //     pEl.textContent = (scores[i].name+":"+" "+scores[i].score)
    //     document.getElementById("high-scores-page").appendChild(pEl)
    // }
//     document.getElementById("play-again-button").addEventListener("click", function(){
//         currentPage = 0
//         rednerCurrentPage
// })
}   
//=========================================POST QUIZ PAGE===============================
function renderPostQuizPage(){
    clearAllPages()
    currentPage = 2 //post quiz page
    rednerCurrentPage()
    timerGoing = false
    localStorage.setItem("correct-answers", JSON.stringify(correctAnswers))
    localStorage.setItem("incorrect-answers", JSON.stringify(incorrectAnswers))
    localStorage.setItem("time-remaining", JSON.stringify(timeRemaining))

    var correctScoreBoard = document.getElementById("correct-answers-score")
    var finalCorrectAnswers = localStorage.getItem("correct-answers")
    correctScoreBoard.textContent = "Correct Answers: "+finalCorrectAnswers

    var postTimer = document.getElementById("post-quiz-timer")
    var postTime = document.getElementById("time-post")
    var finalTimeRemaining = localStorage.getItem("time-remaining")
    if(finalTimeRemaining <= 0){
    
        localStorage.setItem("time-remaining", "0")
        finalTimeRemaining = 0
        }
    finalTimeRemaining =eval(finalTimeRemaining)
    postTime.textContent = finalTimeRemaining

    var incorrectScoreBoard = document.getElementById("incorrect-answers-score")
    var finalIncorrectAnswers = localStorage.getItem("incorrect-answers")
    incorrectScoreBoard.textContent = "Incorrect Answers: "+finalIncorrectAnswers

    var percentageScore = document.getElementById("percentage-score")
    percentageScore.textContent = "Your answers were "+Math.floor(finalCorrectAnswers/questions.length*100)+"% correct!"

    var timeRemainingScore = document.getElementById("time-remaining")
    timeRemainingScore.textContent = "Your remaining time was "+finalTimeRemaining+" seconds"

    var finalScoreEl = document.getElementById("final-score")
    var finalScore = Math.floor(finalCorrectAnswers/questions.length*finalTimeRemaining)
    finalScoreEl.textContent = Math.floor(finalCorrectAnswers/questions.length*100)+"% of "+finalTimeRemaining+" is "+finalScore+"!  "+finalScore+" is your final score!"
    
    window.localStorage.setItem("final-score", JSON.stringify(finalScore))
    }

//=======================EVENT LISTENERS==================================

//start quiz button listener
document.getElementById("start-quiz-button").addEventListener("click", function (){
    clearAllPages()
    currentPage = 1
    startquiz()
    timeRemaining =100
    timerGoing = true
    startTimer()
})
//back to start button listener
document.getElementById("back-to-start").addEventListener("click", function(){
    clearAllPages()
    currentQuestion = 0;
    currentPage = 0
    rednerCurrentPage()
    correctAnswers = 0;
    incorrectAnswers = 0
    timerGoing = false
})
//next question button listener
var nexQuestionButton = document.getElementById("next-button")

nexQuestionButton.addEventListener("click", function(){
    
    currentQuestion = currentQuestion + 1
    if(questions[currentQuestion] !== undefined){
        renderQuestion()
        renderChoices()
        activateChoices()
    } else{

    renderPostQuizPage()
    }
})
//input field form listeners

var initials = window.localStorage.getItem("initials-text-box", JSON.stringify("initials-text-box"))
var submitButton = document.getElementById("submit-button")
var initialsTextBox = document.getElementById("initials-text-box")

//initials submit button listener
submitButton.addEventListener("click", function(event){
    //I copied a lot of work from above to make sure these variables from local storage were defined when the submit button is clicked!
    //it is excessive, but I needed to make sure it works.  Maybe I'll have time to refactor
    localStorage.setItem("correct-answers", JSON.stringify(correctAnswers))
    localStorage.setItem("incorrect-answers", JSON.stringify(incorrectAnswers))
    localStorage.setItem("time-remaining", JSON.stringify(timeRemaining))

    var correctScoreBoard = document.getElementById("correct-answers-score")
    var finalCorrectAnswers = localStorage.getItem("correct-answers")
    correctScoreBoard.textContent = "Correct Answers: "+finalCorrectAnswers

    var postTimer = document.getElementById("post-quiz-timer")
    var postTime = document.getElementById("time-post")
    var finalTimeRemaining = localStorage.getItem("time-remaining")
    if(finalTimeRemaining <= 0){
        localStorage.setItem("time-remaining", "0")
        finalTimeRemaining = 0
        }
    finalTimeRemaining =eval(finalTimeRemaining)+1
    postTime.textContent = finalTimeRemaining

    var incorrectScoreBoard = document.getElementById("incorrect-answers-score")
    var finalIncorrectAnswers = localStorage.getItem("incorrect-answers")
    incorrectScoreBoard.textContent = "Incorrect Answers: "+finalIncorrectAnswers

    var percentageScore = document.getElementById("percentage-score")
    percentageScore.textContent = "Your answers were "+Math.floor(finalCorrectAnswers/questions.length*100)+"% correct!"

    var timeRemainingScore = document.getElementById("time-remaining")
    timeRemainingScore.textContent = "Your remaining time was "+finalTimeRemaining+" seconds"

    var finalScoreEl = document.getElementById("final-score")
    var finalScore = Math.floor(finalCorrectAnswers/questions.length*finalTimeRemaining)
    finalScoreEl.textContent = Math.floor(finalCorrectAnswers/questions.length*100)+"% of "+finalTimeRemaining+" is "+finalScore+"!  "+finalScore+" is your final score!"
    //======================Storing Score info in localstorage====================================
    
    if(JSON.parse(localStorage.getItem("score-index")) == null){
        var scoreIndex = 0
    } else{
        scoreIndex = JSON.parse(localStorage.getItem("score-index"))
    }
 

    event.preventDefault();
    var initials = document.getElementById("initials-text-box").value
    localStorage.setItem("score"+scoreIndex, JSON.stringify({name:initials,score:finalScore}))
    scoreIndex +=1
    localStorage.setItem("score-index", scoreIndex)
    currentPage = 3
    clearAllPages()
    rednerCurrentPage()
    scores = getScoreBoard()
    document.getElementById("high-scores-page").innerHTML = ""
    displayHighScores()
   


})
//button to high scores page in post-quiz page

var viewHighScoresPost = document.getElementById("view-high-scores-post") 
viewHighScoresPost.addEventListener("click", function(event){
    currentPage = 3
    clearAllPages()
    rednerCurrentPage()
})
//view high scores button listener
highScoresButton.addEventListener("click", function(){
    currentPage = 3
    clearAllPages()
    rednerCurrentPage()
    getScoreBoard()
    displayHighScores()
})

//=========================First Code Executed=============================
clearAllPages()
rednerCurrentPage()  //starts at page 0

console.log(sortObjects(getScoreBoard()))

