const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const msg = document.getElementById("message");

yesBtn.addEventListener("click", () => {
  msg.textContent = "Yippiee!! mwah :3 ";
  yesBtn.disabled = true;
  noBtn.disabled = true;
  yesBtn.style.opacity = "0.85";
  noBtn.style.opacity = "0.65";
});

function moveNoButton() {
  const card = document.querySelector(".card");
  const cardRect = card.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  // Keep the button inside the card bounds
  const padding = 16;
  const maxX = cardRect.width - btnRect.width - padding * 2;
  const maxY = cardRect.height - btnRect.height - padding * 2;

  const x = Math.random() * maxX + padding;
  const y = Math.random() * maxY + padding;

  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("click", () => {
  // On mobile (no hover), move on tap too
  moveNoButton();
  msg.textContent = "nuh uh ";
});
