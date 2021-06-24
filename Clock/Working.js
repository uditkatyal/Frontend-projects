const hour = document.querySelector(".hr");
const minute = document.querySelector(".min");
const second = document.querySelector(".sec");

setInterval(() => {
  let date = new Date();
  let hr = date.getHours() * 30 + date.getMinutes() / 2;
  let min = date.getMinutes() * 6;
  let sec = date.getSeconds() * 6;

  hour.style.transform = `rotateZ(${hr}deg)`;
  minute.style.transform = `rotateZ(${min}deg)`;
  second.style.transform = `rotateZ(${sec}deg)`;
});
