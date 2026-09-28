const questions = [
    {
        question: "Ποια είναι η πρωτεύουσα της Ελλάδας;",
        answers: [
            "Αθήνα",
            "Θεσσαλονίκη",
            "Πάτρα",
            "Λάρισα"
        ],
        correct: 0
    },
    {
        question: "Πόσα πόδια έχει ένας σκύλος;",
        answers: [
            "2",
            "4",
            "6",
            "8"
        ],
        correct: 1
    },
    {
        question: "Ποιος πλανήτης είναι γνωστός ως Κόκκινος Πλανήτης;",
        answers: [
            "Αφροδίτη",
            "Δίας",
            "Άρης",
            "Κρόνος"
        ],
        correct: 2
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");
const scoreElement = document.getElementById("score");

function showQuestion() {

    const question = questions[currentQuestion];

    questionElement.textContent = question.question;

    answersElement.innerHTML = "";

    scoreElement.textContent = "";

    nextButton.style.display = "none";

    question.answers.forEach((answer, index) => {

        const button = document.createElement("button");

        button.textContent = answer;

        button.classList.add("answer");

        button.addEventListener("click", () => {

            // Απενεργοποιούμε όλες τις απαντήσεις
            const allAnswers = document.querySelectorAll(".answer");

            allAnswers.forEach(answerButton => {
                answerButton.disabled = true;
            });

            // Ελέγχουμε αν η απάντηση είναι σωστή
            if (index === question.correct) {

                button.classList.add("correct");

                score++;

            } else {

                button.classList.add("wrong");

                // Δείχνουμε και τη σωστή απάντηση
                allAnswers[question.correct].classList.add("correct");
            }

            // Εμφανίζουμε το κουμπί "Επόμενη"
            nextButton.style.display = "block";
        });

        answersElement.appendChild(button);
    });
}


// Κουμπί "Επόμενη"
nextButton.addEventListener("click", () => {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        showResults();
    }
});


function showResults() {

    questionElement.textContent = "🎉 Τέλος του Quiz!";

    answersElement.innerHTML = "";

    scoreElement.textContent =
        `Το σκορ σου είναι ${score}/${questions.length}`;

    nextButton.style.display = "none";

    // Κουμπί επανάληψης
    const restartButton = document.createElement("button");

    restartButton.textContent = "🔄 Ξανά από την αρχή";

    restartButton.classList.add("restart-btn");

    restartButton.addEventListener("click", restartQuiz);

    answersElement.appendChild(restartButton);


    // Κουμπί εξόδου
    const exitButton = document.createElement("button");

    exitButton.textContent = "🚪 Έξοδος";

    exitButton.classList.add("exit-btn");

    exitButton.addEventListener("click", exitQuiz);

    answersElement.appendChild(exitButton);
}


// Ξεκινάει το Quiz από την αρχή
function restartQuiz() {

    currentQuestion = 0;

    score = 0;

    showQuestion();
}


// Έξοδος
function exitQuiz() {

    questionElement.textContent = "👋 Ευχαριστούμε που έπαιξες!";

    answersElement.innerHTML = "";

    scoreElement.textContent = "";

    nextButton.style.display = "none";
}


// Ξεκινάμε το Quiz
showQuestion();
