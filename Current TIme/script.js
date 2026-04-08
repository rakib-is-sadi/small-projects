let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let now = document.getElementById("now");

function format(time) {
  return time < 10 ? "0" + time : time;
}

function getTIme() {
  const currentTime = new Date();
  let hours = currentTime.getHours();
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;

  now.innerText = ampm;
  hour.innerText = format(hours);
  minute.innerText = format(currentTime.getMinutes());
  second.innerText = format(currentTime.getSeconds());
}

getTIme();
setInterval(getTIme, 1000)