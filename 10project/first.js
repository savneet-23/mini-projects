
const form = document.querySelector("form");

form.addEventListener("submit", (e)=> {
    e.preventDefault();

    let score = 0;

    // Question 1
    const q1 = document.querySelector('input[name="q1"]:checked');

    if (q1 && q1.value === "Paris") {
        score++;
    }

    // Question 2
    const q2 = document.querySelectorAll('input[name="q2"]:checked');

    let selectedAnswers = [];

    q2.forEach(function (answer) {
        selectedAnswers.push(answer.value);
    });

    const correctAnswers = ["JavaScript", "Python", "Java"];

    if (
        selectedAnswers.length === correctAnswers.length &&
        correctAnswers.every(answer => selectedAnswers.includes(answer))
    ) {
        score++;
    }

    // Question 3
    const q3 = document.querySelector('input[name="q3"]').value.trim();

    if (q3.toLowerCase() === "hypertext markup language") {
        score++;
    }

    // Question 4
    const q4 = document.querySelector('select[name="q4"]').value;

    if (q4 === "15") {
        score++;
    }

    // Display result
    const result = document.createElement("p");
    result.textContent = `Your score is ${score} out of 4.`;

    form.append(result);
});


// ```js
// const form = document.querySelector("form");
// const answers=[ q1:""]

// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const data = new FormData(form);

//     for (const [key, value] of data) {
//         console.log(key, value);
//     }
// });
// ```


