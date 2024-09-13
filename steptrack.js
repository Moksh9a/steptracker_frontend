let stepCount = 0;
let tracking = false;
let stepInterval;

function updateStepCount() {
  stepCount++;
  document.getElementById('stepCount').innerText = `Steps: ${stepCount}`;
}

function startTracking() {
  if (!tracking) {
    tracking = true;
    document.getElementById('startBtn').disabled = true;
    document.getElementById('stopBtn').disabled = false;
    stepInterval = setInterval(updateStepCount, 1000); // Simulates step tracking every second
  }
}

function stopTracking() {
  if (tracking) {
    clearInterval(stepInterval);
    tracking = false;
    document.getElementById('startBtn').disabled = false;
    document.getElementById('stopBtn').disabled = true;
  }
}
