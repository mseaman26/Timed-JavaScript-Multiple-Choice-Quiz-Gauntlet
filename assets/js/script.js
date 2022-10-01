

var currentPage = "opening-page"
var currentPageDisplay = "inline"
var questions = [
    {question:"What year was JavaScript created?",
    choice1:"1994",
    choice2:"1995",
    choice3:"1998",
    choice4:"1999",
    correctAnswer: "choice2"
    },
    {question:"What character is used to separate a key from a value within an object in JavaScript?",
    choice1:";",
    choice2:",",
    choice3:":",
    choice4:"/",
    correctAnswer: "choice3"
    },
    {question:"What character is used to separate a key from a value within an object in JavaScript?",
    choice1:"Douglas Crockford",
    choice2:"Marc Andreessen",
    choice3:"Sir Tim Berners-Lee",
    choice4:"Brendan Eich",
    correctAnswer: "choice4"
    },
    {question:"When a variable is declared within a function, it is called a...",
    choice1:"Local Variable",
    choice2:"Functional Variable",
    choice3:"Global Variable",
    choice4:"Node",
    correctAnswer: "choice1"
    },
    {question:"Local Storage refers to storing data...",
    choice1:"in the environment where the javascript is being written",
    choice2:"within the user's browser",
    choice3:"on a server located within 25 miles of the user",
    choice4:"on a built-in hard drive",
    correctAnswer: "choice2"
    },
    {question:"To stop a function within setInterval(), we call...",
    choice1:"clearInterval",
    choice2:"break",
    choice3:"return",
    choice4:"exit",
    correctAnswer: "choice1"
    },
    {question:"the first tow arguments of .addEventListener are ...",
    choice1:"type, object",
    choice2:"click, event",
    choice3:"click, listener(function)",
    choice4:"listener, type",
    correctAnswer: "choice3"  
    },
    {question:"The ES6 JavaScript update was released in the year ...",
    choice1:"2001",
    choice2:"2008",
    choice3:"2015",
    choice4:"2018",
    correctAnswer: "choice3"
    },
    {question:"Within the second argument of a .eventListener(), the function has an argument of (e) because...",
    choice1:"it actually doesn't need to be (e), it could be anything, such as (Farley)",
    choice2:"because it represents an event",
    choice3:"it specifies ES6",
    choice4:"because it is an empty value",
    correctAnswer: "choice1"
    },
    {question:"the smallest time interval allowed for the second argument of setInterval is ...",
    choice1:".5 milliseconds",
    choice2:"1 milliseconds",
    choice3:"5 milliseconds",
    choice4:"10 milliseconds",
    correctAnswer: "choice4"
    }
    


]
console.log(questions[1].choice4)
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
// clearOpeningPage()
clearOpeningPage()
clearQuizPage()
renderOpeningPage()

