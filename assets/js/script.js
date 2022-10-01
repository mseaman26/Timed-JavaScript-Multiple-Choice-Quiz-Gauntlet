

var currentPage = "opening-page"
var currentPageDisplay = "inline"
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
    console.log("jello")
    clearOpeningPage()
    currentPage = "quiz-page"
    rednerCurrentPage()
})
document.getElementById("back-to-start").addEventListener("click", function(){
    clearCurrentPage()
    currentPage = "opening-page"
    rednerCurrentPage()
})
// clearOpeningPage()
clearOpeningPage()
clearQuizPage()
renderOpeningPage()

