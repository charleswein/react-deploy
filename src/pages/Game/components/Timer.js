import React, {useState,useEffect} from 'react'
import calculateTimer from '../../../data/calculateTimer'
import ControlsTimer from './ControlsTimer';


const Timer = () => {
 const [timeInSeconds, setTimeInSeconds] = useState(0); 
 const [timerArray, setTimerArray] = useState([]);

 useEffect(() => {
  let timerArray = calculateTimer(timeInSeconds);
  setTimerArray(timerArray)
 }, [timeInSeconds])

 return (
  <div className="timer-container">
   <div className="timer-table">
    <p className="timer-text">{timerArray[0]}</p>
    <span>:</span>
    <p className="timer-text">{timerArray[1]}</p>
    <span>:</span>
    <p className="timer-text">{timerArray[2]}</p>
   </div>
   <ControlsTimer setTimeInSeconds={setTimeInSeconds}/>
  </div>

 )
}
export {Timer};