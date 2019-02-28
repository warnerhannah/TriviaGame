// You'll create a trivia form with multiple choice or true/false options (your choice).
var myQuestions = [
    {
        question: "How long is New Zealand's Ninety Mile Beach?",
        answers: {
            a: "55 miles",
            b: "90 miles",
            c: "85 miles",
            d: "92 miles",    
        },
        correctAnswer: "55 miles",
    },
    {
        question: "What was Walt Disney afraid of?",
        answers: {
            a: "Driving",
            b: "Clowns",
            c: "Mice",
            d: "Death",    
        },
        correctAnswer: "Mice",
    },
    {
        question: "Who averaged one patent every 3 weeks of their life?",
        answers: {
            a: "Thomas Edison",
            b: "Benjamin Franklin",
            c: "Sir Isaac Newton",
            d: "Nikola Tesla",    
        },
        correctAnswer: "Thomas Edison",
    },
    {
        question: "How many states border the Gulf of Mexico?",
        answers: {
            a: "2",
            b: "6",
            c: "3",
            d: "5",    
        },
        correctAnswer: "5",
    },
    {
        question: "What is the most common atmospheric gas?",
        answers: {
            a: "Carbon",
            b: "Nitrogen",
            c: "Oxygen",
            d: "Hyrdrogen",    
        },
        correctAnswer: "Nitrogen",
    },

]

//global variables
var countdown = 30;
var intervalId;
var correctAnswers = 0;
var incorrectAnswers = 0;

// The player will have a limited amount of time to finish the quiz. 
// display time remaining 
function countDown() {
    countdown--;
    $("#countdown").html(countdown);
    console.log(countdown);
    if (countdown === 0) {
        alert("Time is up!");
        clearInterval(intervalId);
        scoreGame();
    }
}
intervalId = setInterval(countDown, 1000);


//if they press submit
$("#submitButton").on("click", function() {
    scoreGame()
});

//The page will reveal the number of questions that players answer correctly and incorrectly.
//calculate score based on what they clicked
function scoreGame() {
    clearInterval(intervalId);

    for (i=0;i<5;i++) {
        var userChoice = $('input[name=answer]:checked').val()

        if (userChoice === "correct") {
            correctAnswers++;
            console.log("right");
        }

        else {
            incorrectAnswers++;
            console.log("wrong")
        }
    }
    alert("Thanks for playing!")
    alert("You got " + correctAnswers + " answers right, and " + incorrectAnswers + " answers wrong!")
    $("#correctanswers").html("You got " + correctAnswers + " answers right.")
};