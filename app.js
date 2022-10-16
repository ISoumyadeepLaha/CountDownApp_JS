let finalDate = new Date("oct 23 2022 19:00:00").getTime();

let interval = setInterval(() => {
  let currentDate = new Date().getTime();

  let differance = finalDate - currentDate;

//   console.log(differance);

  let days = Math.floor(differance / (1000 * 60 * 60 * 24));
//   console.log(days);

  let hrs = Math.floor((differance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   console.log(hrs);

  let min = Math.floor((differance % (1000 * 60 * 60)) / (1000 * 60));
//   console.log(min);

  let sec = Math.floor((differance % (1000 * 60)) / 1000);
//   console.log(sec);

  document.getElementById("days").innerHTML = ` ${days}`;
  document.getElementById("hours").innerHTML = ` ${hrs}`;
  document.getElementById("minutes").innerHTML = ` ${min}`;
  document.getElementById("seconds").innerHTML = ` ${sec}`;
}, 1000);
