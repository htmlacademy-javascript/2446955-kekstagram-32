/* eslint-disable no-console */
/*
'8:00' - начало рабочего дня
'17:30' - конец рабочего дня
'14:00' - начало встречи
90 - продолжительность встречи в минутах
*/
function timeToMinutes (time) {
  const hour = time.split(':')[0];
  const minute = time.split(':')[1];

  return hour * 60 + parseInt(minute, 10);
}

const workTime = function(workStart, workEnd, meetingStart, meetingTime) {
  workStart = timeToMinutes(workStart);
  workEnd = timeToMinutes(workEnd);
  meetingStart = timeToMinutes(meetingStart);

  return meetingStart >= workStart && meetingStart + meetingTime <= workEnd;
};

console.log(workTime('08:00', '17:30', '14:00', 90)); // true
console.log(workTime('8:0', '10:0', '8:0', 120)); // true
console.log(workTime('08:00', '14:30', '14:00', 90)); // false
console.log(workTime('14:00', '17:30', '08:0', 90)); // false
console.log(workTime('8:00', '17:30', '08:00', 900)); // false
