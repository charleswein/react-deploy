function calculateTimer(timeInSeconds){
 let hours = Math.floor(timeInSeconds / 3600),
  minutes = Math.floor((timeInSeconds - (hours * 3600)) / 60),
  seconds = timeInSeconds - (hours * 3600) - (minutes * 60);

 let hoursFormate = hours < 10 ? `0${hours}`: hours; 
 let minutesFormate = minutes < 10 ? `0${minutes}`: minutes;
 let secondsFormate = seconds < 10 ? `0${seconds}`: seconds;

 return [hoursFormate, minutesFormate, secondsFormate]
}
export default calculateTimer;