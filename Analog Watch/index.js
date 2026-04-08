let hour = document.querySelector(".hr");
let minute = document.querySelector(".min");
let second = document.querySelector(".sec");

function clockTime() {
  let date = new Date();
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  let hourCalc = hr * 30 + min / 2;
  let minuteCalc = min * 6;
  let secondCalc = sec * 6;
  
  hour.style.transform = `rotate(${hourCalc}deg)`;
  minute.style.transform = `rotate(${minuteCalc}deg)`
  second.style.transform = `rotate(${secondCalc}deg)`
}

clockTime();
setInterval(clockTime, 1000);