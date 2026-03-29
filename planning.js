const energyButtons = document.querySelectorAll(".energy-btn");
const taskContainer = document.getElementById("taskContainer");

const tasks = {
  tired: [
    "Review flashcards",
    "Organize notes",
    "Watch a short lecture",
    "Rewrite key concepts",
  ],
  okay: [
    "Complete homework",
    "Do practice problems",
    "Review weak areas",
    "Summarize a chapter",
  ],
  focused: [
    "Take a full practice test",
    "Deep study session (1–2 hrs)",
    "Work on hardest subject",
    "Teach the material out loud",
  ],
};

energyButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const energy = btn.dataset.energy;

    // highlight selected
    energyButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // update tasks
    const selectedTasks = tasks[energy];

    taskContainer.innerHTML = selectedTasks
      .map((task) => `<div class="task">${task}</div>`)
      .join("");

    // OPTIONAL: save energy
    localStorage.setItem("energyLevel", energy);
  });
});

// load saved energy
const savedEnergy = localStorage.getItem("energyLevel");
if (savedEnergy) {
  const btn = document.querySelector(`[data-energy="${savedEnergy}"]`);
  if (btn) btn.click();
}
