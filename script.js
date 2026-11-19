// Small interactions for Wictoria's birthday page.
const candles = [...document.querySelectorAll(".candle")];
const cakeMessage = document.getElementById("cake-message");
const relightButton = document.getElementById("relight");

candles.forEach((candle) => {
  candle.addEventListener("click", () => {
    candle.classList.add("out");
    candle.disabled = true;
    const remaining = candles.filter((item) => !item.classList.contains("out")).length;
    if (remaining === 0) {
      cakeMessage.textContent = "All wishes sent into the universe. May they find their way to you! ✨";
      relightButton.hidden = false;
    } else {
      cakeMessage.textContent = `${remaining} candle${remaining === 1 ? "" : "s"} left. Make your wish!`;
    }
  });
});

relightButton.addEventListener("click", () => {
  candles.forEach((candle) => {
    candle.classList.remove("out");
    candle.disabled = false;
  });
  cakeMessage.textContent = "Three little candles. Three little wishes. Tap to blow them out.";
  relightButton.hidden = true;
});

const openLetter = document.getElementById("open-letter");
const letterText = document.getElementById("letter-text");
openLetter.addEventListener("click", () => {
  const isOpen = !letterText.hidden;
  letterText.hidden = isOpen;
  openLetter.innerHTML = isOpen ? "Open your letter <span>♡</span>" : "Close your letter <span>↑</span>";
});

const surpriseButton = document.getElementById("surprise-button");
const surpriseBox = document.querySelector(".surprise");
const surpriseMessages = [
  "Official birthday forecast: 100% chance of smiles, unexpected treats, and very good things ahead. ☀️",
  "A tiny reminder: the world is a little brighter with your kindness, your laughter, and your wonderfully unique self in it. ♡",
  "Your birthday mission: eat something delicious, laugh until your cheeks hurt, and let yourself be celebrated. 🎂"
];
let surpriseIndex = 0;
surpriseButton.addEventListener("click", () => {
  surpriseBox.hidden = false;
  surpriseBox.textContent = surpriseMessages[surpriseIndex % surpriseMessages.length];
  surpriseIndex += 1;
  surpriseButton.textContent = "Another little wish ↻";
  launchConfetti();
});

function launchConfetti() {
  const colors = ["#d98e9e", "#e8c58d", "#b9cdbb", "#c9b5d8"];
  for (let i = 0; i < 34; i += 1) {
    const bit = document.createElement("span");
    bit.className = "confetti-bit";
    bit.style.left = `${Math.random() * 100}%`;
    bit.style.background = colors[i % colors.length];
    bit.style.setProperty("--drift", `${(Math.random() - 0.5) * 180}px`);
    bit.style.animationDelay = `${Math.random() * 0.35}s`;
    document.body.appendChild(bit);
    window.setTimeout(() => bit.remove(), 1900);
  }
}

// Fade sections in as they enter the screen.
const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}


// Persistent background music. No autoplay: browsers start audio after a visitor gesture.
const birthdayAudio = document.getElementById("birthday-audio");
const musicPlayer = document.getElementById("music-player");
const musicToggle = document.getElementById("music-toggle");
const musicToggleIcon = document.getElementById("music-toggle-icon");
const musicToggleLabel = document.getElementById("music-toggle-label");
const musicStatus = document.getElementById("music-status");

function updateMusicPlayer(isPlaying) {
  musicPlayer.classList.toggle("is-playing", isPlaying);
  musicToggle.setAttribute("aria-pressed", String(isPlaying));
  musicToggle.setAttribute("aria-label", isPlaying ? "Pause birthday music" : "Play birthday music");
  musicToggleIcon.textContent = isPlaying ? "Ⅱ" : "▶";
  musicToggleLabel.textContent = isPlaying ? "Pause" : "Play";
  if (isPlaying) musicStatus.textContent = "Now playing ♫";
}

musicToggle.addEventListener("click", async () => {
  if (!birthdayAudio.paused) {
    birthdayAudio.pause();
    return;
  }

  musicStatus.textContent = "Starting music…";
  try {
    await birthdayAudio.play();
    updateMusicPlayer(true);
  } catch (error) {
    updateMusicPlayer(false);
    musicStatus.textContent = "Tap Play to try again";
    console.warn("Birthday music could not be played:", error);
  }
});

birthdayAudio.addEventListener("play", () => updateMusicPlayer(true));
birthdayAudio.addEventListener("pause", () => {
  updateMusicPlayer(false);
  if (!birthdayAudio.ended) musicStatus.textContent = "Music is paused";
});
birthdayAudio.addEventListener("ended", () => {
  // loop is enabled in HTML; this is a defensive UI update for browser differences.
  updateMusicPlayer(false);
});
birthdayAudio.addEventListener("error", () => {
  updateMusicPlayer(false);
  musicStatus.textContent = "Music file couldn't be loaded";
  musicToggle.disabled = true;
  musicToggleLabel.textContent = "Unavailable";
  musicToggle.setAttribute("aria-label", "Birthday music unavailable");
});
