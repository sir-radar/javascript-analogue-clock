const hand_hr = document.querySelector('.hand.hour');
const hand_min = document.querySelector('.hand.minute');
const hand_sec = document.querySelector('.hand.second');

function tick(){
  const date = new Date();

  //seconds
  let seconds = date.getSeconds();
  const secDeg = ((seconds / 60) * 360);
  hand_sec.style.transform = `translateY(-50%) rotate(${secDeg}deg)`;

  //minute
  let minutes = date.getMinutes();
  const minDeg = ((minutes / 60) * 360) + (((seconds/60) * 6));
  hand_min.style.transform = `translateY(-50%) rotate(${minDeg}deg)`;

  //hour
  let hours = date.getHours();
  const hourDeg = ((hours / 12) * 360) + (((minutes/60) * 30));
  hand_hr.style.transform = `translateY(-50%) rotate(${hourDeg}deg)`;

}

setInterval(tick, 0)