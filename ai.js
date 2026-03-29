document.addEventListener("DOMContentLoaded", () => {
  const suggestions = [
    "Start with your hardest subject — your focus is strongest right now.",
    "You have a quiz coming up — review your weakest topic for 20 minutes.",
    "You're doing well — try a 25-minute deep focus session.",
    "Light workload detected — great time to organize your notes.",
    "Stay consistent — even 15 minutes of review will help today.",
    "Focus on progress, not perfection. Start small."
  ];

  const el = document.getElementById("aiSuggestion");

  if (el) {
    const random = suggestions[Math.floor(Math.random() * suggestions.length)];
    el.textContent = random;
  }
});
