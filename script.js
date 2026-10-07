// ======================================================
// عدّل تاريخ الانطلاقة هنا فقط.
// الصيغة: YYYY-MM-DDTHH:MM:SS+03:00
// مثال: "2026-12-01T00:00:00+03:00"
// ======================================================
const LAUNCH_DATE = "2027-01-01T00:00:00+03:00";

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const yearEl = document.getElementById("year");

function pad(number) {
  return String(number).padStart(2, "0");
}

function updateCountdown() {
  const target = new Date(LAUNCH_DATE).getTime();
  const now = Date.now();
  const difference = target - now;

  if (difference <= 0) {
    daysEl.textContent = "00";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    return;
  }

  const totalSeconds = Math.floor(difference / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  daysEl.textContent = pad(days);
  hoursEl.textContent = pad(hours);
  minutesEl.textContent = pad(minutes);
  secondsEl.textContent = pad(seconds);
}

document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".navbar nav").classList.toggle("open");
});

document.querySelectorAll(".navbar nav a").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector(".navbar nav").classList.remove("open");
  });
});

yearEl.textContent = new Date().getFullYear();
updateCountdown();
setInterval(updateCountdown, 1000);
