import React, { useEffect, useState } from "react";
import { VscChromeClose, VscAdd } from "react-icons/vsc";
import { IoIosAddCircle, IoIosTimer } from "react-icons/io";
import { IoTimerOutline } from "react-icons/io5";



const CurrentItem = ({secondsToDhms, title, id, deleteItem, durationsAvg}) => {
    return(
      <div className = "currItem">
      <button className = "currItemButton" value = {title} id = {id} onClick = {() => deleteItem(title, id)}><VscChromeClose size={22}/></button>
      <button className = "currItemTimerButton"><IoTimerOutline size={22}/></button>
      {secondsToDhms(durationsAvg[title]/1000) != '' && durationsAvg[title] && <div className ="hide">On average, this item lasts you {secondsToDhms(durationsAvg[title]/1000)}.</div>}
      {!durationsAvg[title] && <div className ="hide">This item needs more data to calculate an average duration.</div>}
      <div className = "currItemLabel">
      {title}
      </div>
      </div>
    )
  } 

  export default CurrentItem;