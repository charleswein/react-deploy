import React, {useState} from 'react'

const ControlsTimer = (props) =>{
 const {setTimeInSeconds} = props

 const [intervalId,setIntervalId] = useState(0) 

 const handlerStartButton = () =>{
  let interval = setInterval(() => {
   setTimeInSeconds((prev) => {
    return prev + 1
   })
  }, 1000);
  setIntervalId(interval)
 }
 const handlerStopButton = () =>{
  clearInterval(intervalId)
 }
 const handlerResetButton = () =>{
  clearInterval(intervalId)
  setTimeInSeconds(0)
 }
 return (
  <div className='container-controls'>
   <button className="btn btn-primary m-0" onClick={handlerStartButton}>start</button>
   <button className="btn btn-secondary m-0" onClick={handlerStopButton}>stop</button>
   <button className="btn btn-success m-0" onClick={handlerResetButton}>reset</button>
  </div>
 )
}
export default ControlsTimer;