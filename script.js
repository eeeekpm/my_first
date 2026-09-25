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

    question.answers.forEach((answer, index) => {

        const button = document.createElement("button");

        button.textContent = answer;

        button.classList.add("answer");

        button.addEventListener("click", () => {

            if (index === question.correct) {
                score++;
            }

            nextButton.style.display = "block";
        });

        answersElement.appendChild(button);
    });
}


nextButton.addEventListener("click", () => {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        questionElement.textContent = "🎉 Τέλος!";

        answersElement.innerHTML = "";

        nextButton.style.display = "none";

        scoreElement.textContent =
            `Το σκορ σου είναι ${score}/${questions.length}`;
    }
});


nextButton.style.display = "none";

showQuestion();