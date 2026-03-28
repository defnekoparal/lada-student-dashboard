const generateBtn = document.getElementById("generateBtn");
const startQuizBtn = document.getElementById("startQuizBtn");
const answerBtns = document.querySelectorAll(".answerBtn");

const summarySection = document.getElementById("summarySection");
const dashboardSection = document.getElementById("dashboardSection");
const quizSection = document.getElementById("quizSection");
const scheduleSection = document.getElementById("scheduleSection");
const quizResult = document.getElementById("quizResult");

generateBtn.addEventListener("click", () => {
  summarySection.classList.remove("hidden");
  dashboardSection.classList.remove("hidden");
});

startQuizBtn.addEventListener("click", () => {
  quizSection.classList.remove("hidden");
});

answerBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    quizResult.textContent =
      "Nice work. Your result suggests a medium confidence level, so a review session was added for tomorrow.";
    scheduleSection.classList.remove("hidden");
  });
});
