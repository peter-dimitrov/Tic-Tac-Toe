import React, { useEffect, useState } from "react";
import CurrentItem from "./CurrentItem.js";

const CurrentItems = ({key, secondsToDhms, durationsAvg, currItems, setCurrItems, deleteItem}) => {
    const curr = currItems.map((title, id) => {return(<div key = {id}><CurrentItem key = {id} secondsToDhms = {secondsToDhms} durationsAvg = {durationsAvg} deleteItem = {deleteItem} id = {id} title = {title}/></div>)})
    return(
      <div className = {currItems.length >= 1 ? "currItemsBorderBottom" : "currItems"}>
        {curr}
      </div>
    )
  }

  export default CurrentItems;