import React, { useEffect, useState } from "react";
import Timer from "./Timer.js"

const Timers = ({StopTimer, objTimeLefts, setObjTimeLefts, running, setRunning, date, notifications, key, ProgressBar, secondsToDhms, durationsAvg, histItems}) => {
  const temp = Object.keys(objTimeLefts).filter(element => objTimeLefts[element] >= 0)
  const timersList = Object.keys(objTimeLefts).map((value, id) => {
      return (
      <div>
      {histItems.includes(value) && durationsAvg[value] && <Timer StopTimer = {StopTimer} objTimeLefts = {objTimeLefts} setObjTimeLefts = {setObjTimeLefts} running = {running} setRunning = {setRunning} date = {date} notifications = {notifications} key = {id} ProgressBar = {ProgressBar} durationsAvg = {durationsAvg} secondsToDhms = {secondsToDhms} id = {id} value = {value}/>}
      </div>
      )
      }
    )
    return(
      <div className = "timerSection">
        {Object.keys(temp).length < 1 
          && <div className = "timersLength">Your grocery timers will appear here.</div>}
        {timersList}
      </div>
    )
  }

  export default Timers; 