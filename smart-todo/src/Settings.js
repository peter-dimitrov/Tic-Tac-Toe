import React, { useEffect, useState } from "react";
import { FiAlertCircle } from "react-icons/fi";
import Notifications from "./Notifications.js";
import { IoArrowBack, IoArrowUndo } from "react-icons/io5";
import Deleteables from "./Deleteables.js"
import AddItemsAutomatically from "./AddItemsAutomatically.js";


const Settings = ({datesDeleted, setDatesDeleted, addItemsAutomatically, handleAddItemsAutomatically, VscChromeClose, navigateToSettingsScreen, settingsScreen, setSettingsScreen, durations, setDurations, durationsAvg, setDurationsAvg, running, objTimeLefts, setRunning, setObjTimeLefts, editItemsData, setEditItemsData, histItems, setHistItems, currItems, setCurrItems, selectNotifFrequency, handleCheckboxChange, notifications}) => {
    
    const closeSettings = (e) => {
        setSettingsScreen(!settingsScreen)
    }

    const startEditItemsData = (e) => {
        setEditItemsData(!editItemsData)
        console.log(editItemsData)
    }

    const clearAllData = (e, val) => {
        // clear hist
        let newArr = [...histItems]
        newArr.splice(e.target.id, 1)
        setHistItems(newArr)

        // clear curr
        console.log('before', currItems)
        let newArr1 = [...currItems]
        newArr1.splice(e.target.id, 1)
        var filtered = newArr1.filter(function(value, index, newArr1){ 
            return value != e.target.title
        });
        setCurrItems(filtered)
        console.log('after', currItems)

        // clear running
        if(Object.keys(running).includes(val)){
            let newArr2 = {...running}
            delete newArr2[val]
            setRunning(newArr2)
        }
        // clear durationsAvg
        console.log('durationsAvg before, ', durationsAvg)
        if(Object.keys(durationsAvg).includes(val)){
            let newArr3 = {...durationsAvg}
            delete newArr3[val]
            // delete durationsAvg[val]
            setDurationsAvg(newArr3)
            console.log('durationsAvg cleared', durationsAvg)
        }
        // clear durations
        console.log('durations before', durations)
        if(Object.keys(durations).includes(val)){
            let newArr4 = {...durations}
            delete newArr4[val]
            // delete durations[val]
            setDurations(newArr4)
            console.log('durations cleared', durations)
        }
        if(Object.keys(datesDeleted).includes(val)){
            let newArr5 = {...datesDeleted}
            // delete datesDeleted[val]
            delete newArr5[val]
            setDatesDeleted(newArr5)
            console.log('datesDeleted cleared', datesDeleted)
        }
    }

    return(
        <div className = "settingsContainer">
        <button className = "backArrowButton" onClick = {(e) => navigateToSettingsScreen(e)}><div><IoArrowBack className = "IoArrowBack"/></div></button>
        <Notifications handleCheckboxChange = {handleCheckboxChange} notifications = {notifications}/>
        {notifications && <div className = "notifFrequency">
        Send me notifications 
          <select className = "notifFrequencySelector" onChange = {(e) => {selectNotifFrequency(e)}}> 
          <option value={0}>Immediately</option>
          <option value={10000}>10 seconds</option>
          <option value={900000}>15 minutes</option>
          <option value={3600000}>1 hour</option>
          <option value={10800000}>3 hours</option>
          <option value={21600000}>6 hours</option>
          <option value={86400000}>1 days</option>
          <option value={172800000}>2 days</option>
          <option value={259200000}>3 days</option>
          </select>
        before my timers are up. <FiAlertCircle className = "alertCircle" size={20}/>
        <div className = "disclaimer">Note: If your selection is greater than your average duration, you will not receive a notification!</div>
        </div>}
        <AddItemsAutomatically handleAddItemsAutomatically = {handleAddItemsAutomatically} addItemsAutomatically = {addItemsAutomatically}/>
        <div/>
        {!editItemsData && histItems.length != 0 && <button className = "editItemsDataButton" onClick = {(e) => startEditItemsData(e)}>Delete Item Data</button>}
        {/* {editItemsData && histItems.length != 0 &&  */}
        {editItemsData && histItems.length != 0 && 
        /* histItems.map((value, id) => {
        return(
        <div>{value} <button id = {id} value = {value} onClick = {(e) => clearAllData(e)}>Clear Data</button></div>
        )}) */

        <Deleteables clearAllData = {clearAllData} histItems = {histItems} currItems = {currItems}/>}

        {editItemsData && histItems.length != 0 && <button onClick = {(e) => startEditItemsData(e)}>Done</button>}
        </div>
    )
  }

  export default Settings;