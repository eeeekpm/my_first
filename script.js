const questions = [
{
question: "Ποια είναι η πρωτεύουσα της Ελλάδας;",
answers: ["Αθήνα", "Θεσσαλονίκη", "Πάτρα", "Λάρισα"],
correct: 0
},
{
question: "Πόσα πόδια έχει ένας σκύλος;",
answers: ["2", "4", "6", "8"],
correct: 1
},
{
question: "Ποιος πλανήτης είναι γνωστός ως Κόκκινος Πλανήτης;",
answers: ["Αφροδίτη", "Δίας", "Άρης", "Κρόνος"],
correct: 2
}
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");
const scoreElement = document.getElementById("score");
const progressText = document.getElementById("progress-text");
const progressBar = document.getElementById("progress");

function showQuestion() {

const question = questions[currentQuestion];

questionElement.textContent = question.question;

answersElement.innerHTML = "";

scoreElement.textContent = "";

nextButton.style.display = "none";

progressText.textContent =
    "Ερώτηση " + (currentQuestion + 1) +
    " από " + questions.length;

progressBar.style.width =
    ((currentQuestion / questions.length) * 100) + "%";


question.answers.forEach(function(answer, index) {

    const button = document.createElement("button");

    button.textContent = answer;

    button.classList.add("answer");


    button.addEventListener("click", function() {

        const allAnswers =
            document.querySelectorAll(".answer");


        allAnswers.forEach(function(answerButton) {
            answerButton.disabled = true;
        });


        if (index === question.correct) {

            button.classList.add("correct");

            score++;

        } else {

            button.classList.add("wrong");

            allAnswers[question.correct]
                .classList.add("correct");
        }


        nextButton.style.display = "block";
    });


    answersElement.appendChild(button);

});


}

nextButton.addEventListener("click", function() {

currentQuestion++;


if (currentQuestion < questions.length) {

    showQuestion();

} else {

    showResults();
}


});

function showResults() {


questionElement.textContent =
    "🎉 Τέλος του Quiz!";


answersElement.innerHTML = "";

nextButton.style.display = "none";


progressText.textContent =
    "Ολοκλήρωσες το Quiz!";


progressBar.style.width = "100%";


const percentage =
    Math.round((score / questions.length) * 100);


scoreElement.innerHTML =
    "🏆 Σωστές απαντήσεις: " +
    score + "/" + questions.length +
    "<br><br>" +
    "🌟 Ποσοστό επιτυχίας: " +
    percentage + "%";


if (percentage === 100) {

    scoreElement.innerHTML +=
        "<br><br>🎉 Συγχαρητήρια! Τέλεια!";

} else if (percentage >= 50) {

    scoreElement.innerHTML +=
        "<br><br>👏 Πολύ καλή προσπάθεια!";

} else {

    scoreElement.innerHTML +=
        "<br><br>💪 Προσπάθησε ξανά!";
}


const restartButton =
    document.createElement("button");

restartButton.textContent =
    "🔄 Ξανά από την αρχή";

restartButton.classList.add("restart-btn");


restartButton.addEventListener("click", restartQuiz);


answersElement.appendChild(restartButton);


const exitButton =
    document.createElement("button");

exitButton.textContent =
    "🚪 Έξοδος";

exitButton.classList.add("exit-btn");


exitButton.addEventListener("click", exitQuiz);


answersElement.appendChild(exitButton);


}

function restartQuiz() {

currentQuestion = 0;

score = 0;

showQuestion();


}

function exitQuiz() {


questionElement.textContent =
    "👋 Ευχαριστούμε που έπαιξες!";

answersElement.innerHTML = "";

scoreElement.textContent = "";

progressText.textContent = "";

progressBar.style.width = "100%";

}

showQuestion();
