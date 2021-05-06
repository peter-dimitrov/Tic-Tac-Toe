import React, { useEffect, useState } from "react";
import emailjs from 'emailjs-com';
import { useAuth0 } from "@auth0/auth0-react";

const Timer = ({StopTimer, objTimeLefts, setObjTimeLefts, running, setRunning, date, key, notifications, id, ProgressBar, durationsAvg, secondsToDhms, value}) => {
    if(objTimeLefts[value] > 0){
    return (
    <div className = "barsAndTimers">
    <div className = "secondsLeft">
    {value}
    </div>
    { objTimeLefts[value]/durationsAvg[value] >= .94 &&  objTimeLefts[value]/durationsAvg[value] <= 1 && <ProgressBar className = "progBar" striped animated variant = "custom1" now={100* objTimeLefts[value]/durationsAvg[value]}  label={secondsToDhms(objTimeLefts[value]/1000)}/>}
    { objTimeLefts[value]/durationsAvg[value] >= .88 &&  objTimeLefts[value]/durationsAvg[value] < .94 && <ProgressBar className = "progBar" striped animated variant = "custom2" now={100* objTimeLefts[value]/durationsAvg[value]}  label={secondsToDhms(objTimeLefts[value]/1000)}/>}
    { objTimeLefts[value]/durationsAvg[value] >= .82 &&  objTimeLefts[value]/durationsAvg[value] < .88 && <ProgressBar className = "progBar" striped animated variant = "custom3" now={100* objTimeLefts[value]/durationsAvg[value]} label={secondsToDhms(objTimeLefts[value]/1000)} />}
    { objTimeLefts[value]/durationsAvg[value] >= .76 &&  objTimeLefts[value]/durationsAvg[value] < .82 && <ProgressBar className = "progBar" striped animated variant = "custom4" now={100* objTimeLefts[value]/durationsAvg[value]} label={secondsToDhms(objTimeLefts[value]/1000)} />}
    { objTimeLefts[value]/durationsAvg[value] >= .68 &&  objTimeLefts[value]/durationsAvg[value] < .76 && <ProgressBar className = "progBar" striped animated variant = "custom5" now={100* objTimeLefts[value]/durationsAvg[value]} label={secondsToDhms(objTimeLefts[value]/1000)} />}
    { objTimeLefts[value]/durationsAvg[value] >= .6 &&  objTimeLefts[value]/durationsAvg[value] < .68 && <ProgressBar className = "progBar" striped animated variant = "custom6" now={100* objTimeLefts[value]/durationsAvg[value]} label={secondsToDhms(objTimeLefts[value]/1000)} />}
    { objTimeLefts[value]/durationsAvg[value] >= .52 &&  objTimeLefts[value]/durationsAvg[value] < .6 && <ProgressBar className = "progBar" striped animated variant = "custom7" now={100* objTimeLefts[value]/durationsAvg[value]} label={secondsToDhms(objTimeLefts[value]/1000)} />}
    { objTimeLefts[value]/durationsAvg[value] >= .44 &&  objTimeLefts[value]/durationsAvg[value] < .52 && <ProgressBar className = "progBar" striped animated variant = "custom8" now={100* objTimeLefts[value]/durationsAvg[value]}  label={secondsToDhms(objTimeLefts[value]/1000)}/>}
    { objTimeLefts[value]/durationsAvg[value] >= .36 &&  objTimeLefts[value]/durationsAvg[value] < .44 && <ProgressBar className = "progBar" striped animated variant = "custom9" now={100* objTimeLefts[value]/durationsAvg[value]}  label={secondsToDhms(objTimeLefts[value]/1000)}/>}
    { objTimeLefts[value]/durationsAvg[value] > .25 &&  objTimeLefts[value]/durationsAvg[value] < .36 && <ProgressBar className = "progBar" striped animated variant = "custom10" now={100* objTimeLefts[value]/durationsAvg[value]}  label={secondsToDhms(objTimeLefts[value]/1000)}/>}
    { objTimeLefts[value]/durationsAvg[value] > .15 &&  objTimeLefts[value]/durationsAvg[value] < .25 && <ProgressBar className = "progBar" striped animated variant = "custom11" now={100* objTimeLefts[value]/durationsAvg[value]}  label={secondsToDhms(objTimeLefts[value]/1000)}/>}
    { objTimeLefts[value]/durationsAvg[value] > .075 &&  objTimeLefts[value]/durationsAvg[value] < .15 && <ProgressBar className = "progBar" striped animated variant = "custom12" now={100* objTimeLefts[value]/durationsAvg[value]} label={secondsToDhms(objTimeLefts[value]/1000)} />}
    { objTimeLefts[value]/durationsAvg[value] > 0 &&  objTimeLefts[value]/durationsAvg[value] < .075 && <ProgressBar className = "progBar" striped animated variant = "custom13" now={100* objTimeLefts[value]/durationsAvg[value]} />}
    </div>
    )
    }
    else{
      return(
        <div/>
      )
    }
  }
export default Timer;