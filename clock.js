function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    const time = now.toLocaleTimeString();
    const date = now.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    clock.textContent = `${time} ${date}`;
  }
  setInterval(updateClock, 1000);
  updateClock();