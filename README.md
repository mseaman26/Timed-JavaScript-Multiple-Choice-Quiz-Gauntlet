# Timed-JavaScript-Multiple-Choice-Quiz-Gauntlet
This program takes the user through a multiple-choice quiz on the topic of JavaScript.  The quiz not only features questions, but also a timer, making the quiz more pressure-inducing. Wrong answers are extra punishing because not only do they lower the user's percentage, but they take time off the timer as well!  To make things more intense, the time remaining at the end is factored in by being multiplied by the percentage that the user scored on the questions.  After the quiz.  The user submits their name and their score is logged on the scoreboard for all to see

## Video of the Application
<img src="./assets/Images/Quiz.gif">

## Link to the Deployed Application
https://mseaman26.github.io/Timed-JavaScript-Multiple-Choice-Quiz-Gauntlet/

## Languages Used
The primary languge of focus for this project was JavaScripts, but there was also a significant amount of work with HTML and CSS

## Notable Features
-Web API functionality, including DOM traversal, dynamic greation and removal of elements, local storage, and more
-A timer, utilizing the setInterval() method
-Use of objects and their associated key/value pairs, including storing and accessing them to and from local storage using JSON.stringify
-multiple elements being associated with event listeners, including a text area and submit button, requiring the preventDefault() method

## Notable methods
-Utilizing local storage to keep a scoreboard that persists 
-accessing elements with getElementbyId and other similar methods
-creting the illusion of multiple pages by hiding and displaying content dynamically
-Keeping the app built in such a way that if certain aspects changed, such as the number of questions on the quiz or the number of choices in the questions, the app would still function smoothly

## Favorite parts of my JS code
I like this function because it's short, but it does a lot.  It parses all the scores from local storage and stores them into an array to be displayed on the scoreboard!
```javascript
function getScoreBoard(){
    var scores = []
    for(i = 0; localStorage.getItem("score"+i) != null;i++){
        scores.push(JSON.parse(localStorage.getItem("score"+i)))
    }
    return scores
}
```
I also find something satisfying about the objects themselves.  Here are two of the questions in the quiz, stored as objects in an array
```javascript
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
```
## Learning points from this project
- The main learning poing for this project is that, going forward, I need to slow down and take a look at the broad sctructure of what I'm trying to build.  In this project, I approached it a bit hastilly and perhaps urgently. I would celebrate by victories, but comprimising the neatness of my code made achieving those victories more diffictul
- I Learned what a web API is and many other learning points associated with that
- Learned many new nuances to web developement such as event behaviour, object functionality and more
- I learned that temperment matters when approaching a coding project

## By Mike Seaman