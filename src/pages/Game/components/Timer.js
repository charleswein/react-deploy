import React, {useState,useEffect} from 'react'


const Timer = ({timerArray, setTimeInSeconds}) => {

 const [intervalId,setIntervalId] = useState(0) 

 useEffect(()=>{
  let interval = setInterval(() => {
   setTimeInSeconds((prev) => {
    return prev + 1
   })
  }, 1000);
  setIntervalId(interval)
 },[setTimeInSeconds])
 return (
  <div className="timer-container">
   <div className="timer-table">
    <p className="timer-text">{timerArray[0]}</p>
    <span>:</span>
    <p className="timer-text">{timerArray[1]}</p>
    <span>:</span>
    <p className="timer-text">{timerArray[2]}</p>
   </div>
  </div>

 )
}
export {Timer};