import React, {useState, useEffect} from 'react'

const AverageDurations = ({durationsAvg, secondsToDhms}) => {
  const durs = Object.keys(durationsAvg).map((value, id) => {return (<div>{value} : {secondsToDhms(durationsAvg[value]/1000)}</div>)})
  return(
    <div className = "durationsHeader">
    On average, your groceries last about:
      {durs}
    </div>
  )
}

export default AverageDurations;