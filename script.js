const day = document.querySelector(".day");
const hour = document.querySelector(".hour");
const minut = document.querySelector(".minut");
const second = document.querySelector(".second");

// console.log(soat);
// console.log(time.getDate());
// console.log(time.getHours());
// console.log(time.getMinutes());
// console.log(time.getSeconds());

let setTime = setInterval(function () {
  let time = new Date();
  let options = {
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

  let soat = new Intl.DateTimeFormat("ru-RU", options).format(time);
  second.textContent = time.getSeconds();
  minut.textContent = time.getMinutes();
  hour.textContent = time.getHours();
  day.textContent = time.getDate();
}, 1000);
