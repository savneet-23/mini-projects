
function updateClock() {
  const now = new Date();

  document.getElementById("clock").textContent =
    now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true
    }).replace(/\s?(AM|PM)$/i, "");

  document.getElementById("period").textContent =
    now.getHours() >= 12 ? "PM" : "AM";

  document.getElementById("date").textContent =
    now.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric"
    });
}

updateClock();
setInterval(updateClock, 1000);
