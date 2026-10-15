
"use strict";

// ==========================================
// QUIZ SETTINGS
// ==========================================

const QUIZ_LENGTH = 10;

// ==========================================
// QUESTION BANK: 50 QUESTIONS
// ==========================================

const questions = [
    { category: "Science", question: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Mercury"], answer: "Mars" },
    { category: "Geography", question: "What is the capital of Japan?", options: ["Seoul", "Beijing", "Tokyo", "Bangkok"], answer: "Tokyo" },
    { category: "Science", question: "What is the chemical symbol for gold?", options: ["Ag", "Au", "Fe", "Go"], answer: "Au" },
    { category: "Geography", question: "Which is the largest ocean on Earth?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], answer: "Pacific" },
    { category: "Technology", question: "What does CPU stand for?", options: ["Central Processing Unit", "Computer Personal Unit", "Central Program Utility", "Control Processing User"], answer: "Central Processing Unit" },
    { category: "Science", question: "Which gas do plants absorb from the atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"], answer: "Carbon dioxide" },
    { category: "Literature", question: "Who wrote Romeo and Juliet?", options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"], answer: "William Shakespeare" },
    { category: "Mathematics", question: "What is the square root of 144?", options: ["10", "11", "12", "14"], answer: "12" },
    { category: "Geography", question: "Where are the pyramids of Giza located?", options: ["Mexico", "Egypt", "Greece", "India"], answer: "Egypt" },
    { category: "Science", question: "How many bones are typically in an adult human body?", options: ["196", "206", "216", "226"], answer: "206" },

    { category: "History", question: "In which year did World War II end?", options: ["1943", "1944", "1945", "1946"], answer: "1945" },
    { category: "Geography", question: "Which is the largest continent by land area?", options: ["Africa", "Europe", "Asia", "North America"], answer: "Asia" },
    { category: "Science", question: "What is the hardest naturally occurring substance?", options: ["Quartz", "Iron", "Diamond", "Granite"], answer: "Diamond" },
    { category: "Sports", question: "How many players from one team are on the field in a standard football (soccer) match?", options: ["9", "10", "11", "12"], answer: "11" },
    { category: "Technology", question: "What does HTML stand for?", options: ["HyperText Markup Language", "HighText Machine Language", "HyperTransfer Markup Link", "Home Tool Markup Language"], answer: "HyperText Markup Language" },
    { category: "Geography", question: "Which river flows through Egypt?", options: ["Amazon", "Nile", "Danube", "Yangtze"], answer: "Nile" },
    { category: "Science", question: "What is the closest star to Earth?", options: ["Sirius", "Proxima Centauri", "The Sun", "Polaris"], answer: "The Sun" },
    { category: "History", question: "Who was the first person to walk on the Moon?", options: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "Michael Collins"], answer: "Neil Armstrong" },
    { category: "Science", question: "At standard atmospheric pressure, what is the boiling point of water?", options: ["50°C", "90°C", "100°C", "120°C"], answer: "100°C" },
    { category: "Geography", question: "Which country is often described as being shaped like a boot?", options: ["Spain", "Italy", "Portugal", "Croatia"], answer: "Italy" },

    { category: "Biology", question: "Which organ pumps blood around the human body?", options: ["Lungs", "Liver", "Heart", "Kidneys"], answer: "Heart" },
    { category: "Science", question: "What is the chemical formula for water?", options: ["CO2", "H2O", "O2", "NaCl"], answer: "H2O" },
    { category: "General Knowledge", question: "How many days are in a leap year?", options: ["364", "365", "366", "367"], answer: "366" },
    { category: "Geography", question: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Perth"], answer: "Canberra" },
    { category: "Technology", question: "Which company developed the Windows operating system?", options: ["Apple", "Microsoft", "Google", "IBM"], answer: "Microsoft" },
    { category: "Science", question: "Which vitamin can the body produce when skin is exposed to sunlight?", options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"], answer: "Vitamin D" },
    { category: "Literature", question: "Who wrote the Harry Potter series?", options: ["J.R.R. Tolkien", "J.K. Rowling", "C.S. Lewis", "Roald Dahl"], answer: "J.K. Rowling" },
    { category: "Geography", question: "Which is the smallest continent by land area?", options: ["Europe", "Antarctica", "Australia", "South America"], answer: "Australia" },
    { category: "Science", question: "What force pulls objects toward Earth?", options: ["Magnetism", "Friction", "Gravity", "Electricity"], answer: "Gravity" },
    { category: "Sports", question: "How many rings appear on the Olympic flag?", options: ["Four", "Five", "Six", "Seven"], answer: "Five" },

    { category: "Geography", question: "What is the largest hot desert in the world?", options: ["Gobi", "Sahara", "Arabian", "Kalahari"], answer: "Sahara" },
    { category: "Biology", question: "Which part of a plant usually absorbs water from the soil?", options: ["Flowers", "Leaves", "Roots", "Fruit"], answer: "Roots" },
    { category: "History", question: "The ancient Olympic Games originated in which country?", options: ["Italy", "Egypt", "Greece", "Turkey"], answer: "Greece" },
    { category: "Technology", question: "What does URL stand for?", options: ["Uniform Resource Locator", "Universal Reference Link", "Unified Resource Language", "Uniform Retrieval Line"], answer: "Uniform Resource Locator" },
    { category: "Science", question: "Which gas makes up the largest percentage of Earth's atmosphere?", options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"], answer: "Nitrogen" },
    { category: "Geography", question: "What is the capital of Canada?", options: ["Toronto", "Vancouver", "Ottawa", "Montreal"], answer: "Ottawa" },
    { category: "Biology", question: "Which blood cells help the body fight infections?", options: ["Red blood cells", "White blood cells", "Platelets", "Plasma"], answer: "White blood cells" },
    { category: "Science", question: "What is the approximate speed of light in a vacuum?", options: ["30,000 km/s", "150,000 km/s", "300,000 km/s", "3,000,000 km/s"], answer: "300,000 km/s" },
    { category: "Geography", question: "Which country is home to Barcelona?", options: ["Italy", "Spain", "France", "Argentina"], answer: "Spain" },
    { category: "Mathematics", question: "What is 15 × 8?", options: ["100", "110", "120", "130"], answer: "120" },

    { category: "Science", question: "Which instrument measures temperature?", options: ["Barometer", "Thermometer", "Altimeter", "Hygrometer"], answer: "Thermometer" },
    { category: "Mathematics", question: "How many sides does a hexagon have?", options: ["Five", "Six", "Seven", "Eight"], answer: "Six" },
    { category: "Geography", question: "Which country has the largest population as of 2026?", options: ["India", "China", "United States", "Indonesia"], answer: "India" },
    { category: "Science", question: "What is the main source of energy for Earth's climate system?", options: ["The Moon", "The Sun", "Earth's core", "Ocean tides"], answer: "The Sun" },
    { category: "Technology", question: "Which language is commonly used to add interactivity to websites?", options: ["JavaScript", "JPEG", "HTTP", "PNG"], answer: "JavaScript" },
    { category: "Geography", question: "Which mountain range marks part of the traditional boundary between Europe and Asia?", options: ["Andes", "Alps", "Ural Mountains", "Himalayas"], answer: "Ural Mountains" },
    { category: "Biology", question: "Which of these animals are mammals? Select the best answer.", options: ["Dolphins and bats", "Crocodiles and trout", "Frogs and eagles", "Sharks and lizards"], answer: "Dolphins and bats" },
    { category: "Science", question: "Which is a renewable energy source?", options: ["Solar power", "Coal", "Petroleum", "Natural gas"], answer: "Solar power" },
    { category: "Geography", question: "Which country is in Europe?", options: ["Portugal", "Thailand", "Peru", "New Zealand"], answer: "Portugal" },
    { category: "Science", question: "Which of these is a commonly taught state of matter?", options: ["Gravity", "Energy", "Liquid", "Sound"], answer: "Liquid" }
];

// ==========================================
// GET HTML ELEMENTS
// ==========================================

const form = document.getElementById("quizForm");
const questionsContainer = document.getElementById("questionsContainer");
const progressBar = document.getElementById("progressBar");
const progressTrack = document.getElementById("progressTrack");
const progressText = document.getElementById("progressText");
const questionCount = document.getElementById("questionCount");
const errorMessage = document.getElementById("errorMessage");

const submitButton = document.getElementById("submitButton");
const resetButton = document.getElementById("resetButton");
const tryAgainButton = document.getElementById("tryAgainButton");

const resultCard = document.getElementById("resultCard");
const resultIcon = document.getElementById("resultIcon");
const resultTitle = document.getElementById("resultTitle");
const resultMessage = document.getElementById("resultMessage");
const scoreNumber = document.getElementById("scoreNumber");
const percentageElement = document.getElementById("percentage");
const correctCountElement = document.getElementById("correctCount");
const incorrectCountElement = document.getElementById("incorrectCount");

// ==========================================
// QUIZ STATE
// ==========================================

let selectedQuestions = [];
let quizSubmitted = false;

// ==========================================
// SHUFFLE AND SELECT 10 RANDOM QUESTIONS
// ==========================================

function getRandomQuestions(questionBank, count) {
    const shuffled = [...questionBank];

    // Fisher-Yates shuffle
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [shuffled[i], shuffled[j]] = [
            shuffled[j],
            shuffled[i]
        ];
    }

    return shuffled.slice(0, Math.min(count, shuffled.length));
}

// ==========================================
// DISPLAY QUESTIONS
// ==========================================

function renderQuestions() {
    questionsContainer.innerHTML = "";

    selectedQuestions.forEach((question, index) => {
        const fieldset = document.createElement("fieldset");
        fieldset.className = "question";

        const heading = document.createElement("div");
        heading.className = "question-top";

        const number = document.createElement("span");
        number.className = "question-number";
        number.textContent = String(index + 1).padStart(2, "0");

        const content = document.createElement("div");
        content.className = "question-content";

        const category = document.createElement("span");
        category.className = "category";
        category.textContent = question.category;

        const title = document.createElement("p");
        title.className = "question-title";
        title.id = `question-title-${index}`;
        title.textContent = question.question;

        content.append(category, title);
        heading.append(number, content);

        fieldset.setAttribute("aria-labelledby", title.id);
        fieldset.appendChild(heading);

        const options = document.createElement("div");
        options.className = "options";

        question.options.forEach((option, optionIndex) => {
            const label = document.createElement("label");
            label.className = "option";

            const input = document.createElement("input");
            input.type = "radio";
            input.name = `question-${index}`;
            input.value = option;
            input.id = `q${index}-option${optionIndex}`;

            const text = document.createElement("span");
            text.className = "option-text";
            text.textContent = option;

            input.addEventListener("change", () => {
                errorMessage.classList.add("hidden");
                updateProgress();
            });

            label.append(input, text);
            options.appendChild(label);
        });

        fieldset.appendChild(options);
        questionsContainer.appendChild(fieldset);
    });

    questionCount.textContent = `${selectedQuestions.length} Questions`;
    updateProgress();
}

// ==========================================
// TRACK PROGRESS
// ==========================================

function getAnsweredCount() {
    return selectedQuestions.filter((question, index) => {
        return Boolean(
            form.querySelector(
                `input[name="question-${index}"]:checked`
            )
        );
    }).length;
}

function updateProgress() {
    const total = selectedQuestions.length;
    const answered = getAnsweredCount();
    const percentage = total === 0 ? 0 : (answered / total) * 100;

    progressBar.style.width = `${percentage}%`;
    progressText.textContent = `${answered} of ${total} answered`;

    progressTrack.setAttribute(
        "aria-valuenow",
        String(Math.round(percentage))
    );
}

// ==========================================
// CHECK IF EVERY QUESTION IS ANSWERED
// ==========================================

function allQuestionsAnswered() {
    return getAnsweredCount() === selectedQuestions.length;
}

// ==========================================
// CALCULATE SCORE
// ==========================================

function calculateScore() {
    let score = 0;

    selectedQuestions.forEach((question, index) => {
        const selected = form.querySelector(
            `input[name="question-${index}"]:checked`
        );

        if (selected && selected.value === question.answer) {
            score++;
        }
    });

    return score;
}

// ==========================================
// SHOW RESULTS
// ==========================================

function showResults(score) {
    const total = selectedQuestions.length;
    const incorrect = total - score;
    const percentage = Math.round((score / total) * 100);

    scoreNumber.textContent = `${score}/${total}`;
    percentageElement.textContent = `${percentage}%`;
    correctCountElement.textContent = score;
    incorrectCountElement.textContent = incorrect;

    if (percentage === 100) {
        resultIcon.textContent = "🏆";
        resultTitle.textContent = "Perfect Score!";
        resultMessage.textContent =
            "Amazing! You answered every question correctly.";
    } else if (percentage >= 70) {
        resultIcon.textContent = "🎉";
        resultTitle.textContent = "Great Work!";
        resultMessage.textContent =
            "Excellent job! You have strong general knowledge.";
    } else if (percentage >= 40) {
        resultIcon.textContent = "👏";
        resultTitle.textContent = "Good Effort!";
        resultMessage.textContent =
            "You're making progress. Try another round to improve.";
    } else {
        resultIcon.textContent = "📚";
        resultTitle.textContent = "Keep Learning!";
        resultMessage.textContent =
            "Every round is an opportunity to learn something new.";
    }

    resultCard.classList.remove("hidden");

    resultCard.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

// ==========================================
// SUBMIT ANSWERS
// ==========================================

form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (quizSubmitted) {
        return;
    }

    if (!allQuestionsAnswered()) {
        errorMessage.textContent =
            "Please answer all 10 questions before submitting.";

        errorMessage.classList.remove("hidden");

        const unansweredIndex = selectedQuestions.findIndex(
            (question, index) => {
                return !form.querySelector(
                    `input[name="question-${index}"]:checked`
                );
            }
        );

        const unansweredQuestion =
            questionsContainer.querySelectorAll(".question")[unansweredIndex];

        if (unansweredQuestion) {
            unansweredQuestion.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }

        return;
    }

    errorMessage.classList.add("hidden");

    const score = calculateScore();
    quizSubmitted = true;

    form.querySelectorAll("input").forEach(input => {
        input.disabled = true;
    });

    submitButton.disabled = true;

    showResults(score);
});

// ==========================================
// START OR RESET QUIZ
// ==========================================

function startNewQuiz() {
    selectedQuestions = getRandomQuestions(questions, QUIZ_LENGTH);
    quizSubmitted = false;

    form.reset();

    errorMessage.classList.add("hidden");
    resultCard.classList.add("hidden");

    submitButton.disabled = false;
    resetButton.disabled = false;

    renderQuestions();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Both buttons start a fresh random round.
resetButton.addEventListener("click", startNewQuiz);
tryAgainButton.addEventListener("click", startNewQuiz);

// ==========================================
// INITIALIZE
// ==========================================

startNewQuiz();
