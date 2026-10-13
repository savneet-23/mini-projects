
const playground = document.querySelector("#playground");
const resetBtn = document.querySelector("#resetBtn");
const clickCount = document.querySelector("#clickCount");
const canvasHint = document.querySelector("#canvasHint");

const colors = [
  "#bfee59ff", // soft lavender
  "#3c96e5ff", // icy blue
  "#ec3a84ff", // blush pink
  "#29d085ff", // mint
  "#ffc227ff", // pale gold
  "#8097ffff"  // periwinkle
];
let totalClicks = 0;

playground.addEventListener("click", function (e) {
    if (e.target.closest("#resetBtn")) return;

    const rect = playground.getBoundingClientRect();

    const circle = document.createElement("div");
    circle.classList.add("circle");

    const color = colors[
        Math.floor(Math.random() * colors.length)
    ];

    circle.style.left = `${e.clientX - rect.left}px`;
    circle.style.top = `${e.clientY - rect.top}px`;

    circle.style.setProperty("--ripple-color", color);
    circle.style.setProperty("--ripple-fill", `${color}30`);
    circle.style.setProperty("--ripple-shadow", `${color}25`);

    circle.textContent = "✳";

    playground.appendChild(circle);

    // Hide the hint after the first click
    canvasHint.classList.add("hidden");

    totalClicks++;
    clickCount.textContent = totalClicks;

    circle.addEventListener("animationend", () => {
        circle.remove();
    }, { once: true });
});

resetBtn.addEventListener("click", function (e) {
    e.stopPropagation();

    playground.querySelectorAll(".circle").forEach(circle => {
        circle.remove();
    });

    totalClicks = 0;
    clickCount.textContent = totalClicks;

    canvasHint.classList.remove("hidden");
});
